import { Container } from "../Container/Container";
import style from './Footer.module.css'
import icons from '../../img/symbol-defs.svg'

export const Footer = () => {
  return (
    <footer className={style.footer}>
        <div className={style.footerContainer}>
          <Container>
          <div className={style.footerBooking}>
            <h2 className={style.footerTitle}>Online-booking</h2>
            <form>
              <div className={style.footerInputs}>
                <input type="text" className={style.footerInput}/>
                <input type="text" className={style.footerInput}/>
              </div>
              <input type="text" className={style.footerInput}/>
              <button type="submit" className={style.footerButton}>send</button>
            </form>
          </div>
          <div className={style.footerContacts}>
            <h2 className={style.footerTitle}>Contacts</h2>
            <address>
              <ul className={style.footerList}>
                <li>
                  <svg className={style.footerIcons}>
                    <use href={icons + '#icon-map-pin'}></use>
                  </svg>
                  <a href="https://www.google.com.ua" className={style.footerContact}>
                    st. Vasylkivska, 7A Kiev, 08132
                  </a>
                </li>
                <li>
                  <svg className={style.footerIcons}>
                    <use href={icons + '#icon-phone'}></use>
                  </svg>
                  <a href="tel:+380441111111" className={style.footerContact}>+38 044 111 11 11</a>
                </li>
                <li>
                  <svg className={style.footerIcons}>
                    <use href={icons + '#icon-mail'}></use>
                  </svg>
                  <a href="mailto:barbershop@email.com" className={style.footerContact}>barbershop@email.com</a>
                </li>
              </ul>
            </address>
            <p className={style.footerHours}>Working hours</p>
            <p className={style.footerDays}>Every day from 9:00 to 22:00</p>
          </div>
          </Container>
        </div>
        <div className={style.footerCopyright}>
          <Container>
            <p>Copyright 2023</p>
            <ul className={style.footerListLinks}>
              <li>
                <a href="https://www.instagram.com/" className={style.footerLink}>Instagram</a>
              </li>
              <li>
                <a href="https://www.youtube.com/" >Youtube</a>
              </li>
            </ul>
          </Container>
        </div>
    </footer>
  );
};
