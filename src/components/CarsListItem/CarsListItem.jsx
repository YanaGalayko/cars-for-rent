import { WrapItem } from './CarsList.styled';

export const CarsListItem = ({ car }) => {
  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
  } = car;

  return (
    <WrapItem>
      <img src={img} alt={year} />
      <h2>{make}</h2>
      <h2>{year}</h2>
      <h2>${rentalPrice}</h2>
      <p>{address}</p>
      <p>{rentalCompany}</p>
      <p>{type}</p>
      <p>{model}</p>
      <p>{mileage}</p>
    </WrapItem>
  );
};
