import { NavLink } from 'react-router-dom';
import { NavWrap } from './AppNav.styled';

export const AppNav = () => {
  return (
    <NavWrap>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">All Cars</NavLink>
      <NavLink to="/favorites">Favorites Cars</NavLink>
    </NavWrap>
  );
};
