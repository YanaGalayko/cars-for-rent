import { useEffect, useState } from 'react';
import {
  WrapItem,
  WrapImg,
  CarImg,
  WrapIcon,
  WrapBtn,
  TitleWrap,
  Title,
  Span,
  Prise,
  InfoWrap,
  InfoText,
  Button,
} from './CarsListItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from 'redux/selectors';
import { addFavorite, removeFavorite } from 'redux/favorite/favoriteSlice';
import { Modal } from 'components/Modal/Modal';

import { LuHeart } from 'react-icons/lu';
import { IoIosHeart } from 'react-icons/io';

const body = document.querySelector('body');

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
    accessories,
  } = car;

  const city = address.split(',')[1];
  const country = address.split(',')[2];

  const [isOpenedModal, setIsOpenedModal] = useState(false);

  const handleToggleModal = () => {
    setIsOpenedModal(!isOpenedModal);
    if (isOpenedModal === true) {
      body.style.overflow = 'scroll';
    }
    if (isOpenedModal === false) {
      body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setIsOpenedModal(false);
    body.style.overflow = 'scroll';
  };

  const dispatch = useDispatch();
  const { favorite } = useSelector(selectFavorites);
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    const isFavoritesCar = favorite.some(item => item.id === car.id);
    setIsChange(isFavoritesCar);
  }, [favorite, car.id]);

  const handleFavoriteChange = () => {
    if (isChange) {
      dispatch(removeFavorite(car));
    } else {
      dispatch(addFavorite(car));
    }
  };

  return (
    <WrapItem>
      <WrapImg>
        <WrapIcon>
          <WrapBtn onClick={handleFavoriteChange} type="button">
            {isChange ? (
              <IoIosHeart color="#3470FF" size="18px" />
            ) : (
              <LuHeart color="rgba(255, 255, 255, 0.80)" size="18px" />
            )}
          </WrapBtn>
        </WrapIcon>
        <CarImg src={img} alt={make} />
      </WrapImg>
      <TitleWrap>
        <Title>{make}</Title>
        <Span>{model},</Span>
        <Title>{year}</Title>
        <Prise>{rentalPrice}</Prise>
      </TitleWrap>
      <InfoWrap>
        <InfoText>
          {city} | {country} | {rentalCompany} | {type}
        </InfoText>
        <InfoText>
          {model} | {mileage} | {accessories[0]}
        </InfoText>
      </InfoWrap>

      <Button type="button" onClick={handleToggleModal}>
        Learn more
      </Button>
      {isOpenedModal && (
        <Modal
          handleToggleModal={handleToggleModal}
          closeModal={closeModal}
          car={car}
        />
      )}
    </WrapItem>
  );
};
