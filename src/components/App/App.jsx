import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import cssApp from './App.module.css';

const App = () => {
  return (
    <div className={cssApp['container']}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <NotificationContainer />
    </div>
  );
};

export default App;
