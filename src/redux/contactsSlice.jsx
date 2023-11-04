import { createSlice } from '@reduxjs/toolkit';

//import { nanoid } from '@reduxjs/toolkit';
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [{ id: 191, name: 'oleg', number: 112233 }],
  },
  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact(state, action) {
      state.contacts.filter(item => item.id !== action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;

//selectors
export const getContacts = state => {
  return state.contacts;
};
