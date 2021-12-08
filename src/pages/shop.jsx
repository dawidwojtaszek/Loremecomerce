import React from "react";
import Shop from '../style/shopPage';
import ProductCard from "../components/productCard";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentShop, filterShopCategory } from "../redux/items";
import { useEffect } from "react";
import SHOP_DATA from "../assets/data/shopData";
import { Helmet } from "react-helmet";

const ShopPage = () => {

    const allItems = SHOP_DATA;
    const shortListItems = allItems.slice(0, 18);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setCurrentShop(shortListItems));
        // eslint-disable-next-line
    }, [])

    const itemListToRender = useSelector(state => state.items.currentShop);

    return (
        <Shop>
            <Helmet>
                <title>Shop | Lorem Ecomerce</title>
            </Helmet>
            <Shop.Container>
                <Shop.Navigation>
                    <Shop.NavigationBtn onClick={() => dispatch(setCurrentShop(allItems))}>All</Shop.NavigationBtn>
                    <Shop.NavigationBtn onClick={() => dispatch(filterShopCategory('hat'))}>Hats</Shop.NavigationBtn>
                    <Shop.NavigationBtn onClick={() => dispatch(filterShopCategory('jackets'))}>Jackets</Shop.NavigationBtn>
                    <Shop.NavigationBtn onClick={() => dispatch(filterShopCategory('shoes'))}>Shoes</Shop.NavigationBtn>
                    <Shop.NavigationBtn onClick={() => dispatch(filterShopCategory('shirt'))}>Shirts</Shop.NavigationBtn>
                    <Shop.NavigationBtn onClick={() => dispatch(filterShopCategory('bag'))}>Bags</Shop.NavigationBtn>
                </Shop.Navigation>
                <Shop.ProductList>
                    {
                        itemListToRender.map(item => (
                            <ProductCard key={item.id} name={item.name} price={item.price} imgUrl={item.imgUrl} id={item.id} category={item.category} description={item.description} tag={item.tag} />
                        ))
                    }
                </Shop.ProductList>
            </Shop.Container>
        </Shop>
    )
}


export default ShopPage