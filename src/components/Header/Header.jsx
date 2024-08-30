
import { Container } from "../Container/Container"

export const Header = () => {
    return (
        <header>
            <Container>
            <ul>
                <a href="">About</a>
                <a href="">Services and prices</a>
                <a href="">Barbers</a>
                <a href="">Contacts</a>
            </ul>
            <div>
                <a href="tel:+380441111111">+38 044 111 11 11</a>
                <button>ONLINE-BOOKING</button>
            </div>
            </Container>
        </header>
    )
}