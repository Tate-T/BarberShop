import { Container } from "../Container/Container";
import barber1 from "../../img/barber1.webp";
import barber2 from "../../img/barber2.webp";
import barber3 from "../../img/barber3.webp";
import style from '../Barbers/Barbers.module.css'

import icons from "../../img/symbol-defs.svg"

export const Barbers = () => {
    return (
        <section className={style.barbersSection}>
            <Container>
                <p className={style.barbersSubTitle}>For true enjoyers of the atmosphere</p>
                <h2 className={style.barbersTitle}>Our barbers</h2>
                <ul className={style.barbersList}>
                    <li className={style.barbersItem}>
                        <article>
                            <img src={barber1} alt="barber1" className={style.barbersImg} />
                            <h3 className={style.barbersName}>John Smith</h3>
                            <p className={style.barbersProfession}>Extreme Barber</p>
                            <ul className={style.barbersListIcons}>
                                <li className={style.barbersItemIcons}>
                                    <a href="https://www.instagram.com/">
                                        <svg>
                                            <use href={icons + "#icon-instagram"}></use>
                                        </svg>
                                    </a>
                                </li>
                                <li className={style.barbersItemIcons}>
                                    <a href="https://x.com/home">
                                        <svg>
                                            <use href={icons + "#icon-twitter"}></use>
                                        </svg>
                                    </a>
                                </li>
                                <li className={style.barbersItemIcons}>
                                    <a href="https://www.facebook.com/">
                                        <svg>
                                            <use href={icons + "#icon-Vector-1"}></use>
                                        </svg>
                                    </a>
                                </li>
                                <li className={style.barbersItemIcons}>
                                    <a href="https://ua.linkedin.com/">
                                        <svg>
                                            <use href={icons + "#icon-linkedin"}></use>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </article>
                    </li>
                    <li className={style.barbersItem}>
                        <article>
                            <img src={barber2} alt="barber2" className={style.barbersImg}/>
                            <h3 className={style.barbersName}>Michele Doe</h3>
                            <p className={style.barbersProfession}>Extreme Barber</p>
                            <ul className={style.barbersListIcons}>
                                <li className={style.barbersItemIcons}>
                                    <a href="https://www.instagram.com/">
                                        <svg>
                                            <use href={icons + "#icon-instagram"}></use>
                                        </svg>
                                    </a>
                                </li>
                                <li className={style.barbersItemIcons}>
                                    <a href="https://x.com/home">
                                        <svg>
                                            <use href={icons + "#icon-twitter"}></use>
                                        </svg>
                                    </a>
                                </li>
                                <li className={style.barbersItemIcons}>
                                    <a href="https://www.facebook.com/">
                                        <svg>
                                            <use href={icons + "#icon-Vector-1"}></use>
                                        </svg>
                                    </a>
                                </li>
                                <li className={style.barbersItemIcons}>
                                    <a href="https://ua.linkedin.com/">
                                        <svg>
                                            <use href={icons + "#icon-linkedin"}></use>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </article>
                    </li>
                    <li className={style.barbersItem}>
                        <article>
                            <img src={barber3} alt="barber3" className={style.barbersImg}/>
                            <h3 className={style.barbersName}>Alan Black</h3>
                            <p className={style.barbersProfession}>Extreme Barber</p>
                            <ul className={style.barbersListIcons}>
                                <li className={style.barbersItemIcons}>
                                    <a href="https://www.instagram.com/">
                                        <svg>
                                            <use href={icons + "#icon-instagram"}></use>
                                        </svg>
                                    </a>
                                </li>
                                <li className={style.barbersItemIcons}>
                                    <a href="https://x.com/home">
                                        <svg>
                                            <use href={icons + "#icon-twitter"}></use>
                                        </svg>
                                    </a>
                                </li>
                                <li className={style.barbersItemIcons}>
                                    <a href="https://www.facebook.com/">
                                        <svg>
                                            <use href={icons + "#icon-Vector-1"}></use>
                                        </svg>
                                    </a>
                                </li>
                                <li className={style.barbersItemIcons}>
                                    <a href="https://ua.linkedin.com/">
                                        <svg>
                                            <use href={icons + "#icon-linkedin"}></use>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </article>
                    </li>
                </ul>
            </Container>
        </section>
    )
}