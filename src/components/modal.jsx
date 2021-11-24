import React from "react";
import ModalWrap from "../style/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTag, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../redux/modal";
import { addItem } from "../redux/cart";
import { useRef } from "react";
import { notify } from "./toast";

const Modal = () => {
    const dispatch = useDispatch();
    const modalRef = useRef()
    const product = useSelector(state => state.modal.currentElement);
    const closeModal = (element) => {
        if (modalRef.current === element.target) {
            dispatch(toggleModal())
        }
    }
    const handleAddToCart = (itemToAdd) => {
        dispatch(addItem(itemToAdd));
        notify('You ADD item to cart');
    }

    return (
        <ModalWrap ref={modalRef} onClick={closeModal}>
            <ModalWrap.Container >

                <ModalWrap.ImgBox>
                    <ModalWrap.Img src={product.imgUrl} />
                </ModalWrap.ImgBox>
                <ModalWrap.Info>
                    <ModalWrap.CloseContainer>
                        <ModalWrap.CloseBtn onClick={() => dispatch(toggleModal())}>
                            <FontAwesomeIcon icon={faTimes} />
                        </ModalWrap.CloseBtn>
                    </ModalWrap.CloseContainer>


                    <ModalWrap.Product>

                        <ModalWrap.ProductTitle>
                            {product.name}
                        </ModalWrap.ProductTitle>
                        <ModalWrap.ProductCategory>
                            {product.category}
                        </ModalWrap.ProductCategory>
                        <ModalWrap.ProductDescription>
                            {product.description}
                        </ModalWrap.ProductDescription>
                        <ModalWrap.ProductPrice>
                            <FontAwesomeIcon icon={faTag} /> ${product.price}
                        </ModalWrap.ProductPrice>
                        <ModalWrap.ProductBtn onClick={() => handleAddToCart(product)}>
                            <FontAwesomeIcon icon={faCartPlus} /> Add To cart
                        </ModalWrap.ProductBtn>
                    </ModalWrap.Product>
                </ModalWrap.Info>

            </ModalWrap.Container>
        </ModalWrap>
    )
}

export default Modal