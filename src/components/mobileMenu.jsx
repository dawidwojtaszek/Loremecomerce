import React from "react";
import Menu from "../style/mobileMenu";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faStar } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/mobileMenu";

const MobileMenu = () => {

    const dispatch = useDispatch();
    return (
        <Menu>
            <Menu.NavBox>
                <Menu.CloseBtn onClick={() => dispatch(toggleMenu())}>
                    <FontAwesomeIcon icon={faTimes} />
                </Menu.CloseBtn>
            </Menu.NavBox>
            <Menu.NavLinks>
                <Menu.LinkElement>Home</Menu.LinkElement>
                <Menu.LinkElement>Shop</Menu.LinkElement>
                <Menu.LinkElement>Blog</Menu.LinkElement>
                <Menu.LinkElement>Contact</Menu.LinkElement>
            </Menu.NavLinks>
            <Menu.BottomSection>
                <Menu.BottomElement>
                    <Menu.ElementIcon>
                        <FontAwesomeIcon icon={faUserCircle} />
                    </Menu.ElementIcon>
                    Sign In
                </Menu.BottomElement>
                <Menu.BottomElement>
                    <Menu.ElementIcon>
                        <FontAwesomeIcon icon={faStar} />
                    </Menu.ElementIcon>
                    Wishlist
                    <Menu.Counter>0</Menu.Counter>
                </Menu.BottomElement>
                <Menu.BottomElement>
                    <Menu.ElementIcon>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </Menu.ElementIcon>
                    Cart
                    <Menu.Counter>0</Menu.Counter>
                </Menu.BottomElement>
            </Menu.BottomSection>
        </Menu>
    )
}

export default MobileMenu;