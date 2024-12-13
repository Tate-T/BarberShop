
import PropTypes from 'prop-types';
import style from "../ButtonBooking/ButtonBooking.module.css"


export const ButtonBooking = ({ btnText }) => {
    // console.log(btnText);

    return (
        <a className={style.buttonAbout} href='#footer'>{btnText}</a>
    )
}


ButtonBooking.propTypes = {
    btnText: PropTypes.string
}
