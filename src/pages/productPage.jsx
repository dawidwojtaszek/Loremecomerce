import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Product from '../style/productPage';
import TabComponent from "../components/tab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import Rating from "../components/rating";

const ProductPage = () => {
    const id = useParams();
    const product = useSelector(state => state.items.items).filter(item => (item.id === parseInt(id.id, 10)))[0];
    return (
        <Product>
            <Product.Container>
                <Product.ImgBox>
                    <Product.Img src={product.imgUrl} />
                </Product.ImgBox>
                <Product.InfoBox>
                    <Product.Name>
                        {product.name}
                    </Product.Name>
                    <Product.Category>
                        {product.category}
                    </Product.Category>
                    <Rating rate={product.rating} />
                    <Product.Description>
                        {product.description}
                    </Product.Description>
                    <Product.Price>
                        <FontAwesomeIcon icon={faTag} />
                        ${product.price}
                    </Product.Price>
                </Product.InfoBox>
            </Product.Container>
            <TabComponent />
        </Product>
    )
}

export default ProductPage;