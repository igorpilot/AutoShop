import React from "react";
import s from './NavBar.module.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MenuIcon from '@mui/icons-material/Menu';
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";

export const Navbar =()=> {

    return <div className={s.navbar}>
            <MenuIcon  color={"inherit"}/>
            <div>
                <NavLink to={'/AutoShop'} className={s.navLink}><Button variant="text" color={'inherit'} >Головна</Button></NavLink>
                <NavLink to={'/products'} className={s.navLink}><Button variant="text" color={'inherit'}>Товари</Button></NavLink>
            </div>

            <div></div>
            <div></div>
        <div className={s.navDivRight}>
            <div className={s.navItemRight}><FavoriteBorderIcon/></div>
            <div className={s.navItemRight}><ShoppingCartCheckoutIcon/></div>
            <div className={s.navItemRight}><PersonOutlineIcon/></div>
        </div>


    </div>
}