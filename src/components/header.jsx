import React from "react";
import Logo from '../assets/images/loremLogo.png';
import Header from "../style/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faStar } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import Cart from "./cart";
const HeaderComponent = () => {

    const wishlistCounter = useSelector(state => state.wishlist.items).length;

    return (
        <Header>
            <Header.Container>
                <Link to="/"><Header.Logo src={Logo} /></Link>
                <Header.Nav>
                    <Header.Links>
                        <Header.LinkElement><Link to="/">Home</Link></Header.LinkElement>
                        <Header.LinkElement><Link to="/shop">Shop</Link></Header.LinkElement>
                        <Header.LinkElement><Link to="/">Blog</Link></Header.LinkElement>
                        <Header.LinkElement><Link to="/">Contact</Link></Header.LinkElement>
                    </Header.Links>
                </Header.Nav>
                <Header.RightSection>
                    <Header.RightElement border>
                        <Header.ElementIcon >
                            <FontAwesomeIcon icon={faUserCircle} />
                        </Header.ElementIcon>
                        Sign in
                    </Header.RightElement>
                    <Link to="/wishlist">
                        <Header.RightElement border>
                            <Header.ElementIcon >
                                <FontAwesomeIcon icon={faStar} />
                            </Header.ElementIcon>
                            Wishlist
                            <Header.Counter>{wishlistCounter}</Header.Counter>
                        </Header.RightElement>
                    </Link>
                    <Header.RightElement>
                        <Header.ElementIcon >
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Header.ElementIcon>
                        Cart
                        <Header.Counter>0</Header.Counter>
                        <Cart />
                    </Header.RightElement>
                </Header.RightSection>

            </Header.Container>
        </Header>
    )
}

export default HeaderComponent;
