import React, {useEffect} from "react";
import Films from "../Films/Films";
import {getTop100Films} from "../../Redux/actions";
import {useDispatch, useSelector} from "react-redux";
import ReactPaginate from "react-paginate";

export const FilmsTop100 = () => {
   console.log('Render Top 100')
   const currentPage = useSelector(state => state.films.currentPage)
   const pagesCount = useSelector(state => state.films.pagesCount)
   const films = useSelector(state => state.films.films)

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getTop100Films(currentPage))
   }, [dispatch, currentPage])

   const onPageChanged = (data) => {
      let pageNumber = data.selected + 1
      dispatch(getTop100Films(pageNumber))
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

