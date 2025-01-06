import React from "react";
import s from './Header1.module.css'
import {NavLink} from "react-router-dom";

export const Header1 = () => {

    return <div className={s.header1}>
        <div className={s.header1Div1}>
           <NavLink to={'/about'} className={s.header1Items}>Про нас </NavLink>
            <NavLink to={'/contacts'} className={s.header1Items}> Контакти</NavLink>
        </div>
        <div className={s.header1Div2}>
            <NavLink to={'/login'} className={s.header1Items}>Логін</NavLink>
            <div className={s.header1Items}>Мова</div>
        </div>
    </div>
}