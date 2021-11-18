import React from "react";
import Item from '../style/cart/cartItem';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem, reduceItem, toggleCart, removeItem } from "../redux/cart";
const CartItem = ({ item }) => {

    const { name, quantity, price } = item;
    const dispatch = useDispatch();
    return (
        <Item>

            <Item.Name><Link to="/shop" onClick={() => dispatch(toggleCart())}>{name}</Link></Item.Name>
            <Item.QuantityBox>
                <Item.IconBox onClick={() => dispatch(reduceItem(item))}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </Item.IconBox>
                <Item.Quantity>{quantity}</Item.Quantity>
                <Item.IconBox onClick={() => dispatch(addItem(item))}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </Item.IconBox>
            </Item.QuantityBox>

            <Item.Price>${price}</Item.Price>
            <Item.IconBox onClick={() => dispatch(removeItem(item))}>X</Item.IconBox>
        </Item>
    )
}

export default CartItem;