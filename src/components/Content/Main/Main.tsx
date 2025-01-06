import React from "react";
import s from './Main.module.css'
import navigation from '../../../photo/navigation.png'


export const Main = ()=> {
    return <div className={s.content}>
        <img src={navigation} alt={'magazin'}/>
    </div>
}