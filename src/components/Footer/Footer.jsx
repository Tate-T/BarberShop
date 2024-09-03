import { Container } from "../Container/Container";
import PropTypes from 'prop-types'

export const Footer = () => {
  return (
    <footer>
      <Container>
        <div>
          <h2>Online-booking</h2>
          <form>
            <div>
              <input type="text" />
              <input type="text" />
            </div>
            <input type="text" />
            <button type="submit">send</button>
          </form>
        </div>
        <div>
          <h2>Contacts</h2>
          <ul>
            <li>
              <a href="https://www.google.com.ua">
                st. Vasylkivska, 7A Kiev, 08132
              </a>
            </li>
            <li>
              <a href="tel:+380441111111">+38 044 111 11 11</a>
            </li>
            <li>
              <a href="mailto:barbershop@email.com">barbershop@email.com</a>
            </li>
          </ul>
          <p>Working hours</p>
          <p>Every day from 9:00 to 22:00</p>
        </div>
        <div>
            <p>Copyright 2023</p>
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://www.youtube.com/">Youtube</a>
        </div>
      </Container>
    </footer>
  );
};
