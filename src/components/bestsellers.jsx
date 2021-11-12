import React from "react";
import { Title } from '../style/elements/title';
import ProductCard from "./productCard";
import BestsellersSection from "../style/bestsellers";
import { useDispatch, useSelector } from "react-redux";
import { setBestsellers, setCurrentBestseller, filterCategory } from "../redux/items";
import { useEffect } from "react";

const Bestsellers = ({ bestsellerList }) => {

    const allBestsellers = bestsellerList.slice(0, 12);

    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(setBestsellers(bestsellerList));
        dispatch(setCurrentBestseller(allBestsellers));
    }, [])

    const currentList = useSelector(state => state.items.currentBestseller);


    return (

        <BestsellersSection>
            <Title>Weekly Bestsellers</Title>
            <BestsellersSection.Container>
                <BestsellersSection.Navigation>
                    <BestsellersSection.NavLink onClick={() => dispatch(setCurrentBestseller(allBestsellers))}>
                        All
                    </BestsellersSection.NavLink>/
                    <BestsellersSection.NavLink onClick={() => dispatch(filterCategory('jackets'))}>
                        Jackets
                    </BestsellersSection.NavLink>/
                    <BestsellersSection.NavLink onClick={() => dispatch(filterCategory('hat'))}>
                        Hats
                    </BestsellersSection.NavLink>/
                    <BestsellersSection.NavLink onClick={() => dispatch(filterCategory('shoes'))}>
                        Shoes
                    </BestsellersSection.NavLink>
                </BestsellersSection.Navigation>
                <BestsellersSection.ItemsContainer>
                    {
                        currentList.map(item => (
                            <ProductCard key={item.id} name={item.name} category={item.category} price={item.price} imgUrl={item.imgUrl} tag={item.tag} id={item.id} description={item.description} />
                        ))
                    }
                </BestsellersSection.ItemsContainer>


            </BestsellersSection.Container>

        </BestsellersSection>

    )
}

export default Bestsellers;