import React from "react";
import {useSelector} from "react-redux";
import {Preloader} from "../Loader/Preloader";
import {CardFilm} from "./CardFilm";
import {darkThemeSelector} from "../../Redux/selectors";

const Films = ({films}) => {

   console.log('Render Films')

   const favouriteFilms = useSelector((state) => state.favouriteFilms.favouriteFilms)
   const isLoading = useSelector(state => state.films.isLoading)
   const darkTheme = useSelector(darkThemeSelector);

   if (films.length === 0) {
      return <h2 className={darkTheme ? 'warningText warningTextDark' : 'warningText'}>По вашему запросу ничего не
         найдено!</h2>
   }

   return (
     <section className="cards">
        <div className="cards__row">
           {isLoading ? <Preloader/> :
             films.map((f) => (
               <CardFilm
                 filmId={f.filmId}
                 film={f}
                 nameRu={f.nameRu}
                 posterUrlPreview={f.posterUrlPreview}
                 favouriteFilms={favouriteFilms}
                 rating={f.rating}
                 key={f.filmId}
               />
             ))}
        </div>
     </section>

   )
}
export default Films



