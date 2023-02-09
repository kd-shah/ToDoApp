import PropTypes from 'prop-types';

export const Button = (props) => {
    return (
        <button className="mainBt" onClick={props.onClick}>{props.name} </button>
        );
}

Button.propTypes = {
    name : PropTypes.string,
    onClick : PropTypes.func
}