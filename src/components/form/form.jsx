import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Cont, Inp, FormStyle, BtnStyle } from './form.styled';
import { TiUser, TiSortNumericallyOutline } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  console.log(contacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    //додаємо до обєкту властивості name, num та їх значення із масивів які повертає кожен useState
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    if (checkContact(newContact.name, contacts)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    } else {
      dispatch(addContact(newContact));
      // чистим інпути після сабміту
      setName('');
      setNumber('');
    }
  };
  const checkContact = (nameContact, contacts) => {
    return [contacts].find(item => {
      return item.name === nameContact.toLowerCase();
    });
  };

  return (
    <div>
      <Cont>
        <FormStyle onSubmit={handleSubmit}>
          <label>
            Name <TiUser />
          </label>
          <Inp
            autoComplete="on"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$"
            required
          />
          <label htmlFor="tel">
            Number <TiSortNumericallyOutline />
          </label>
          <Inp
            autoComplete="on"
            type="tel"
            value={number}
            name="number"
            onChange={handleChange}
            // pattern="[a-zA-Z0-9]+"
            pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
            required
          />
          <BtnStyle type="submit">Add contact</BtnStyle>
        </FormStyle>
      </Cont>
    </div>
  );
};

export default Form;
