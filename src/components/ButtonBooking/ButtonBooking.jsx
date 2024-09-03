
import PropTypes from 'prop-types';


export const ButtonBooking = ({btnText}) => {
    // console.log(btnText);
    
    return(
        <button>{btnText}</button>
    )
}


ButtonBooking.propTypes = {
    btnText: PropTypes.string
}
