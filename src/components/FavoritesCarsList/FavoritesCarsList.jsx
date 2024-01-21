import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';

const body = document.querySelector('body');

export const FavoritesCarsList = ({ car }) => {
  const { img, make, year, rentalPrice, address } = car;

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
  return (
    <li key={car.id}>
      <img src={img} alt={year} />
      <h2>{make}</h2>
      <h2>{year}</h2>
      <h2>${rentalPrice}</h2>
      <p>{address}</p>
      <button type="button" onClick={handleToggleModal}>
        Learn more
      </button>
      {isOpenedModal && (
        <Modal
          handleToggleModal={handleToggleModal}
          closeModal={closeModal}
          car={car}
        />
      )}
    </li>
  );
};
