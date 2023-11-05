// import { Card } from 'components/contactCard/contactCard';
// import { nanoid } from 'nanoid';
// import { Cnt, List } from './contactsList.styled';
// import { useSelector } from 'react-redux';
// //import { getContacts } from 'redux/contactsSlice';
// export const ContactsList = () => {
//   const contacts = useSelector(state => state.contacts);
//   const filter = useSelector(state => state.filter);

//   console.log(contacts);

//   const onContacts = filter => {
//     if (filter === '') {
//       return contacts;
//     }
//     return contacts;
//     // else {
//     //   return contacts.filter(item => {
//     //     return item.name.includes(filter.toLowerCase());
//     //   });
//     // }
//   };

//   const listCont1 = onContacts(filter);
//   console.log('listCont1[0]contacts', listCont1[0].contacts);

//   const ListCont = onContacts(filter);
//   console.log(ListCont);
//   return (
//     <div>
//       <List>
//         {ListCont.map(({ name, number, id }) => (
//           <Cnt key={nanoid()}>
//             <Card name={name} number={number} id={id} />
//           </Cnt>
//         ))}
//       </List>
//     </div>
//   );
// };

import { Card } from 'components/contactCard/contactCard';
//import { nanoid } from 'nanoid';
import { Cnt, List } from './contactsList.styled';
import { useSelector } from 'react-redux';
//import { getContacts } from 'redux/contactsSlice';
export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.contacts);

  const filter = useSelector(state => state.filter);
  const onContacts = filter => {
    if (filter === '') {
      return contacts;
    }
    return contacts;
    // else {
    //   return contacts.filter(item => {
    //     return item.name.includes(filter);
    //   });
    // }
  };
  const listCont1 = onContacts(filter);
  //console.log('listCont1', listCont1);
  //console.log('listCont1[0]contacts', listCont1[0].contacts);
  //const listCont = listCont1[0].contacts;
  // console.log('listCont', listCont);
  // console.log('listCont[0]', listCont[0]);
  //console.log('listCont[1]', listCont[0]);
  return (
    <div>
      <List>
        {listCont1.map(({ name, number, id }) => (
          <Cnt key={id}>
            <Card name={name} number={number} id={id} />
          </Cnt>
        ))}
      </List>
    </div>
  );
};
