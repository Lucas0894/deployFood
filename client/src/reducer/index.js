
//me creo una propiedad allRecipes para utilizarla como backup de filtrado, y utilizando la propiedad recipes para almacenar todos los filtros que voy aplicando sobre la propiedad allRecipes
const initialState = {
    recipes: [],
    detail: [],
    allRecipes: [],
    diets: [],
    
}


function rootReducer(state=initialState, action){
    switch(action.type){
        case 'GET_RECIPES':
            return {
                ...state,
                recipes: action.payload,
                allRecipes: action.payload
            }
        case 'POST_RECIPE':
                return {
                    ...state
                }

        case 'RESET_DETAIL':
            return {
                ...state,
                detail: []
            }

        case 'STATE_FILT':
            return {
                ...state,
            }

                
        case 'GET_ALL_DIETS':
            return {
                ...state,
                diets: action.payload
            }

        case 'GET_DETAIL':
            return{
                ...state,
                detail: action.payload
            }


        case 'ORDER_BY_HEALTHSCORE':
            let sortHealthScore = action.payload === 'asc'?
        state.allRecipes.sort(function(a,b){
            if(a.healthScore > b.healthScore){
                return 1
            }
            if(b.healthScore > a.healthScore){
                return -1
            }
            return 0
        }): state.allRecipes.sort(function(a,b){
            if(a.healthScore > b.healthScore){
                return -1
            }
            if(b.healthScore > a.healthScore ){
                return 1
            }
            return 0
        })
        return{
            ...state,
            recipes: sortHealthScore
        }

        case 'GET_DIETS':
            const allRecipes = state.allRecipes;
            const statusFilt = action.payload === 'all'? allRecipes: allRecipes.filter(el => el.diet? el.diet.includes(action.payload): el.diets.includes(action.payload))
            return {
                ...state,
                recipes: statusFilt,
                recipesDiets: statusFilt
            }

        case 'FILTER_CREATED':
            const createdFilter = action.payload === 'Created'? state.allRecipes.filter(el => el.createdInDb): state.allRecipes.filter(el => !el.createdInDb)
            return {
                ...state,
                recipes: action.payload === 'All'? state.allRecipes: createdFilter
            }

        case 'ORDER_BY_NAME':
            let sortOrder = action.payload === 'asc'?
        state.allRecipes.sort(function(a,b){
            if(a.title > b.title){
                return 1
            }
            if(b.title > a.title){
                return -1
            }
            return 0
        }): state.allRecipes.sort(function(a,b){
            if(a.title > b.title){
                return -1
            }
            if(b.title > a.title){
                return 1
            }
            return 0
        })
            return {
                ...state,
                recipes: sortOrder
            }



        case 'GET_NAME':
            return {
                ...state,
                recipes: action.payload
            }


            default: return state
    }
    

}

export default rootReducer;