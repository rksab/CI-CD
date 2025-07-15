import PropTypes from 'prop-types';
const Filter = ({filterPerson, fil}) => {
    return (
        <div>
            filter shown for:
        <input value = {fil} onChange = {filterPerson}/> 

        </div> 
    )

}

Filter.propTypes = {
    filterPerson: PropTypes.func.isRequired,
    fil: PropTypes.string.isRequired,
  };

export default Filter

