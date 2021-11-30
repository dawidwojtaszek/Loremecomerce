import React from "react";
import Element from "../components/wishlistElement";
import WishlistWrap from "../style/wishlist";
import { clearAll } from "../redux/wishlist";
import { useSelector, useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";

const WishlistPage = () => {

    const wishlist = useSelector(state => state.wishlist.items);
    const dispatch = useDispatch();
    return (
        <WishlistWrap>
            <WishlistWrap.ListBox>
                <WishlistWrap.Title>
                    Your Wishlist:
                </WishlistWrap.Title>
                {wishlist.length === 0 ? (<WishlistWrap.EmptyList>
                    Your wishlist is empty
                </WishlistWrap.EmptyList>) : (
                    <WishlistWrap.List>
                        <AnimatePresence>
                            {
                                wishlist.map(item => (
                                    <Element key={item.id} name={item.name} category={item.category} price={item.price} imgUrl={item.imgUrl} id={item.id} />
                                ))
                            }
                        </AnimatePresence>
                        <WishlistWrap.ClearListBtn onClick={() => dispatch(clearAll())}>
                            Clear all
                        </WishlistWrap.ClearListBtn>
                    </WishlistWrap.List>
                )}


            </WishlistWrap.ListBox>

        </WishlistWrap>
    )
}

export default WishlistPage;