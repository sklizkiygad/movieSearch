import { applyMiddleware, combineReducers, compose } from "redux";
import { createStore } from "redux";
import thunk from 'redux-thunk'
import { filmsReduser } from "./filmsReduser";
import {headerReducer} from "./headerReducer";
import {favouriteReduser} from "./favouritesReduser";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import {filterReduser} from "./filterReduser";
import {themeReducer} from "./themeReduser";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['favouriteFilms']
};
const persistConfigTheme = {
    key: 'theme',
    storage,
    whitelist: ['darkTheme']
};

let reducers = combineReducers({
    films : filmsReduser,
    header: headerReducer,
    filter: filterReduser,
    favouriteFilms: persistReducer(persistConfig, favouriteReduser),
    theme: persistReducer(persistConfigTheme, themeReducer)
})

const store = createStore(reducers,
    compose(
        applyMiddleware(
            thunk
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

export const persistor = persistStore(store);
export default store;
