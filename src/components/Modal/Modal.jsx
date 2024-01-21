import React from 'react';
import sprite from '../../images/sprite.svg';
import {
  AccessoriesInfo,
  AccessoriesList,
  DescriptionText,
  Backdrop,
  CarImg,
  CloseIcon,
  WrapModal,
  CloseButton,
  RentalButton,
} from './Modal.styled';

import { createPortal } from 'react-dom';
import {
  Title,
  TitleWrap,
  Span,
  Prise,
  InfoText,
  InfoWrap,
} from 'components/CarsListItem/CarsListItem.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ handleToggleModal, closeModal, car }) => {
  const {
    img,
    make,
    id,
    address,
    type,
    model,
    year,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalPrice,
  } = car;

  const city = address.split(',')[1];
  const country = address.split(',')[2];

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      handleToggleModal();
    }
  };

  const handleEscClose = e => {
    if (e.key === 'Escape') {
      e.preventDefault();
      window.removeEventListener('keydown', handleEscClose);
      closeModal();
    }
  };

  window.addEventListener('keydown', handleEscClose);

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <WrapModal>
        <CloseButton onClick={handleToggleModal}>
          <CloseIcon>
            <use href={`${sprite}#icon-close`}></use>
          </CloseIcon>
        </CloseButton>

        <CarImg src={img} alt={make} />
        <TitleWrap>
          <Title>{make}</Title>
          <Span>{model},</Span>
          <Title>{year}</Title>
          <Prise>{rentalPrice}</Prise>
        </TitleWrap>
        <InfoWrap>
          <InfoText>
            {city} | {country} | id: {id} | Year: {year}| {type}
          </InfoText>
          <InfoText>
            Fuel Consumption: {fuelConsumption} | Engine Size: {engineSize}
          </InfoText>
        </InfoWrap>

        <DescriptionText>{description}</DescriptionText>
        <AccessoriesInfo>Accessories and functionalities:</AccessoriesInfo>
        <AccessoriesList>
          {accessories.map(item => (
            <li key={item}>
              <InfoText>{item}</InfoText>
            </li>
          ))}
        </AccessoriesList>
        <AccessoriesList>
          {functionalities.map(item => (
            <li key={item}>
              <InfoText>{item}</InfoText>
            </li>
          ))}
        </AccessoriesList>
        <AccessoriesInfo>Rental Conditions:</AccessoriesInfo>
        <RentalButton href="tel:+380730000000">Rental car</RentalButton>
      </WrapModal>
    </Backdrop>,
    modalRoot
  );
};
