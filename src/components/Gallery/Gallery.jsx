
import gallery1 from '../../img/gallery1.webp'
import gallery2 from '../../img/gallery2.webp'
import gallery3 from '../../img/gallery3.webp'
import gallery4 from '../../img/gallery4.webp'
import { Container } from "../Container/Container";

export const Gallery = () => {
    return (
        <section>
            <Container>
                <p>In Latin, "barba" means "beard"</p>
                <ul>
                    <li>
                        <img src={gallery1} alt="" />
                    </li>
                    <li>
                        <img src={gallery2} alt="" />
                    </li>
                    <li>
                        <img src={gallery3} alt="" />
                    </li>
                    <li>
                        <img src={gallery4} alt="" />
                    </li>
                </ul>
            </Container>
        </section>
    )
}