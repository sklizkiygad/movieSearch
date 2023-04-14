import Films from "../Films/Films";
import {getFilmsFromSearch} from "../../Redux/actions";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import ReactPaginate from "react-paginate";

export const SearchFilms = (props) => {

   const {name} = useParams();
   const films = useSelector(state => state.films.films)
   const pagesCount = useSelector(state => state.films.pagesCount)
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getFilmsFromSearch(name, 1));
   }, [dispatch, name])

   let onPageChanged = (data) => {
      let pageNumber = data.selected + 1
      dispatch(getFilmsFromSearch(name, pageNumber));
   };

   console.log('Render Show Films By Search');

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


