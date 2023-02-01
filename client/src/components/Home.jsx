import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipes, getDiet, filterCreated, orderByName, orderByHealthScore, stateFilt} from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import estilosHome from './Home.module.css'
import SearchBar from "./SearchBar";




export default function Home(){
    //me creo la constante dispatch para ir despachando mis acciones
    const dispatch = useDispatch()
    //me creo un estado local para cuando haga el ordenamiento me lo setee en la pagina 1
    const [orden, setOrden] = useState('')
    //me traigo todo lo que esta en el estado de recipes con el useSelector del reducer
    const allRecipes = useSelector((state) => (state.recipes))
    //para hacer el paginado declaro un estado local con la pagina actual y un estado que me setee la pagina actual
    const [currentPage, setCurrentPage] = useState(1);
    
    
    //declaro otro estado local con las recetas que necesito por pagina y ademas que setee las recetas
    const recipesPerPage = 9;
    //creo una constante que va a guardar el indice de la ultima receta multiplicando la pagina actual por los recipientes por pagina 
    const indexOfLastRecipe = currentPage * recipesPerPage;
    //luego me creo una constante con el indice del primer recipiente que va a ser igual al indice del ultimo recipiente menos los recipientes por pagina
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    //creo una constante con las recetas actuales tomando las recetas que me traigo del estado del reducer y le aplico un slice tomando como referencia el indice de la primera receta y la ultima de la pagina actual
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)
    //me creo una constante paginado para ayudarme a renderizar las paginas con las cards
    
    
    const paginado = (pageNum) => {
        setCurrentPage(pageNum)
        
    }

    


    //me traigo del estado las recipes o recetas cuando el componente se monta con useEffect pasandole al dispatch la accion getRecipes que nos importamos
    useEffect(()=>{
        if(allRecipes.length){
            dispatch(stateFilt())
        }
        if(!allRecipes.length){
        dispatch(getRecipes())
        }
    },[dispatch])
    
   
   //agrego una funcion en la cual me vuelva a renderizar todos las recetas luego de hacer algun filtrado
   function handleClick(e){
      e.preventDefault();
      dispatch(getRecipes())
   }

   function handleOrderByName(e){
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`)
   }

   function handleOrderByHealthScore(e){
    e.preventDefault();
    dispatch(orderByHealthScore(e.target.value))
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`)
   }

   function handleFilterCreated(e){
    e.preventDefault();
    dispatch(filterCreated(e.target.value))
   }

   function handleFilterDiet(e){
    e.preventDefault();
    dispatch(getDiet(e.target.value))
   }

    return(
        <div className={estilosHome.gen}>
            <div className={estilosHome.navBar}>

            <Link to='/recipes' className={estilosHome.buttonBar}>Create Recipe</Link>

            <button onClick={e=> {handleClick(e)}} className={estilosHome.buttonBar}>Back to all Recipes</button>

                <select onChange={e => handleOrderByName(e)} className={estilosHome.selector}>
                    <option value="asc" className={estilosHome.options}>Ascending By Name</option>
                    <option value="desc" className={estilosHome.options}>Descending By Name</option>
                </select>
                <select onChange={e => handleFilterDiet(e)} className={estilosHome.selector}>
                    <option value="all" className={estilosHome.options}>All Diets</option>
                    <option value="gluten free" className={estilosHome.options}>Gluten Free</option>
                    <option value="dairy free" className={estilosHome.options}>Dairy Free</option>
                    <option value="vegan" className={estilosHome.options}>Vegan</option>
                    <option value="lacto ovo vegetarian" className={estilosHome.options}>Lacto Ovo Vegetarian</option>
                    <option value="paleolithic" className={estilosHome.options}>Paleolithic</option>
                    <option value="whole 30" className={estilosHome.options}>Whole 30</option>
                    <option value="primal" className={estilosHome.options}>Primal</option>
                    <option value="pescatarian" className={estilosHome.options}>Pescatarian</option>
                    <option value="ketogenic" className={estilosHome.options}>Ketogenic</option>
                    <option value="fodmap friendly" className={estilosHome.options}>Fodmap Friendly</option>
                </select>
                <select onChange={e => handleFilterCreated(e)} className={estilosHome.selector}>
                    <option value="All" className={estilosHome.options}>All Recipes</option>
                    <option value="Created" className={estilosHome.options}>Created Recipes</option>
                    <option value="api" className={estilosHome.options}>Existing Recipes</option>
                </select>

                <SearchBar/>
                <select onChange={e => handleOrderByHealthScore(e)} className={estilosHome.selector}>
                    <option value="asc" className={estilosHome.options}>Title and Health Score Ascending</option>
                    <option value="desc" className={estilosHome.options}>Title and Health Score Descending</option>
                </select>
                </div>
           
            <Paginado 
            //le paso las props que necesito al componente paginado para hacer la logica 
            recipesPerPage={recipesPerPage}
            allRecipes={allRecipes.length}
            paginado={paginado}
            currentPage={currentPage}
            
            />
            <div className={estilosHome.card}>
            {   currentRecipes.length?
                currentRecipes?.map(c => {
                    return(
                        <div>
                            <Link to={'/home/' + c.id} className={estilosHome.linkestilos}>
                                <Card title={c.title} image={c.image} dishTypes={c.dishTypes? c.dishTypes.join(", "): c.dishTypes} diets={c.diet? c.diet.join(", "): c.diets.join(", ")} healthScore={c.healthScore} key={c.id}/>
                            </Link>
                        </div>
                    )
                })
           : <img className={estilosHome.giff} src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Foods_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif" /> }
            </div>
            <Link to='/'>
              <button className={estilosHome.back}>Back</button>
            </Link>


        </div>
    )
}



