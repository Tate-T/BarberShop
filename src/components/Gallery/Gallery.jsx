
import gallery1 from '../../img/gallery1.webp'
import gallery2 from '../../img/gallery2.webp'
import gallery3 from '../../img/gallery3.webp'
import gallery4 from '../../img/gallery4.webp'
import { Container } from "../Container/Container";
import style from "../Gallery/Gallery.module.css"

export const Gallery = () => {
    return (
        <section className={style.gallerySection}>
            <Container>
                <p className={style.galleryTextInfo}>In Latin, "barba" means "beard"</p>
                <ul className={style.galleryList}>
                    <li className={style.galleryItem}>
                        <img src={gallery1} alt="barber works" className={style.galleryImg}/>
                    </li>
                    <li className={style.galleryItem}>
                        <img src={gallery2} alt="barber works" className={style.galleryImg}/>
                    </li>
                    <li className={style.galleryItem}>
                        <img src={gallery3} alt="barber works" className={style.galleryImg}/>
                    </li>
                    <li className={style.galleryItem}>
                        <img src={gallery4} alt="barber works" className={style.galleryImg}/>
                    </li>
                </ul>
            </Container>
        </section>
    )
}