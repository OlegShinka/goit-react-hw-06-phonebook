//import React, { useEffect, useState } from 'react';
import { ContactsList } from './contactsList/contactsList';
import Form from './form/form';
import { Filter } from './filter/filter';

export const App = () => {
  return (
    <div>
      <h2> Phonebook</h2>

      <Form />
      <h2>Contacts</h2>

      <Filter />

      <ContactsList />
    </div>
  );
};

export default App;
