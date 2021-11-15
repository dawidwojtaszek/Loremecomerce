import React from "react";
import Element from "../style/wishlist/wishlistElement";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/wishlist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const WishlistElement = ({ name, category, price, imgUrl, id }) => {

    const dispatch = useDispatch();
    return (
        <Element>
            <Element.ImgBox>
                <Element.Img src={imgUrl} />
            </Element.ImgBox>

            <Element.Name>{name}</Element.Name>
            <Element.Category>{category}</Element.Category>
            <Element.Price>${price}</Element.Price>
            <Element.RemoveBtn onClick={() => dispatch(removeItem(id))}>
                <FontAwesomeIcon icon={faTimes} />
            </Element.RemoveBtn>
        </Element>
    )
}

export default WishlistElement;