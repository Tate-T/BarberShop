import { Container } from "../Container/Container"
import style from './Hero.module.css'

export const Hero = () => {
    return (
        <section className={style.hero_section}>
            <Container>
                <div className={style.hero_container}>
                    <ul className={style.list}>
                        <li className={style.item}><a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener">Instagram</a></li>
                        <li className={style.item}><a href="https://m.youtube.com/" target="_blank" rel="noreferrer noopener">Youtube</a></li>
                    </ul>
                    <div className={style.hero_box}>
                        <div className={style.container_title}>
                            <h3 className={style.hero_subtitle}>A hair salon for men in Kyiv</h3>
                            <h1 className={style.hero_title}>BarberShop</h1>
                            <p className={style.hero_description}>We are experts in trendy men’s haircuts. We work quickly, carefully and with style.</p>
                        </div>
                        <ul className={style.list_button}>
                            <button type="button" className={style.back}>Back</button>
                            <button type="button" className={style.forward}>Forward</button>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    )
}