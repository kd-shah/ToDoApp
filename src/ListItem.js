import PropTypes from "prop-types";
export const ToDoItem = (props) =>{
    

    return (
     <>
        <label className="listitems">
        <input
            type="checkbox"
         />
            {props.value}
        </label>   
     </>
        
        )


}

ToDoItem.propTypes = {
        value: PropTypes.string
    }
