import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  const createList = contacts.map(contact => (
    <li key={contact.id}>
      {`${contact.name}: ${contact.number}`}
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  ));

  return <ul className={styles.contactList}>{createList}</ul>;
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
