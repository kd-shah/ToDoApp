import PropTypes from "prop-types";

export const InputView = (props) => {
    return (
        <input
            className= "input"
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
            
        />
    )
}

InputView.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    clear: PropTypes.func
}