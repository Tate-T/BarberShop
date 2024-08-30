import { Container } from "../Container/Container"

export const Hero = () => {
    return (
        <section>
            <Container>
            <h3>A hair salon for men in Kyiv</h3>
            <h1>BarberShop</h1>
            <p>We are experts in trendy men’s haircuts. We work quickly, carefully and with style.</p>
            <button type="button">Back</button>
            <button type="button">Forward</button>
            <ul>
                <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener">Instagram</a></li>
                <li><a href="https://m.youtube.com/" target="_blank" rel="noreferrer noopener">Youtube</a></li>
            </ul>
            </Container>
        </section>
    )
}