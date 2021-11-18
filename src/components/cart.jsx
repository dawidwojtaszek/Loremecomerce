import React from "react";
import CartWrap from "../style/cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons";
import { toggleCart } from "../redux/cart";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import CartItem from "./cartItem";


const Cart = () => {
    const dispatch = useDispatch();
    const cartRef = useRef();
    const closeCart = (element) => {
        if (cartRef.current === element.target) {
            dispatch(toggleCart())
        }
    }
    const cartItemsList = useSelector(state => state.cart.items);


    return (
        <CartWrap ref={cartRef} onClick={closeCart}>
            <CartWrap.CartBox>
                <CartWrap.CloseBtnBox>
                    <CartWrap.CloseBtn onClick={() => dispatch(toggleCart())}>
                        <FontAwesomeIcon icon={faTimes} />
                    </CartWrap.CloseBtn>
                </CartWrap.CloseBtnBox>

                <CartWrap.ProductsBox>
                    {
                        cartItemsList.length === 0 ? (
                            <CartWrap.EmptyCart>Your cart is empty</CartWrap.EmptyCart>
                        ) : (
                            cartItemsList.map(item => (
                                <CartItem key={item.id} item={item} />
                            ))
                        )

                    }
                </CartWrap.ProductsBox>
                <CartWrap.CheckoutBtn>
                    <FontAwesomeIcon icon={faMoneyCheckAlt} /> Checkout
                </CartWrap.CheckoutBtn>
            </CartWrap.CartBox>
        </CartWrap>
    )
}

export default Cart;