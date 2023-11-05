import { createSlice } from '@reduxjs/toolkit';

//const initialStateContacts = [];
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact(state, action) {
      //state.contacts.filter(item => item.id !== action.payload);
      const index = state.contacts.findIndex(
        task => task.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;

//selectors
export const getContacts = state => {
  return state.contacts;
};
