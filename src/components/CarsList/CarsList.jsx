import { CarsListItem } from 'components/CarsListItem/CarsListItem';
import { useSelector } from 'react-redux';
import { selectCars } from 'redux/selectors';
import { WrapList } from './CarsList.styled';

export const CarsList = () => {
  const cars = useSelector(selectCars);

  return (
    <>
      <WrapList>
        {cars.map(item => (
          <CarsListItem key={item.id} car={item} />
        ))}
      </WrapList>
    </>
  );
};
