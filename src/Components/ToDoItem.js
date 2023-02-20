import PropTypes from "prop-types";
export const ToDoItem = (props) => {
  return (
    
      <label>
        <input type="checkbox" onChange={props.onChange} className="check"/>
        {props.value}
      </label>
    
  );
};

ToDoItem.propTypes = {
  value: PropTypes.string,
};
