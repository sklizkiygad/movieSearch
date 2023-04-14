import React from "react";
import {useDispatch, useSelector} from "react-redux";
import './films.css'
import './../../Dark.css'
import {darkThemeSelector} from "../../Redux/selectors";
import img from './../../assets/img/defaultMovieImage.jpg'
import {deleteFavouritesFilms, setFavouritesFilms} from "../../Redux/actions";
import {Link} from "react-router-dom";

export const CardFilm = ({film, filmId, nameRu, posterUrlPreview, favouriteFilms, rating}) => {

   const darkTheme = useSelector(darkThemeSelector);

   return (
     <div className="cards__column">
        <div className={darkTheme ? "cards__item dark": "cards__item"}>
           <div className="cards__image">
              <Link to={`/cinemaInfo/${filmId}`}><img src={posterUrlPreview || img} alt=""/></Link>
           </div>
           <div className="cards__body">
              <div className={darkTheme ? "cards__title dark":"cards__title"}>{nameRu}</div>
               <FavoriteButtons filmId={filmId} favouriteFilms={favouriteFilms} film={film}/>
           </div>
        </div>
     </div>
   )
}


export const FavoriteButtons = ({filmId, favouriteFilms, film}) => {
   const dispatch = useDispatch();
   const darkTheme = useSelector(darkThemeSelector);
   return (
     <>
        {
           favouriteFilms.some((item) => item.filmId === filmId) ?
             <button onClick={() => dispatch(deleteFavouritesFilms(film))}
                     className={darkTheme ? 'cards__btn cards__btn_danger dark':'cards__btn cards__btn_danger'}>Удалить из избранного</button>
             :
             <button onClick={() => dispatch(setFavouritesFilms(film))} className={darkTheme ? 'cards__btn dark':'cards__btn'}>Добавить
                в избранное</button>
        }
     </>
   )
}