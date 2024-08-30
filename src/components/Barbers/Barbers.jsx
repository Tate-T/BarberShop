import { Container } from "../Container/Container";
import barber1 from "../../img/barber1.webp";
import barber2 from "../../img/barber2.webp";
import barber3 from "../../img/barber3.webp";

import icons from "../../img/symbol-defs.svg"

export const Barbers = () => {
    return (
        <section>
            <Container>
                <p>For true enjoyers of the atmosphere</p>
                <h2>Our barbers</h2>
                <ul>
                    <li>
                        <article>
                            <img src={barber1} alt="barber1" />
                            <h3>John Smith</h3>
                            <p>Extreme Barber</p>
                            <ul>
                                <li>
                                    <a href="https://www.instagram.com/">
                                        <svg>
                                            <use href={icons + "#icon-instagram"}></use>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://x.com/home">
                                        <svg>
                                            <use href={icons + "#icon-twitter"}></use>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/">
                                        <svg>
                                            <use href={icons + "#icon-Vector-1"}></use>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://ua.linkedin.com/">
                                        <svg>
                                            <use href={icons + "#icon-linkedin"}></use>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </article>
                    </li>
                    <li>
                        <article>
                            <img src={barber2} alt="barber2" />
                            <h3>Michele Doe</h3>
                            <p>Extreme Barber</p>
                            <ul>
                                <li>
                                    <a href="https://www.instagram.com/">
                                        <svg>
                                            <use href={icons + "#icon-instagram"}></use>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://x.com/home">
                                        <svg>
                                            <use href={icons + "#icon-twitter"}></use>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/">
                                        <svg>
                                            <use href={icons + "#icon-Vector-1"}></use>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://ua.linkedin.com/">
                                        <svg>
                                            <use href={icons + "#icon-linkedin"}></use>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </article>
                    </li>
                    <li>
                        <article>
                            <img src={barber3} alt="barber3" />
                            <h3>Alan Black</h3>
                            <p>Extreme Barber</p>
                            <ul>
                                <li>
                                    <a href="https://www.instagram.com/">
                                        <svg>
                                            <use href={icons + "#icon-instagram"}></use>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://x.com/home">
                                        <svg>
                                            <use href={icons + "#icon-twitter"}></use>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/">
                                        <svg>
                                            <use href={icons + "#icon-Vector-1"}></use>
                                        </svg>
                                    </a>
                                </li>
                                <li>
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