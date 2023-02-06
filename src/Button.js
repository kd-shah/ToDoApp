import PropTypes from 'prop-types';

export const Button = (props) => {
    return (
        <button className= "button" onClick={props.onClick}>{props.type}</button>
        );
}

Button.propTypes = {
    type : PropTypes.string,
    onClick : PropTypes.func
}