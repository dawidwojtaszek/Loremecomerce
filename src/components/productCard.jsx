import React from "react";
import Card from "../style/productCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faTag } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faEye } from "@fortawesome/free-regular-svg-icons";

const ProductCard = () => {

    return (

        <div>
            <Card>
                <Card.ImageBox>
                    <Card.Image src="https://i.ibb.co/M6hHc3F/brown-trench.png" />

                    <Card.Tag bg="#5BC8AF">NEW</Card.Tag>
                    <Card.WishlistBtn>
                        <FontAwesomeIcon icon={faHeart} />
                    </Card.WishlistBtn>
                    <Card.QuickView>
                        <FontAwesomeIcon icon={faEye} />
                    </Card.QuickView>
                </Card.ImageBox>

                <Card.Info>
                    <Card.Name>Lether Jacket</Card.Name>
                    <Card.Category>Jackets</Card.Category>
                    <Card.PriceBox>
                        <Card.PriceTag>
                            <FontAwesomeIcon icon={faTag} />
                        </Card.PriceTag>
                        <Card.Price>$200</Card.Price>
                    </Card.PriceBox>
                </Card.Info>
                <Card.Btn><FontAwesomeIcon icon={faCartPlus} /> Add to cart</Card.Btn>
            </Card>
        </div>
    )
}

export default ProductCard