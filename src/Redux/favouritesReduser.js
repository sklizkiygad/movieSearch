import {DELETE_FAVOURITE_FILMS, SET_FAVOURITE_FILMS} from "./typeAction";


let initialState = {
    favouriteFilms: [],
}

export const favouriteReduser = (state = initialState, action) => {

    switch (action.type) {
        case SET_FAVOURITE_FILMS:
            return {
                ...state,
                favouriteFilms: [...state.favouriteFilms, action.payload],
            }
        case DELETE_FAVOURITE_FILMS:
            return {
                ...state,
                favouriteFilms: [...state.favouriteFilms.filter(film=>film.filmId !== action.payload.filmId)],
            }
        default:
            return state
    }
}
