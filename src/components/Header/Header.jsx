
import { Container } from "../Container/Container"
import style from "./Header.module.css"

export const Header = () => {
    return (
        <header className={style.header}>
            <Container>
                <div className={style.header_wrap}>
                <ul className={style.menu}>
                    <li className={style.item}>
                        <a className={style.header__link} href="">About</a>
                    </li>
                    <li className={style.item}>
                        <a className={style.header__link} href="">Services and prices</a>

                    </li>
                    <li className={style.item} >
                        <a className={style.header__link} href="">Barbers</a>

                    </li>
                    <li className={style.item}>
                        <a className={style.header__link} href="">Contacts</a>

                    </li>

                </ul>
                <div className={style.header__info}>
                    <a className={style.header__number} href="tel:+380441111111">+38 044 111 11 11</a>
                    <a href="#footer" className={style.header__btn} >ONLINE-BOOKING</a>
                </div>
                </div>
            </Container>
        </header>
    )
}