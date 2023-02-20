import PropTypes from "prop-types";


export const InputView = (props) => {
  return (
    <>
      <input
        id="input"
        className="input"
        // value={props.value}
        placeholder={props.placeholder}
        // onChange={props.onChange}
        ref={props.refer} 
      />
      {/* <button type= "submit">Add</button> */}

      
    </>
  );
};

InputView.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
