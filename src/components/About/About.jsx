import about1 from "../../img/about1.webp"
import about2 from "../../img/about2.webp"

import { Container } from "../Container/Container"

export const About = () => {
    return (

        <section>
            <Container>
                <ul>
                    <li><img src={about1} alt="barber1" /></li>
                    <li><img src={about2} alt="barber2" /></li>
                </ul>
                <article>
                    <p>ABOUT</p>
                    <h2>Best Barbershop in your city</h2>
                    <p>If you want to add more confidence to your image, you should visit us.</p>
                    <p>We are a team that never stops at what has been achieved and are thirsty for changes. And when you fall into the hands of our master, you will never be the same again. We are a team that is always "on the same wave" with clients. Therefore, we are always ready to improve everyone who comes to us!</p>
                    <button>ONLINE-BOOKING</button>
                </article>
            </Container>
        </section>
    )
 }