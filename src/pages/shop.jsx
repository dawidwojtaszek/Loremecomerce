import React from "react";
import Shop from '../style/shopPage';
import ProductCard from "../components/productCard";
import { useSelector } from "react-redux";

const ShopPage = () => {

    const allItems = useSelector(state => state.items.items);
    const shortListItems = allItems.slice(0, 18);

    return (
        <Shop>
            <Shop.Container>
                <Shop.Navigation>
                    <Shop.NavigationBtn>All</Shop.NavigationBtn>
                    <Shop.NavigationBtn>Hats</Shop.NavigationBtn>
                    <Shop.NavigationBtn>Jackets</Shop.NavigationBtn>
                    <Shop.NavigationBtn>Jeans</Shop.NavigationBtn>
                    <Shop.NavigationBtn>Shoes</Shop.NavigationBtn>
                    <Shop.NavigationBtn>Shirts</Shop.NavigationBtn>
                    <Shop.NavigationBtn>Bags</Shop.NavigationBtn>
                </Shop.Navigation>
                <Shop.ProductList>
                    {
                        shortListItems.map(item => (
                            <ProductCard key={item.id} name={item.name} price={item.price} imgUrl={item.imgUrl} id={item.id} category={item.category} description={item.description} />
                        ))
                    }
                </Shop.ProductList>
            </Shop.Container>
        </Shop>
    )
}


export default ShopPage