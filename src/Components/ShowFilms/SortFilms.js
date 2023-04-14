import React, {useEffect} from "react";
import Films from "../Films/Films";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getMovieByFilter} from "../../Redux/actions";
import ReactPaginate from "react-paginate";

const SortFilms = () => {

   const pagesCount = useSelector(state => state.films.pagesCount);
   const films = useSelector(state => state.films.films);
   const {ratingFrom, ratingTo, yearFrom, yearTo, genre, country, order} = useParams()
   const dispatch = useDispatch()

   useEffect(() => {
      console.log("Screening of films by genre ")
      dispatch(getMovieByFilter(ratingFrom, ratingTo, yearFrom, yearTo, 1, genre, country, order))
   }, [dispatch,ratingFrom, ratingTo, yearFrom, yearTo, genre, country, order])

   let onPageChanged = (data) => {
      let pageNumber = data.selected + 1
      dispatch(getMovieByFilter(ratingFrom, ratingTo, yearFrom, yearTo, pageNumber, genre, country, order));
   };

   return (
     <div className={'container__film'}>
        <ReactPaginate
          previousLabel={"Back"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pagesCount > 20 ? 20 : pagesCount}
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
        <Films films={films}/>
        <ReactPaginate
          previousLabel={"Back"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pagesCount > 20 ? 20 : pagesCount}
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
     </div>
   );
};

export default SortFilms;
