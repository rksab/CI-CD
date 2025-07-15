import PropTypes from 'prop-types';
const PersonList = ({persons, del, fil}) => {
    return (
       <div>
        <ul>
        {persons
         .filter(p => p.name.toLowerCase().includes(fil.toLowerCase()))
          .map(person => 
            <li key = {person.id}> 
            {person.name} {person.number} 
            <button onClick = {() => del(person.id)}> delete </button>
            </li>
        )}
        </ul> 
       </div>
       )
}


PersonList.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  del: PropTypes.func.isRequired,
  fil: PropTypes.string.isRequired,
};
export default PersonList