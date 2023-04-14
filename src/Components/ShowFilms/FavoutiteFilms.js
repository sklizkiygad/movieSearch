import React, {useState} from "react";
import Films from "../Films/Films";
import {useSelector} from "react-redux";
import ReactPaginate from "react-paginate";
import {favoriteMovieSelector} from "../../Redux/selectors";

export const FavouriteFilms = () => {
   const favouriteFilms = useSelector(favoriteMovieSelector)
   const [currentPage, setCurrentPage] = useState(0)
   let totalPage = 1

   if(!Array.isArray(favouriteFilms[0])){
      totalPage = 1
   }else{
      totalPage = favouriteFilms.length
   }

   const onPageChanged = (data) => {
     let pageNumber = data.selected
      setCurrentPage(pageNumber)
   };

   return (
     <div className={'container__film'}>
        <ReactPaginate
          previousLabel={"Back"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={totalPage}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={onPageChanged}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
        <Films films={!Array.isArray(favouriteFilms[0]) ? favouriteFilms : favouriteFilms[currentPage]} />
     </div>


   );
};

