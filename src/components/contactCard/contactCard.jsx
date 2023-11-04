import { useDispatch, useSelector } from 'react-redux';
import { BtnStyle } from './contactCard.styled';
import { HiTrash } from 'react-icons/hi';
import { deleteContact } from 'redux/contactsSlice';
export const Card = () => {
  const name = useSelector(state => state.contacts.name);
  const number = useSelector(state => state.contacts.number);
  const id = useSelector(state => state.contacts.id);
  const dispatch = useDispatch();
  return (
    <div>
      <span>{name} :</span>
      <span>{number} </span>

      <BtnStyle type="button" onClick={() => dispatch(deleteContact(id))}>
        <HiTrash />
      </BtnStyle>
    </div>
  );
};
