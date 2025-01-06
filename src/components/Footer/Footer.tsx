import React from "react";
import s from './Footer.module.css'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PublicIcon from '@mui/icons-material/Public';
import StorefrontIcon from '@mui/icons-material/Storefront';
import FacebookIcon from '@mui/icons-material/Facebook';
import PlaceIcon from '@mui/icons-material/Place';


export const Footer = () => {
    return <div className={s.footer}>
            <div>
                <h3>Зв'язатися з нами</h3>
                <div className={s.footerItem}>
                    <StorefrontIcon/>
                    <div className={s.footerItemText}>Продаж моторної оливи,
                        автохімії, фільтрів , охолоджуючих рідин
                    </div>
                </div>
                <div className={s.footerItem}>
                    <PublicIcon/>
                    <div className={s.footerItemText}>Київська обл.. м.Яготин, вул. Поштова, 59</div>
                </div>
                <div className={s.footerItem}>
                    <PhoneIphoneIcon/>
                    <div className={s.footerItemText}>(+38) 096 829 26 77</div>
                </div>
                <div className={s.footerItem}>
                    <AccessTimeIcon/>
                    <div className={s.footerItemText}>Пн-Пт 10:00 - 14:00</div>
                </div>


            </div>
            <div></div>
            <div>
                <h3>Посилання</h3>
                <a href={'https://maps.app.goo.gl/xuCUhZpZJdVanSmN8'} target={"_blank"} rel={'noopener noreferrer'} className={s.footerItem} >
                  <PlaceIcon/>
                  <div className={s.footerItemText}> Маршрут до магазину</div>
                </a>
            </div>
            <div>
                <h3>Соціальні мережі</h3>
                <a className={s.footerItem} href={'https://www.facebook.com/share/g/1Vt4R66aqT/?mibextid=wwXIfr'} target={"_blank"} rel={'noopener noreferrer'}>
                    <FacebookIcon/> Facebook
                </a>
            </div>

    </div>
}