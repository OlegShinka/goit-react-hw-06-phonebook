import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [{ id: 191, name: 'oleg', number: 112233 }],
  },
  reducers: {
    // addContact: {
    //   reducer(state, action) {
    //     state.push(action.payload);
    //   },
    //   prepare(text) {
    //     return {
    //       payload: text,
    //       id: nanoid(),
    //     };
    //   },
    // },
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
  },
});
export const contactsReducer = contactsSlice.reducer;
export const { addContact } = contactsSlice.actions;
