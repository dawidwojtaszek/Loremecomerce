import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Product from '../style/productPage';
const ProductPage = () => {
    const id = useParams();
    const product = useSelector(state => state.items.items).filter(item => (item.id === parseInt(id.id, 10)))[0];
    console.log(product);
    return (
        <Product>
            <Product.Container>
                <Product.ImgBox>
                    <Product.Img src={product.imgUrl} />
                </Product.ImgBox>
                <Product.InfoBox>{product.name}</Product.InfoBox>
            </Product.Container>
        </Product>
    )
}

export default ProductPage;