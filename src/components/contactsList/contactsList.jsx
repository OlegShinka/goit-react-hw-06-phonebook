import { Card } from 'components/contactCard/contactCard';
import { nanoid } from 'nanoid';
import { Cnt, List } from './contactsList.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(state => state.filter);

  const onContacts = filter => {
    if (filter === '') {
      return contacts;
    }
    return [contacts];
    // else {
    //   return contacts.filter(item => {
    //     return item.name.includes(filter.toLowerCase());
    //   });
    // }
  };
  const ListCont = onContacts(filter);
  console.log(ListCont);
  return (
    <div>
      <List>
        {ListCont.map(({ name, number, id }) => (
          <Cnt key={nanoid()}>
            <Card name={name} number={number} id={id} />
          </Cnt>
        ))}
      </List>
    </div>
  );
};
