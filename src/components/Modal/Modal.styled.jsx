import styled from 'styled-components';

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2000;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapModal = styled.div`
  background-color: white;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 541px;
  height: 100%;

  padding: 40px;

  border-radius: 24px;

  display: flex;
  flex-direction: column;

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #3e85f3;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background: #e7e5e5;
    height: 112px;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #7c7c7c;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  margin-left: auto;
  background-color: transparent;
  width: 24px;
  height: 24px;
  border: none;
`;

export const CloseIcon = styled.svg`
  width: 100%;
  height: 100%;
  stroke: #121417;
`;

export const CarImg = styled.img`
  height: 248px;
  width: 100%;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const DescriptionText = styled.p`
  margin-bottom: 24px;
  color: #121417;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const AccessoriesInfo = styled.h3`
  margin-bottom: 8px;
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

export const AccessoriesList = styled.ul`
  display: flex;
  margin-bottom: 4px;
  gap: 6px;
`;

export const RentalButton = styled.a`
  display: inline-block;
  min-width: 168px;
  padding: 12px 50px;
  border-radius: 12px;
  background-color: #3470ff;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;
