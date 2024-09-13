import about1 from "../../img/about1.webp"
import about2 from "../../img/about2.webp"
import style from "./About.module.css"
import { Container } from "../Container/Container"
import { ButtonBooking } from "../ButtonBooking/ButtonBooking"

export const About = () => {
    return (

        <section className={style.about}>
            <Container>
                <div className={style.aboutWrap}>
                    <ul className={style.aboutList}>
                        <li className={style.aboutItem}><img src={about1} alt="barber1" /></li>
                        <li className={style.aboutItem}><img src={about2} alt="barber2" /></li>
                    </ul>
                    <article className={style.aboutArticle}>
                        <p className={style.aboutSubtitle}>ABOUT</p>
                        <h2 className={style.aboutTitle} >Best Barbershop in your city</h2>
                        <p className={style.aboutText}>If you want to add more confidence to your image, you should visit us.</p>
                        <p className={style.aboutText}>We are a team that never stops at what has been achieved and are thirsty for changes. And when you fall into the hands of our master, you will never be the same again. We are a team that is always "on the same wave" with clients. Therefore, we are always ready to improve everyone who comes to us!</p>
                        <ButtonBooking btnText="Online-booking" />
                    </article>
                </div>
            </Container>
        </section>
    )
}