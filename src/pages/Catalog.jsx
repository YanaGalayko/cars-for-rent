import { CarsList } from 'components/CarsList/CarsList';
import { Filter } from 'components/Filter/Filter';
import { LoadMore } from 'components/Load more/LoadMore';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/Api/api';
import { selectCars, selectError, selectIsLoading } from 'redux/selectors';

const Catalog = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCars({ page: 1 }));
  }, [dispatch]);

  return (
    <>
      <div>{isLoading && !error && <Loader />}</div>
      <Filter />
      <CarsList />

      {cars.length > 0 && !isLoading && !error && <LoadMore />}
    </>
  );
};

export default Catalog;
