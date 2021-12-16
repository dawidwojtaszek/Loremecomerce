import Menu from "../style/mobileMenu";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faStar } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/mobileMenu";

const MobileMenu = () => {
  const wishlistCounter = useSelector((state) => state.wishlist.items);
  const cartCounter = useSelector((state) => state.cart.items).reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity,
    0
  );
  const dispatch = useDispatch();
  return (
    <Menu>
      <Menu.NavBox>
        <Menu.CloseBtn onClick={() => dispatch(toggleMenu())}>
          <FontAwesomeIcon icon={faTimes} />
        </Menu.CloseBtn>
      </Menu.NavBox>
      <Menu.NavLinks>
        <Menu.LinkElement onClick={() => dispatch(toggleMenu())}>
          <Link to="/">Home</Link>
        </Menu.LinkElement>
        <Menu.LinkElement onClick={() => dispatch(toggleMenu())}>
          <Link to="/shop">Shop</Link>
        </Menu.LinkElement>
        <Menu.LinkElement onClick={() => dispatch(toggleMenu())}>
          <Link to="/blog">Blog</Link>
        </Menu.LinkElement>
        <Menu.LinkElement onClick={() => dispatch(toggleMenu())}>
          <Link to="/contact">Contact</Link>
        </Menu.LinkElement>
      </Menu.NavLinks>
      <Menu.BottomSection>
        <Link to="/signin">
          <Menu.BottomElement onClick={() => dispatch(toggleMenu())}>
            <Menu.ElementIcon>
              <FontAwesomeIcon icon={faUserCircle} />
            </Menu.ElementIcon>
            Sign In
          </Menu.BottomElement>
        </Link>
        <Link to="/wishlist">
          <Menu.BottomElement onClick={() => dispatch(toggleMenu())}>
            <Menu.ElementIcon>
              <FontAwesomeIcon icon={faStar} />
            </Menu.ElementIcon>
            Wishlist
            <Menu.Counter>{wishlistCounter.length}</Menu.Counter>
          </Menu.BottomElement>
        </Link>
        <Link to="/checkout">
          <Menu.BottomElement onClick={() => dispatch(toggleMenu())}>
            <Menu.ElementIcon>
              <FontAwesomeIcon icon={faShoppingCart} />
            </Menu.ElementIcon>
            Cart
            <Menu.Counter>{cartCounter}</Menu.Counter>
          </Menu.BottomElement>
        </Link>
      </Menu.BottomSection>
    </Menu>
  );
};

export default MobileMenu;
