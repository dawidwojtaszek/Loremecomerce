import React from "react";
import Card from "../style/productCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faTag, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { addItemToWishlist } from "../redux/wishlist";
import { toggleModal, setCurrentElement } from "../redux/modal";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/cart";
import '../style/elements/tooltip.css';

const ProductCard = (props) => {

    const currentProduct = props;
    const { name, category, price, imgUrl, tag, id } = props
    const dispatch = useDispatch();
    const wishList = useSelector(state => state.wishlist.items);
    const existingItem = wishList.filter(item => { return item.id === id })
    return (

        <div>
            <Card>
                <Card.ImageBox>
                    <Card.Image src={imgUrl} />
                    {tag ?
                        (<Card.Tag bg={tag === "new" ? ("#5BC8AF") : ("#0B7189")}>{tag}</Card.Tag>)
                        : ('')}
                    {
                        existingItem.length > 0 ?
                            (
                                <Card.WishlistBtn color='#CF2626' opacity="1" onClick={() => dispatch(addItemToWishlist(currentProduct))} data-tooltip="Wishlist" data-flow="left" >
                                    <FontAwesomeIcon icon={faHeart} />
                                </Card.WishlistBtn>
                            )
                            : (
                                <Card.WishlistBtn color="#F4F3EF" opacity="1" onClick={() => dispatch(addItemToWishlist(currentProduct))} data-tooltip="Wishlist" data-flow="left" >
                                    <FontAwesomeIcon icon={faHeart} />
                                </Card.WishlistBtn>
                            )

                    }
                    <Card.QuickView onClick={() => { dispatch(toggleModal()); dispatch(setCurrentElement(currentProduct)) }} data-tooltip="Quick view" data-flow="left">
                        <FontAwesomeIcon icon={faEye} />
                    </Card.QuickView>
                </Card.ImageBox>

                <Card.Info>
                    <Card.Name>{name}</Card.Name>
                    <Card.Category>{category}</Card.Category>
                    <Card.PriceBox>
                        <Card.PriceTag>
                            <FontAwesomeIcon icon={faTag} />
                        </Card.PriceTag>
                        <Card.Price>${price}</Card.Price>
                    </Card.PriceBox>
                </Card.Info>
                <Card.Btn onClick={() => dispatch(addItem(currentProduct))}><FontAwesomeIcon icon={faCartPlus} /> Add to cart</Card.Btn>
            </Card>
        </div>
    )
}

export default ProductCard