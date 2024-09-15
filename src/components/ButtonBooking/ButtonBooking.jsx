
import PropTypes from 'prop-types';
import style from "../ButtonBooking/ButtonBooking.module.css"


export const ButtonBooking = ({ btnText }) => {
    // console.log(btnText);

    return (
        <button className={style.buttonAbout}>{btnText}</button>
    )
}


ButtonBooking.propTypes = {
    btnText: PropTypes.string
}
