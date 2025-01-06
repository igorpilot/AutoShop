import React from "react";
import s from './NavBar.module.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MenuIcon from '@mui/icons-material/Menu';
import {Button, Menu, MenuItem} from "@mui/material";
import {NavLink} from "react-router-dom";
type NavbarPropsType = {
    menu: string[]
}
export const Navbar =(props: NavbarPropsType)=> {
    const [menu, setMenu] = React.useState<null | HTMLElement>(null);
    const open = Boolean(menu);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMenu(event.currentTarget);
    };
    const handleClose = () => {
        setMenu(null);
    };

    return <div className={s.navbar}>
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color={'inherit'}
            >
               <MenuIcon color={"inherit"}/> Категорії
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={menu}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {props.menu.map((category, index )=><MenuItem onClick={handleClose} value={index}>{category}</MenuItem>)}

            </Menu>
        </div>
        <div>
            <NavLink to={'/AutoShop'} className={s.navLink}><Button variant="text"
                                                                    color={'inherit'}>Головна</Button></NavLink>
            <NavLink to={'/products'} className={s.navLink}><Button variant="text"
                                                                    color={'inherit'}>Товари</Button></NavLink>
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