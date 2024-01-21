import { styled } from 'styled-components';
import { Form, Field, Formik } from 'formik';

export const StyleForm = styled(Formik)`
  font-family: 'ManropeMedium', sans-serif;
  color: #111111;
  font-size: 48px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const FormStyle = styled(Form)`
  display: flex;
  gap: 18px;
  justify-content: center;
  align-items: end;
  padding-top: 60px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 8px;
`;

export const FormSpan = styled.span`
  color: #8a8a89;
  font-family: 'ManropeMedium', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

export const FormInput = styled(Field)`
  display: flex;
  padding: 14px 18px 14px 18px;
  justify-content: center;
  align-items: center;
  height: 48px;
  gap: 32px;
  border-radius: 14px;
  background: #f7f7fb;
  color: #121417;
  border: none;
  ::placeholder {
    color: #121417;
    font-family: 'ManropeMedium', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }

  .inputCarBrand {
    width: 224px;
  }

  .inputPrice {
    width: 125px;
  }

  .inputPriceFrom {
    width: 160px;
    border-radius: 14px 0px 0px 14px;
    border-right: 1px solid rgba(138, 138, 137, 0.2);
  }

  .inputPriceTo {
    width: 160px;
    border-radius: 0px 14px 14px 0px;
  }
`;

export const InputWrap = styled.div`
  display: flex;
`;

export const FormBtn = styled.button`
  box-sizing: border-box;
  display: flex;
  width: 136px;
  height: 48px;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  font-family: ManropeSemiBold, sans-serif;
  font-size: 14px;
  flex-shrink: 0;
  border-radius: 12px;
  background: rgb(52, 112, 255);
  color: rgb(255, 255, 255);
  cursor: pointer;
  border: none;
  margin: 0px;
`;

export const FormOption = styled.option`
  display: inline-flex;
  height: 272px;
  font-size: 18px;
  padding: 14px 8px 14px 18px;
  justify-content: flex-end;
  align-items: flex-start;
  /* gap: 112px; */
  flex-shrink: 0;
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);

  background: #fff;

  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
`;
