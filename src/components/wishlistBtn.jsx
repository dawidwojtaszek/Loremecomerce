import React from "react";
import Heart from "../style/wishlistBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { addItemToWishlist } from "../redux/wishlist";
import { notify } from "./toast";
import '../style/elements/tooltip.css';

const WishlistBtn = ({ itemToAdd }) => {

    const dispatch = useDispatch();
    const wishlistItems = useSelector(state => state.wishlist.items);
    const existingItem = wishlistItems.filter(item => item.id === itemToAdd.id);
    const handleAddToWishlist = (item, message) => {
        dispatch(addItemToWishlist(item));
        notify(message);
    }

    return (
        <Heart data-tooltip="Wishlist" data-flow="bottom">
            {existingItem.length === 0 ? (
                <FontAwesomeIcon icon={faHeart} color="#d6d2d2" onClick={() => handleAddToWishlist(itemToAdd, "You ADD item to wishlist")} />
            ) : (
                <FontAwesomeIcon icon={faHeart} color="#CF2626" onClick={() => handleAddToWishlist(itemToAdd, "You REMOVE item from wishlist")} />
            )}

        </Heart>

    )
}

export default WishlistBtn;