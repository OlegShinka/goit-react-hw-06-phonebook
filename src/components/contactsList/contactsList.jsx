import { Card } from 'components/contactCard/contactCard';
import { Cnt, List } from './contactsList.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

export const ContactsList = () => {
  //забираєм з глобального стейту
  const contacts = useSelector(getContacts); //contacts.contacts  увага
  const filter = useSelector(getFilter); // filter.filter увага

  const onContacts = filter => {
    if (filter === '') {
      return contacts;
    } else {
      return contacts.filter(item => {
        return item.name.toLowerCase().includes(filter.toLowerCase());
      });
    }
  };
  const listContacts = onContacts(filter);

  return (
    <div>
      <List>
        {listContacts.map(({ name, number, id }) => (
          <Cnt key={id}>
            <Card name={name} number={number} id={id} />
          </Cnt>
        ))}
      </List>
    </div>
  );
};
