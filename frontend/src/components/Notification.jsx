import PropTypes from 'prop-types';
const Notification = ({message}) => {
    if (!message || !message.text) {
        return null
    }
    return (
        <div className = {message.type}> 
        {message.text}
        </div>
    )
}

Notification.propTypes = {
    message: PropTypes.shape({
      text: PropTypes.string,
      type: PropTypes.string,
    }),
  };

export default Notification