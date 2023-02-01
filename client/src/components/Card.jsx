import React from "react";
import cardStyle from './Card.module.css'


export default function Card({title, image, diets, diet, healthScore, dishTypes}){

    return(
        <div className={cardStyle.contenedor}>
            <h3 className={cardStyle.letras}>{title}</h3>
            <h5 className={cardStyle.letras}>Diets: {diets}</h5>
            <h5 className={cardStyle.letras}>{diet}</h5>
            {dishTypes? <h5 className={cardStyle.letras}>Dish Type: {dishTypes}</h5> : null}
            <h5 className={cardStyle.letras}>Health Score: {healthScore}</h5>
            <img src={image} alt="img not found" className={cardStyle.image}/>
        </div>
    )

}