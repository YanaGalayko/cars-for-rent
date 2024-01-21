import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/Api/api';
import { setPage } from 'redux/cars/paginationSlice';
import { selectPagination } from 'redux/selectors';
import { LoadMoreBtn } from './LoadMore.styled';

export const LoadMore = () => {
  const { page } = useSelector(selectPagination);
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(setPage(page + 1));
    dispatch(fetchCars({ page: page + 1 }));
  };

  return (
    <>
      <LoadMoreBtn type="button" onClick={handleLoadMore}>
        Load more
      </LoadMoreBtn>
    </>
  );
};
