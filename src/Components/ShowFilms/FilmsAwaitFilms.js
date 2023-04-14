import React, {useEffect} from "react";
import Films from "../Films/Films";
import {useDispatch, useSelector} from "react-redux";
import {getAwaitFilms} from "../../Redux/actions";
import ReactPaginate from "react-paginate";

export const FilmsAwaitFilms = () => {

   console.log('Render start page')

   const pagesCount = useSelector(state => state.films.pagesCount);
   const currentPage = useSelector(state => state.films.currentPage);
   const films = useSelector(state => state.films.films);
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getAwaitFilms(currentPage));
   }, [dispatch, currentPage])

   const onPageChanged = (data) => {
      let pageNumber = data.selected + 1
      dispatch(getAwaitFilms(pageNumber))
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

