import React, {useEffect} from "react";
import './descriptionFilm.css'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteSelectedFilmById, setSelectedFilmById} from "../../Redux/actions";
import {FavoriteButtons} from "../Films/CardFilm";
import {Preloader} from "../Loader/Preloader";
import {darkThemeSelector} from "../../Redux/selectors";

const DescriptionFilm = () => {
   const {id} = useParams();
   const dispatch = useDispatch();
   const selectedFilm = useSelector(state => state.films.selectedMovie);
   const isLoading = useSelector(state => state.films.isLoading)
   const favouriteFilms = useSelector((state) => state.favouriteFilms.favouriteFilms)
   const darkTheme = useSelector(darkThemeSelector);

   useEffect(() => {
      dispatch(setSelectedFilmById(id))
      return () => {
         dispatch(deleteSelectedFilmById())
      }
   }, [dispatch, id])

   if(!selectedFilm) return null

   return (
     <div className={'description'}>
        {isLoading ? <Preloader/> :(
          <div className="description__container">
             <div className="description__row">
                <div className="description__column description__column_1">
                   <div className="description__image">
                      <img src={selectedFilm.posterUrl} alt={''}/><br/>
                   </div>
                </div>
                <div className="description__column">
                   <div className="description__body">
                      <div className="description__item">
                         <div className={darkTheme ? "description__title dark" : "description__title"}>Название:</div>
                         <div className={darkTheme ? "description__value dark" : "description__value"}>
                            {selectedFilm.nameRu}
                         </div>
                      </div>
                   </div>
                   <div className="description__body">
                      <div className="description__item">
                         <div className={darkTheme ? "description__title dark" : "description__title"}>Слоагн:</div>
                         <div className={darkTheme ? "description__value dark" : "description__value"}>
                            {selectedFilm.slogan || 'Без слогана'}
                         </div>
                      </div>
                   </div>
                   <div className="description__body">
                      <div className="description__item">
                         <div className={darkTheme ? "description__title dark" : "description__title"}>Продолжительность:</div>
                         <div className={darkTheme ? "description__value dark" : "description__value"}>
                            {selectedFilm.filmLength}
                         </div>
                      </div>
                   </div>
                   <div className="description__body">
                      <div className="description__item">
                         <div className={darkTheme ? "description__title dark" : "description__title"}>Год:</div>
                         <div className={darkTheme ? "description__value dark" : "description__value"}>
                            {selectedFilm.year}
                         </div>
                      </div>
                   </div>
                   <div className="description__body">
                      <div className="description__item">
                         <div className={darkTheme ? "description__title dark" : "description__title"}>Жанр:</div>
                         <div className={darkTheme ? "description__value dark" : "description__value"}>
                            {selectedFilm.genres.map((g, index) => <span key={index}>{g.genre} </span>)}
                         </div>
                      </div>
                   </div>
                   <div className="description__body">
                      <div className="description__item">
                         <div className={darkTheme ? "description__title dark" : "description__title"}>Страна:</div>
                         <div className={darkTheme ? "description__value dark" : "description__value"}>
                            {selectedFilm.countries.map((c, index) => <span key={index}>{c.country} </span>)}
                         </div>
                      </div>
                   </div>
                   <div className="description__body">
                      <div className="description__item">
                         <div className={darkTheme ? "description__title dark" : "description__title"}>Возратные ограничения:</div>
                         <div className={darkTheme ? "description__value dark" : "description__value"}>
                            {selectedFilm.ratingAgeLimits}+
                         </div>
                      </div>
                   </div>
                   <div className="description__body">
                      <div className={darkTheme ? "description__value dark" : "description__value"}>
                         <FavoriteButtons favouriteFilms={favouriteFilms} film={selectedFilm}
                                          filmId={selectedFilm.filmId}/>
                      </div>

                   </div>
                </div>
             </div>
             <div className={darkTheme ? "description__text dark" : "description__text"}>
                <p>
                   {selectedFilm.description}
                </p>
             </div>
          </div>
        )}

     </div>
   )
}
export default DescriptionFilm
