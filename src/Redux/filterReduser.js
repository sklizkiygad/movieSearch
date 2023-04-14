import {GET_GENRES} from "./typeAction";


const initialState = {
    genres: [],
    countries: [],
    rating: null,
    fromYear: null,
    toYear: null,
}

export const filterReduser = (state = initialState, action) => {
    switch (action.type) {
        case GET_GENRES:
            return {
                ...state,
                genres: action.genres,
                countries: action.countries
            }
        default:
            return state
    }
}
