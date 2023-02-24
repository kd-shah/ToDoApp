import PropTypes from "prop-types";

export const InputView = (props) => {
  return (
    <>
      <input
        id="input"
        className="input"
        defaultValue={props.value}
        placeholder={props.placeholder}
        // onChange={props.onChange}
        ref={props.refer}
      />
    </>
  );
};

InputView.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
