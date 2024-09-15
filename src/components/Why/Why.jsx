import { Container } from "../Container/Container"
import style from "../Why/Why.module.css"
export const Why = () => {
    return (
        <section className={style.whySection}>
            <Container>
                <div className={style.whyContainer}>
                    <ul className={style.whyList}>
                        <li className={style.whyItem}> 
                            <p className={style.whyNumber}>600</p>
                            <p className={style.whyInfo}>Satisfied customers per day</p>
                        </li>
                        <li className={style.whyItem}>
                            <p className={style.whyNumber}>20</p>
                            <p className={style.whyInfo}>Kyiv’s best 
                            professional barbers</p>
                        </li>
                        <li className={style.whyItem}>
                            <p className={style.whyNumber}>50</p>
                            <p className={style.whyInfo}>Awards for excellent service</p>
                        </li>
                        <li className={style.whyItem}>
                            <p className={style.whyNumber}>100</p>
                            <p className={style.whyInfo}>Gifts for regular customers</p>
                        </li>
                    </ul>
                    <article className={style.whyContainerOfText}>
                        <p className={style.whySubTitle}>Old traditional school</p>
                        <h2 className={style.whyTitle}>Why people come <br/> to us?</h2>
                        <p className={style.whyText}>Only good things are said about us. But it's better to see <br/> and feel 1 time than read 10 times. </p>
                    </article>
                </div>
            </Container>
        </section>
    )
}