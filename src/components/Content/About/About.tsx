import s from './About.module.css'
import magaz from '../../../photo/magaz.jpg'

export const About = ()=> {
    return <div className={s.about}>
        <div className={s.conteiner}>
            <div className={s.divImg}>
                <img src={magaz}/>
            </div>
            <h1>Автомагазин "АвтоСтарт"</h1>
            <p><strong>Адреса:</strong> м. Яготин, вул. Поштова, 59 (4 ворота ринку)</p>
            <h2>🔧 Відкриті з 2013 року</h2>
            <p><strong>Понад 10 років досвіду та тисячі задоволених клієнтів!</strong></p>
            <h2>🚗 Все для вашого авто:</h2>
            <div className={s.div}>
                <ul>
                    <li><strong>Автозапчастини:</strong> широкий вибір деталей для легкових автомобілів в наявності та
                        під
                        замовлення.
                    </li>
                    <li><strong>Автохімія:</strong> засоби догляду за авто – від очищувачів до рідин для скла.</li>
                    <li><strong>Оливи та мастила:</strong> лише перевірені бренди для вашого двигуна.</li>
                    <li><strong>Фільтри:</strong> масляні, повітряні, паливні та салонні – для ідеальної роботи авто.
                    </li>
                    <li><strong>Акумулятори, свічки запалювання, ремені та ролики.</strong></li>
                    <li><strong>Все для тюнінгу:</strong> аксесуари та додаткове обладнання для створення унікального
                        стилю.
                    </li>
                    <li><strong>Автоінструмент:</strong> для професійного та домашнього ремонту.</li>
                </ul>
            </div>

            <h2>🏪 Чому обирають нас?</h2>
            <div className={s.div}>
                <ul>
                    <li>Швидка доставка під замовлення.</li>
                    <li>Конкурентні ціни.</li>
                    <li>Якісна консультація від досвідчених спеціалістів.</li>
                    <li>Тільки перевірені постачальники.</li>
                </ul>
            </div>

            <p><strong>Довіряйте своє авто професіоналам!</strong></p>
            <div className={s.contact}>
                <p>📞 Телефонуйте, пишіть або завітайте до нас – ми завжди поруч, щоб допомогти.</p>
                <p><strong>Автомагазин "АвтоСтарт" – ваш партнер у догляді за автомобілем.</strong></p>
            </div>
        </div>

    </div>


}