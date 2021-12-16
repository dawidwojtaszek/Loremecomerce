import Logo from "../assets/images/loremLogo.png";
import Header from "../style/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faStar } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../redux/mobileMenu";
import { toggleCart } from "../redux/cart";

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const wishlistCounter = useSelector((state) => state.wishlist.items).length;
  const cartCounter = useSelector((state) => state.cart.items).reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity,
    0
  );

  return (
    <Header>
      <Header.Container>
        <Link to="/">
          <Header.Logo src={Logo} />
        </Link>
        <Header.Nav>
          <Header.Links>
            <Header.LinkElement>
              <Link to="/">Home</Link>
            </Header.LinkElement>
            <Header.LinkElement>
              <Link to="/shop">Shop</Link>
            </Header.LinkElement>
            <Header.LinkElement>
              <Link to="/blog">Blog</Link>
            </Header.LinkElement>
            <Header.LinkElement>
              <Link to="/contact">Contact</Link>
            </Header.LinkElement>
          </Header.Links>
        </Header.Nav>
        <Header.RightSection>
          <Link to="/signin">
            <Header.RightElement border>
              <Header.ElementIcon>
                <FontAwesomeIcon icon={faUserCircle} />
              </Header.ElementIcon>
              Sign in
            </Header.RightElement>
          </Link>
          <Link to="/wishlist">
            <Header.RightElement border>
              <Header.ElementIcon>
                <FontAwesomeIcon icon={faStar} />
              </Header.ElementIcon>
              Wishlist
              <Header.Counter>{wishlistCounter}</Header.Counter>
            </Header.RightElement>
          </Link>
          <Header.RightElement onClick={() => dispatch(toggleCart())}>
            <Header.ElementIcon>
              <FontAwesomeIcon icon={faShoppingCart} />
            </Header.ElementIcon>
            Cart
            <Header.Counter>{cartCounter}</Header.Counter>
          </Header.RightElement>
        </Header.RightSection>
        <Header.Hamburger onClick={() => dispatch(toggleMenu())}>
          <FontAwesomeIcon icon={faBars} />
        </Header.Hamburger>
      </Header.Container>
    </Header>
  );
};

export default HeaderComponent;
