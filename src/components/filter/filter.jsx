import { useDispatch, useSelector } from 'react-redux';
import { Cont, Inp } from './filter.styled';
import { addFilter, getFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  console.log('filter', filter);
  const dispatch = useDispatch();
  return (
    <div>
      <Cont>
        <h2> Find contacts by name</h2>
        <Inp
          type="text"
          name="filter"
          // value={}
          onChange={evt => dispatch(addFilter(evt.target.value))}
        />
      </Cont>
    </div>
  );
};