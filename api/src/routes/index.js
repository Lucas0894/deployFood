const { Router } = require('express');
const axios = require('axios');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {Recipe, Diet} = require('../db')
const {API_KEY} = process.env;

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


const getApiInfo = async () => {
    //creamos una constante que va a ser async await ya que como no sabemos el tiempo que va demorar el buscar los datos a la api lo aplicamos para que hasta que no termine de realizar la busqueda que le hemos pedido no continue,
    const urlApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
        //luego aplico un Promise.all ya que la api me trae de a 10 recetas de las 100 que necesito, entonces aplico este metodo y me traigo las 100.
    ;
   
    const apiInfo = urlApi.data.results.map(el => {
            return {
                id: el.id,
                title: el.title,
                image: el.image,
                summary: el.summary,
                healthScore: el.healthScore,
                analyzedInstructions: el.analyzedInstructions.map(el => el.steps.map(el => el.step)),
                diets: el.diets.map(el => el),
                dishTypes: el.dishTypes.map(el => el)
            }
        
    })
   
    return apiInfo
    //aplico un flat ya que lo que va a hacer este metodo va a achatar el array anidado trayendo todos las recetas en un solo array de objetos y no en array anidados como me los trae si no le aplico el metodo.
}


//Me traigo la info que viene de la base de datos y le incluyo el modelo de dieta con el atributo name porque el id ya me lo trae por defecto
const getDbInfo = async () => {
    let recipesDb = await Recipe.findAll({
        include: {
            model: Diet,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })

    recipesDb = recipesDb.map(el => el.toJSON())
    
    recipesDb.map(el => {
        el.diets = el.diets.map(el => el.name)
    })
    return recipesDb;
}


//Luego creo otra function la cual me va a permitir traerme las dos funciones anteriores la que me traje de la api con la que me traigo de la base de datos y concatenarlas a ambas.
const getAllRecipes = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const allInfo = apiInfo.concat(dbInfo)
    return allInfo;
}

router.get('/recipes', async (req, res) => {
    try {
    const name = req.query.title;
    const allRecipes = await getAllRecipes();
    if(name){
        let recipeName = allRecipes.filter(el => el.title.toLowerCase().includes(name.toLowerCase())) // aplico toLowerCase sobre el nombre de las Recetas para pasarlas a minuscula y tambien aplico toLowerCase sobre el nombre que me llega por query para que me lo compare siempre en minuscula y no se rompa si le llego a pasar algo con alguna letra mayuscula. 
        if(recipeName.length){
            res.status(200).send(recipeName)
        }else{
            res.status(404).send('La receta ingresada no existe')
        }
    }else{
        res.status(200).send(allRecipes)
    }
    } catch (error) {
        res.status(404).send(error)
        
    }
    
})

router.get('/diets', async (req, res) =>{
    try {
        const urlApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
        const apiInfo = await urlApi.data.results.map(el => el.diets);
        console.log(apiInfo)
        //aplico flat 2 para achatar el array anidado y me traiga todas las dietas en un solo array
        const apiInflat = apiInfo.flat(2)
        //aplico un new Set para que los dietas no se me repitan tanto en la base de datos como en el front
        const apisss = new Set(apiInflat);
        const resultapiss = [...apisss]
       //aplico un map sobre ese array para almacenar todas las dietas en una variable 
        const getDiet = resultapiss.map(el => {
            return el
        })
       //luego me traigo todas las dietas y por cada una de las dietas aplico un findOrCreate sobre el modelo Diet para que se fije si hay una dieta similar no la duplique y si no hay la crea y la guarda en la base de datos
        getDiet.forEach(el => {
            Diet.findOrCreate({
                where: {name: el}
            })
        })
        console.log(getDiet)
      // por ultimo creo una variable para aplicarle un res.send el cual va a traer todas las diet que me traigo de la base de datos 
        const allDiets = await Diet.findAll();
        res.send(allDiets)
    

    } catch (error) {
        res.status(404).send(error)
        
    }

})

router.post('/recipes', async (req,res) => {
    try {
    //me traigo todo lo que necesito y me pasan por body
    let {
        title,
        image,
        summary,
        healthScore,
        analyzedInstructions,
        createdInDb,
        diet,
        dishTypes
    } = req.body;

    //luego me creo una variable y creo una nueva receta con los valores que me pasan por el body a excepcion de la diet
    let createdFood = await Recipe.create({
        title,
        image,
        summary,
        healthScore,
        analyzedInstructions,
        dishTypes,
        createdInDb
    })

    //luego me creo otra variable para la cual va a traerme todas las diet del modelo que coincidan con la diet que me llega por body

    let dietDb = await Diet.findAll({
        where: {
            name: diet
        }
    })
    // a la receta que me cree le agrego las dietas que encontraron en el modelo y que coincidieron con lo que me pasaron por body, para finalmente enviar un mensaje de exito
    createdFood = createdFood.addDiet(dietDb)
    res.send('Receta creada con exito')
        
    } catch (error) {
        res.status(404).json(error)
    }

    
})

router.get('/recipes/:id', async (req, res) => {

    try {
    //creo una constante el cual voy a trarme el id que me pasan por params
    const {id} = req.params;
    //luego me trigo todas las recetas con el metodo ya creado y ejecutado
    const totalRecipes = await getAllRecipes();
    if(id){
        //creo un condicional y pregundo si me han pasado un id por params, el cual si es asi, creo una variable que va a ser un filter sobre todas las recetas que me traigo y se va a fijar en cada id de cada receta si coincide o no con el id que me pasan por params 
        let recipeId = totalRecipes.filter(el => el.id == id);
        if(recipeId.length){
            //si la variable encontro el id que matchee con el que me pasan por params mando un status 200 y devuelvo la receta encontrada, en caso contrario mando un 404 con un mensaje diendo que no fue encontrada la receta que me pasan por params
            res.status(200).send(recipeId);
        }else{
            res.status(404).send('La receta con dicho id no se encuentra')
        }
    }

    } catch (error) {
        res.status(404).send('La receta con dicho id no se encuentra')
        
    }

    
})


module.exports = router;




