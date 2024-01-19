import { NavLink } from 'react-router-dom';
import { NavWrap } from './AppBar.styled';

export const AppBar = () => {
  return (
    <NavWrap>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">All Cars</NavLink>
      <NavLink to="/favorites">Favorites Cars</NavLink>
    </NavWrap>
  );
};
