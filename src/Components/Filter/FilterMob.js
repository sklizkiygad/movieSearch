import React, {useState} from "react";
import filterStyle from './Filter.module.css'
import Filter from "./Filter";
import {StyleMobile} from "../utils/StyleMob";
import {useSelector} from "react-redux";
import {darkThemeSelector} from "../../Redux/selectors";

export const FilterMob = () => {

   const [spoilerShow, setSpoilerShow] = useState(false)
   const darkTheme = useSelector(darkThemeSelector);

   return (
     <div className={filterStyle.spoiler}>
        <div className={filterStyle.spoiler__item}>
           <h2
             className={StyleMobile(filterStyle, filterStyle.spoiler__title, spoilerShow, darkTheme)}
             onClick={()=>setSpoilerShow((prev)=>!prev)}>
              Фильтр
           </h2>
           <div className={spoilerShow ? filterStyle.spoiler__body + ' ' + filterStyle.active : filterStyle.spoiler__body}>
              <Filter />
           </div>
         </div>
     </div>

   )
}