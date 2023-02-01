import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {getNameRecipe} from '../actions';
import styleSearch from './SearchBar.module.css'

export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState('')

    function handleInputChange(e){
        e.preventDefault(e);
        setName(e.target.value)
        
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getNameRecipe(name))
        
    }

    return(
        <div className={styleSearch.searchGen}>
            <input className={styleSearch.inputstyle} type="text" placeholder="Search..." onChange={e => handleInputChange(e)} />
            <button className={styleSearch.inputstyle} type="submit" onClick={e => handleSubmit(e)}>Search Recipe</button>
        </div>
    )
    
}