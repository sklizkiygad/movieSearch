import {
    SHOW_LOADING,
    HIDE_LOADING,
    SHOW_FILMS,
    SET_SELECTED_FILM_ID,
    DELETE_SELECTED_FILM_ID
} from "./typeAction";

let initialState = {
    pagesCount: null,
    films: [],
    isLoading: false,
    currentPage: 1,
    selectedMovie: null,
    isResponse: false,
}

export const filmsReduser = (state = initialState, action) => {

    switch (action.type) {
        case SHOW_FILMS:
            return {
                ...state,
                films: action.payload.films,
                pagesCount: action.payload.pagesCount,
                currentPage: action.payload.currentPage,
            }
        case SHOW_LOADING:
            return {
                ...state,
                isLoading : true
            }
        case HIDE_LOADING:
            return {
                ...state,
                isLoading : false
            }
        case SET_SELECTED_FILM_ID:
            return {
                ...state,
                selectedMovie: action.payload
            }
        case DELETE_SELECTED_FILM_ID:
            return {
                ...state,
                selectedMovie: null
            }
        default:
            return state
    }
}
