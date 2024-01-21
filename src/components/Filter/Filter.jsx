import React from 'react';
import * as yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlise';

import makes from '../../db/makes.json';
import { selectFilter } from 'redux/selectors';
import {
  FormLabel,
  FormStyle,
  FormSpan,
  FormInput,
  InputWrap,
  FormBtn,
  FormOption,
  StyleForm,
} from './Filter.styled';

const schema = yup.object().shape({
  make: yup.string(),
  price: yup.string(),
  priceFrom: yup.string(),
  priceTo: yup.string(),
});

export const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilter);

  const onChangeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const handleSubmit = () => {
    onChangeFilter(filters);
  };

  return (
    <StyleForm
      initialValues={{
        make: '',
        price: '',
        priceFrom: '',
        priceTo: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormStyle>
        <FormLabel>
          <FormSpan>Car brand</FormSpan>
          <FormInput
            className="inputCarBrand"
            name="make"
            list="makes"
            type="text"
            autoComplete="true"
            placeholder="Enter the text"
            value={filters}
            onChange={onChangeFilter}
          ></FormInput>

          <datalist id="makes" className="makesList">
            <FormOption value="" />
            {makes.map(make => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </datalist>
        </FormLabel>
        <FormLabel>
          <FormSpan>Price/ 1 hour</FormSpan>
          <FormInput
            className="inputPrice"
            type="text"
            name="price"
            autoComplete="true"
            placeholder="To $"
          />
        </FormLabel>
        <InputWrap>
          <FormLabel>
            <FormSpan>Сar mileage / km</FormSpan>
            <FormInput
              className="inputPriceFrom"
              type="text"
              name="priceFrom"
              autoComplete="true"
              placeholder="From"
            />
          </FormLabel>
          <FormLabel>
            <FormInput
              className="inputPriceTo"
              type="text"
              name="priceTo"
              autoComplete="true"
              placeholder="To"
            />
          </FormLabel>
        </InputWrap>

        <FormBtn type="submit">Search</FormBtn>
      </FormStyle>
    </StyleForm>
  );
};
