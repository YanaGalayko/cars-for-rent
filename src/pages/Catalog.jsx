import { CarsList } from 'components/CarsList/CarsList';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/Api/api';
import { selectIsLoading } from 'redux/selectors';

const Catalog = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  return (
    <>
      <div>{isLoading && <Loader />}</div>
      <CarsList />
    </>
  );
};

export default Catalog;
