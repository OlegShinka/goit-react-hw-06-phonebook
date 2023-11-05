import { useDispatch } from 'react-redux';
import { BtnStyle } from './contactCard.styled';
import { HiTrash } from 'react-icons/hi';
import { deleteContact } from 'redux/contactsSlice';
export const Card = ({ name, number, id }) => {
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
