import s from './Products.module.css'

export const Products = ()=>{
    return <div className={s.products}>
        <div className={s.productsItem}>
            <img src={'https://cdn.topersatzteile.de/thumb?id=963158&m=1&n=0&lng=sk&ccf=94077844'}/>
            <p>Опис</p>
            <p>Ціна</p>
            <p> КУПИТИ</p>
        </div>


        <div className={s.productsItem}>
            <img src={'https://scdn.autoteiledirekt.de/catalog/categories/500x500/9.png'}/>
            <p>Опис</p>
            <p>Ціна</p>
            <p> КУПИТИ</p>
        </div>

        <div className={s.productsItem}>
            <img src={'https://autovega.sk/files/product/11935/Olejovy_filter_HIFLOFILTRO_HF112.jpg'}/>
            <p>Опис</p>
            <p>Ціна</p>
            <p> КУПИТИ</p>
        </div>

        <div className={s.productsItem}>
            <img src={'https://cdn.invitalshop.sk/upload/24886-0805088923_s.jpg'}/>
            <p>Опис</p>
            <p>Ціна</p>
            <p> КУПИТИ</p>
        </div>

        <div className={s.productsItem}>
            <img
                src={'https://a.allegroimg.com/original/1127ef/b16ce6e841bbb868084026ad628f/Podlozka-pod-olejovy-filter-Auto-Gauge-M20x1-5'}/>
            <p>Опис</p>
            <p>Ціна</p>
            <p> КУПИТИ</p>
        </div>

    </div>
}