import { useState } from "react";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../redux/user/slice'
import { selectProductsCount } from '../../redux/cart/cart.selectors';

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const { currentUser } = useSelector(rootReducer => rootReducer.userReducer);
  const productsCount = useSelector(selectProductsCount);
  const dispatch = useDispatch();

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLogin = () => {
    dispatch(login({ name: 'Andrey', email: 'andrey@email.com' }))
  }

  const handleLogout = () => {
    dispatch(logout())
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogout}>Sair</div>
        ) : (
          <div onClick={handleLogin}>Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
