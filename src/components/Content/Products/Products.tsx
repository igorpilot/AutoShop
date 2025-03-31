import s from './Products.module.css'
import {useContext, useEffect} from "react";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import SaleCard from "../../SaleCard";

export const Products = observer(()=>{
    const {store}= useContext(Context)
    let filteredRows=store.products.filter(product=>product.category==='CARS')

    useEffect(() => {
        store.getProducts("Автотовари").then(() => {
        });
    }, []);
    return <div className={s.products}>
        {store.products.map(p=> <SaleCard key={p.id} image={p.image} alt={p.name} description={p.description} head={p.name} price={p.sellingPrice} button={'Купить'} />)}

    </div>
})