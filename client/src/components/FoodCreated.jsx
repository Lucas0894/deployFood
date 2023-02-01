import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllDiets, postRecipe } from "../actions/index";
import estilosCreated from './FoodCreated.module.css'


export default function FoodCreated(){
    const dispatch = useDispatch();
    //me traigo las dietas del estado diets del reducer
    const diets = useSelector((state) => state.diets)
    // uso el useHistory para que una vez submiteado el form me lleve a la ruta indicada
    const history = useHistory();

    
    const [errors, setErrors] =useState(0)


    


    const [input, setInput] = useState({
        title: "",
        image: "",
        diet: [],
        analyzedInstructions: "",
        summary: "",
        healthScore:0, 
        
    })

    useEffect(()=> {
        dispatch(getAllDiets())
    }, [dispatch])
    


    function handletitle(e){
        const value = e.target.value;
        console.log(value)
        const onliletras = /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value);

        if(onliletras== false){
            setErrors(1)
        }else{
            setErrors(0)
        }

        if(onliletras == true){
            setErrors(0)
        }
        setInput({
            ...input,
            [e.target.name]: value
        })
    }
    
    function handleImage(e){
        const value = e.target.value;
        const onliImage = /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/.test(value)
        if(onliImage == false){
            setErrors(2)
        }else{
            setErrors(0)
        }
        setInput({
            ...input,
            [e.target.name]: value
        })
    }

    function handleSummary(e){
        const value = e.target.value;
        const onliSummary = /^[a-z0-9-]+$/.test(value);
        if(onliSummary == false && onliSummary == ""){
            setErrors(3)
        }else{
            setErrors(0)
        }
        setInput({
            ...input,
            [e.target.name]: value
        })
        
    }

    function handleSteps(e){
        const value = e.target.value;
        const onliSteps = /^[a-z0-9-]+$/.test(value);
        if(onliSteps == false && onliSteps ==""){
            setErrors(4)
        }else{
            setErrors(0)
        }
        setInput({
            ...input,
            [e.target.name]: value
        })
    }
    
    function handleHealthScore(e){
        const value = e.target.value;
        const onliNumber = value > 0 && value < 101;
        if(onliNumber == false){
            setErrors(5)
        }else{
            setErrors(0)
        }
        setInput({
            ...input,
            [e.target.name]: value
        })
    }

    function handleSelect(e){
        if(!input.diet.length){
            setErrors(6)
        }else{
            setErrors(0)
        }
        if(input.diet.includes(e.target.value)){
            setInput({
                ...input,
                diet: [...input.diet]
            })
        }else{
            setInput({
                ...input,
                diet: [...input.diet, e.target.value]
            })
        }
        

    }

    function handleDelete(el){
       
        setInput({
            ...input,
            diet: input.diet.filter(dit => dit !== el)
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(input)
        dispatch(postRecipe(input))
        alert('Recipe Created Successfully');
        setInput({
            title: "",
            image: "",
            diet: [],
            analyzedInstructions: "",
            summary: "",
            healthScore:0
        })
        history.push('/home')

    }

    


    return (
        <div className={estilosCreated.gereralCreated}>
            <form onSubmit={(e)=> handleSubmit(e)} className={estilosCreated.transparente}>
            <h1 className={estilosCreated.title}>Create Recipe</h1>
            <div>
                <div>
                    <label className={estilosCreated.sub}>Title</label>
                    <br/>
                    <input type='text'
                    value={input.title}
                    name='title'
                    onChange={e=> handletitle(e)}
                    className={estilosCreated.inputsss}/>
                    <br/>
                    {
                        (errors == 1) && (
                            <label className={estilosCreated.errores}>El Titulo solo puede ser letras</label>
                        )
                    }
                </div>
                <div>
                    <label>Image</label>
                    <br/>
                    <input type='text'
                    value={input.image}
                    name='image'
                    onChange={e=>handleImage(e)}
                    className={estilosCreated.inputsss}/>
                    <br/>
                    {
                        (errors ==2) && (
                            <label className={estilosCreated.errores} >La imagen debe ser una direccion de enlace jpg</label>
                        )
                    }
                </div>
                <div>
                    <label>Health Score</label>
                    <br/>
                    <input type="number"
                    value={input.healthScore}
                    name= 'healthScore' 
                    onChange={e => handleHealthScore(e)}
                    className={estilosCreated.inputsss}/>
                    <br/>
                    {
                        (errors == 5) && (
                            <label className={estilosCreated.errores}>Debe ingresar un numero del 1 al 100</label>
                        )
                    }
                </div>
                <div>
                    <label>Diets</label>
                    <br/>
                    <select className={estilosCreated.inputDiet} onChange={e => handleSelect(e)}>
                        {
                            diets && diets.map(dit => (
                                <option className={estilosCreated.optionSelect} value={dit.name}>{dit.name}</option>
                            ))
                        }
                    </select>
                    <br/>
                    {
                        (errors == 6) && (
                            <label className={estilosCreated.errores}>Debe ingresar alguna dieta</label>
                        )
                    }
                    {input.diet.map((el) => 
                        <div className={estilosCreated.box}>
                            <h5 className={estilosCreated.boxing}>{el}</h5>
                            <button className={estilosCreated.buttn} type="button" onClick={() => handleDelete(el)}>x</button>
                           
                        </div>)}
                    
                </div>
                <div>
                    <label>Summary</label>
                    <br/>
                    <textarea type="text"
                    value={input.summary}
                    name='summary' 
                    className={estilosCreated.textarea}
                    onChange={e => handleSummary(e)}/>
                    <br/>
                    {
                        (errors == 3) && (
                            <label className={estilosCreated.errores}>Debe ingresar correctamente el campo summary</label>
                        )
                    }
                </div>
                <div>
                    <label>Steps</label>
                    <br/>
                    <textarea type="text"
                    value={input.analyzedInstructions}
                    name= 'analyzedInstructions' 
                    onChange={e => handleSteps(e)}
                    className={estilosCreated.textarea}
                    />
                    <br/>
                    {
                        (errors == 4) && (
                            <label className={estilosCreated.errores}>Debe ingresar los pasos a seguir de la receta</label>
                        )
                    }
                </div>


            </div>
            <Link to='/home'>
            <button className={estilosCreated.buttonSend}>Back</button>
            </Link>
            {input.title == "" || input.image == "" || input.analyzedInstructions == "" || input.summary == "" || input.healthScore < 1 || input.healthScore > 100 || input.diet.length == 0? <label className={estilosCreated.errores}>Tiene que completar todos los campos correctamente</label> :<button className={estilosCreated.buttonSend} disabled={errors > 0} type="submit">Send Recipe</button>}
            </form>
        </div>
    )
}


