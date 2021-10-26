import React from "react";
import Logo from '../assets/images/loremLogo.png';
import Header from "../style/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faStar } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const HeaderComponent = () => {
    return (
        <Header>
            <Header.Container>
                <Header.Logo src={Logo} />
                <Header.Nav>
                    <Header.Links>
                        <Header.LinkElement>Home</Header.LinkElement>
                        <Header.LinkElement>Shop</Header.LinkElement>
                        <Header.LinkElement>Blog</Header.LinkElement>
                        <Header.LinkElement>Contact</Header.LinkElement>
                    </Header.Links>
                </Header.Nav>
                <Header.RightSection>
                    <Header.RightElement border>
                        <Header.ElementIcon >
                            <FontAwesomeIcon icon={faUserCircle} />
                        </Header.ElementIcon>
                        Sign in
                    </Header.RightElement>
                    <Header.RightElement border>
                        <Header.ElementIcon >
                            <FontAwesomeIcon icon={faStar} />
                        </Header.ElementIcon>
                        Wishlist
                        <Header.Counter>0</Header.Counter>
                    </Header.RightElement>
                    <Header.RightElement>
                        <Header.ElementIcon >
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Header.ElementIcon>
                        Cart
                        <Header.Counter>0</Header.Counter>
                    </Header.RightElement>
                </Header.RightSection>
            </Header.Container>
        </Header>
    )
}

export default HeaderComponent;
