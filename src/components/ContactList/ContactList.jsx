import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const deleteContacts = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css['contact-list']}>
      {visibleContacts.map(({ name, number, id }) => (
        <li key={id} className={css['contact-item']}>
          <p>
            {name}: <span className={css['contact-number']}>{number}</span>
          </p>
          <button
            type="button"
            className={css['contact-btn']}
            onClick={() => deleteContacts(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
