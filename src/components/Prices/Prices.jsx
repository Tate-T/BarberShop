
import { Container } from "../Container/Container"
import style from "../Prices/Prices.module.css"

export const Prices = () => {
    return (
        <section className={style.pricesSection}>
            <Container>
            <h3 className={style.pricesSubTitle}>Spend your time with the best masters</h3>
            <h2 className={style.pricesTitle}>Services and prices</h2>
            <ul className={style.list}>
                <li className={style.pricesItem}>
                    <h3>Men’s haircut</h3>
                    <p>from 300 uah.</p>
                </li>
                <li className={style.pricesItem}>
                    <h3>Beard trim</h3>
                    <p>from 300 uah.</p>
                </li>
                <li className={style.pricesItem}>
                    <h3>Mustache trim</h3>
                    <p>from 200 uah.</p>
                </li>
                <li className={style.pricesItem}>
                    <h3>Straight razor shave</h3>
                    <p>from 200 uah.</p>
                </li>
                <li className={style.pricesItem}>
                    <h3>Trainee’s haircut</h3>
                    <p>from 50 uah.</p>
                </li>
                <li className={style.pricesItem}>
                    <h3>Haircut under the nozzle</h3>
                    <p>from 200 uah.</p>
                </li>
                <li className={style.pricesItem}>
                    <h3>Children’s haircut (0-12 y.o.)</h3>
                    <p>from 300 uah.</p>
                </li>
                <li className={style.pricesItem}>
                    <h3>Camouflage of gray hair</h3>
                    <p>from 200 uah.</p>
                </li>
            </ul>
            <button type="button">Online-booking</button>
            </Container>
        </section>
    )

}