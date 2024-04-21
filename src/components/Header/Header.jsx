import { NavLink } from 'react-router-dom';
import { WrapperNav, Logo, ListNav, ListItem } from './Header.module';

const Header = () => {
  return (
    <WrapperNav>
      <Logo>Camper rent</Logo>
      <ListNav>
        <ListItem>
          <NavLink to="/">Home</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/catalog">Catalog</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/favorites">Favorites</NavLink>
        </ListItem>
      </ListNav>
    </WrapperNav>
  );
};

export default Header;
