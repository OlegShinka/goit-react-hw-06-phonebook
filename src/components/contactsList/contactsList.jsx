import { Card } from 'components/contactCard/contactCard';
import { nanoid } from 'nanoid';
import { Cnt, List } from './contactsList.styled';
import { useSelector } from 'react-redux';
export const ContactsList = ({ list, onDelete }) => {
  const contacts = useSelector(state => state.contacts);
  // const name = useSelector(state => state.contacts.name);
  // const number = useSelector(state => state.contacts.number);
  // const id = useSelector(state => state.contacts.id);
  const filter = useSelector(state => state.filter);
  console.log('contL-filter', filter);
  const onContacts = filter => {
    if (filter === '') {
      return contacts;
    }
    return contacts;
    // else {
    //   return contacts.filter(item => {
    //     return item.name.includes(filter.toLowerCase());
    //   });
    // }
  };
  const ListCont = onContacts(filter);
  return (
    <div>
      <List>
        {[ListCont].map(({ name, number, id }) => (
          <Cnt key={nanoid()}>
            <Card name={name} number={number} id={id} onDelete={onDelete} />
          </Cnt>
        ))}
      </List>
    </div>
  );
};
