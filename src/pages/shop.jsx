import React from "react";
import Shop from '../style/shopPage';
import ProductCard from "../components/productCard";
import { useSelector } from "react-redux";

const ShopPage = () => {

    const allItems = useSelector(state => state.items.items);
    const shortListItems = allItems.slice(0, 18);
    console.log(shortListItems);
    return (
        <Shop>
            <Shop.Container>
                <Shop.Navigation>
                    <Shop.NavigationTitle>
                        Category:
                    </Shop.NavigationTitle>
                </Shop.Navigation>
                <Shop.ProductList>

                </Shop.ProductList>
            </Shop.Container>
        </Shop>
    )
}


export default ShopPage