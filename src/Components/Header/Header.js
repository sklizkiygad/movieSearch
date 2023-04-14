import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import header from './header.module.css'
import {Link} from "react-router-dom";
import {useHistory} from "react-router";
import {darkThemeSelector} from "../../Redux/selectors";
import logo from './../../logo.svg'
import {StyleMobile} from "../utils/StyleMob";


export const Header = ({themeToggler, burgerActive, setBurgerActive}) => {

   console.log('Render Header')
   const history = useHistory();
   const [searchValue, setSearchValue] = useState('');
   const darkTheme = useSelector(darkThemeSelector);
   const [timer, setTimer] = useState(null)
   const dispatch = useDispatch()
   const search = (e) => setSearchValue(e.target.value)

   useEffect(()=>{
      if (searchValue === ''){
         return
      }
      if (timer) {
         clearTimeout(timer)
      }
      setTimer(
        setTimeout(async () => {
           await history.push(`/film/${searchValue}`)
        }, 500)
      )
   },[timer,history, searchValue])

   useEffect(()=>{
      document.querySelector('body').classList.toggle('lock')
   }, [burgerActive])

   return (
     <header className={darkTheme ? header.header + ' ' + header.dark : header.header}>
        <div className={header.header__container}>
           <div className={header.header__body}>
              <div className={header.header__column + ' ' + header.header__column_1}>
                 <Link to="/" className={header.header__logo}><img src={logo} alt=""/> </Link>
                 <div className={StyleMobile(header, header.header__burger, burgerActive, darkTheme)}
                      onClick={() => setBurgerActive(prev => !prev)}>
                    <span></span>
                 </div>
                 <nav className={StyleMobile(header, header.header__menu, burgerActive, darkTheme)}>
                    <ul className={header.header__list}>
                       <li><Link to="/top100" className={darkTheme ? header.header__link + ' ' + header.dark : header.header__link}>Топ 100</Link></li>
                       <li><Link to="/favourite" className={darkTheme ? header.header__link + ' ' + header.dark : header.header__link}>Избранное</Link></li>
                       <li className={header.themeCheck}>
                          <label htmlFor={'theme'} className={darkTheme ? header.header__link + ' ' + header.dark : header.header__link}>Темная тема</label>
                          <label className={header.switch}>
                             <input type="checkbox" checked={darkTheme && true} onChange={()=>dispatch(themeToggler())} id={'theme'}/>
                             <span className={header.slider + ' ' + header.round}></span>
                          </label>
                       </li>
                    </ul>
                 </nav>
              </div>
              <div className={header.header__column}>
                 <form className={'form'}>
                    <input
                      onChange={(e) => search(e)} placeholder="Введите название фильма"
                      className={darkTheme ? header.inputSearch + ' ' + header.inputSearchDark : header.inputSearch}
                      value={searchValue}
                    />
                    <div className={darkTheme ? header.search + ' ' + header.searchDark : header.search}></div>
                 </form>
              </div>
           </div>
        </div>
     </header>
   );
};


