import PropTypes from 'prop-types';
const PersonForm = ({newName, newNumber, handleName, handleNumber, submitForm}) => {
    return (
    <form onSubmit = {submitForm}> 
       <div> name: <input value = {newName} onChange = {handleName}/>  </div>
       <div> number: <input value = {newNumber} onChange = {handleNumber}/> </div> 
        <div> <button type = "Submit"> add </button> </div>
     </form> 
    )
}

PersonForm.propTypes = {
    newName: PropTypes.string.isRequired,
    newNumber: PropTypes.string.isRequired,
    handleName: PropTypes.func.isRequired,
    handleNumber: PropTypes.func.isRequired,
    submitForm: PropTypes.func.isRequired,
  };
export default PersonForm