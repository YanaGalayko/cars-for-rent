import styled from 'styled-components';

export const WrapItem = styled.li`
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  align-items: flex-start;
`;

export const WrapImg = styled.div`
  position: relative;
  width: 274px;
  height: 268px;
  margin-bottom: 14px;
`;

export const WrapIcon = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
`;

export const WrapBtn = styled.div`
  background: transparent;
  border-radius: 8px;
  border: 1px solid transparent;
  font-size: 14px;
  width: 22px;
  height: 22px;
  margin: 0;
`;

export const CarImg = styled.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`;

export const TitleWrap = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

export const Title = styled.p`
  color: rgb(18, 20, 23);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin: 0px;
  padding-right: 5px;
`;

export const Span = styled.span`
  color: rgb(52, 112, 255);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin: 0px;
  padding-right: 5px;
`;

export const Prise = styled.p`
  color: rgb(18, 20, 23);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin-left: auto;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 28px;
`;

export const InfoText = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0px;
`;

export const Button = styled.button`
  width: 274px;
  padding: 12px 99px;
  border-radius: 12px;
  background-color: #3470ff;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  border: none;

  &:is(:hover, :focus) {
    background-color: #0b44cd;
  }
`;
