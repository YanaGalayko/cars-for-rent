// import { CarsListItem } from 'components/CarsListItem/CarsListItem';
import { FavoritesCarsList } from 'components/FavoritesCarsList/FavoritesCarsList';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux/selectors';

export const FavoritesCars = () => {
  const { favorite } = useSelector(selectFavorites);
  console.log(favorite);

  return (
    <>
      <ul>
        {favorite.map(item => (
          <FavoritesCarsList key={item.id} car={item} />
        ))}
      </ul>
    </>
  );
};
