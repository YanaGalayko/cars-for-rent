import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  display: block;
  margin: 100px auto 0;
  border: none;
  background-color: transparent;
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-decoration-line: underline;

  &:is(:hover, :focus) {
    color: #0b44cd;
  }
`;
