import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, resetDetail } from '../actions';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import StyleDetail from './Detail.module.css';



export default function Detail(){

    const dispatch = useDispatch()
    const {id} = useParams();
    useEffect(()=>{
        dispatch(getDetail(id));
        return dispatch(resetDetail())
    }, [dispatch])
    const myRecipe = useSelector((state) => (state.detail))


    //agregue un replace para eliminar las etiquetas html que me traia desde la api en la prop summary
    return (
        <div className={StyleDetail.generalDetail}>
            {   myRecipe.length?
                myRecipe?.map(c => {
                    return (
                    <div className={StyleDetail.contenido}>
                    <h1 className={StyleDetail.titulo}>{c.title}</h1>
                    <img className={StyleDetail.imagenes} src={c.image} />
                    <h3 className={StyleDetail.subtitulos}>Health Score: {c.healthScore}</h3>
                    <h3 className={StyleDetail.subtitulos}>Dish Types: {c.dishTypes}</h3>
                    <h3 className={StyleDetail.subtitulos}>Diets: {c.diets? c.diets.join(', '): c.diet.join(', ')}</h3>
                    <h3 className={StyleDetail.subtitulos1}>Summary: {c.summary.replace(/<[^>]+>/g,"")}</h3>
                    <h3 className={StyleDetail.subtitulos1}>Steps: {c.analyzedInstructions}</h3>
                </div>
                    )
                })
                :<img className={StyleDetail.giffs} src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Foods_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif" />
                
            }
            <br/>
            <Link to="/home">
                <button className={StyleDetail.BackDetail}>Volver</button>
            </Link>
        </div>
    )
}