import axios from 'axios';


export function getRecipes(){
    return async function(dispatch){
        try {
            const resFood = await axios.get('https://deployfood-production.up.railway.app/recipes');
            return dispatch({
                type: 'GET_RECIPES',
                payload: resFood.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getAllDiets(){
    return async function(dispatch){
        try {
            const respDiets = await axios.get('https://deployfood-production.up.railway.app//diets');
            return dispatch({
                type: 'GET_ALL_DIETS',
                payload: respDiets.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function postRecipe(body){
    return async function(dispatch){
        try {
            const getinfo = await axios.post('https://deployfood-production.up.railway.app/recipes', body)
            console.log(getinfo)
            return getinfo
        } catch (error) {
            console.log(error)
            
        }
}

}

export function getDiet(payload){
    return{
        type: 'GET_DIETS',
        payload
    }
}

export function filterCreated(payload){
    return{
        type:'FILTER_CREATED',
        payload
    }

}

export function orderByName(payload){
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function getNameRecipe(payload){
    return async function(dispatch){
        try {
            const respName = await axios.get(`https://deployfood-production.up.railway.app/recipes?title=${payload}`);
            return dispatch({
                type: 'GET_NAME',
                payload: respName.data
            })

        } catch (error) {
            console.log(error)
        }
    }
 
}

export function orderByHealthScore(payload){
    return {
        type: 'ORDER_BY_HEALTHSCORE',
        payload
    }
}

export function getDetail(id){
    return async function(dispatch){
        try {
            var json = await axios.get('https://deployfood-production.up.railway.app/recipes/'+ id)
            return dispatch({
                type: 'GET_DETAIL',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function resetDetail(payload){
    return {
        type: 'RESET_DETAIL',
        payload
    }
}

export function stateFilt(payload){
    return {
        type: 'STATE_FILT',
        payload
    }
}