import React from "react";
import { Title } from '../style/elements/title';
import ProductCard from "./productCard";
import BestsellersSection from "../style/bestsellers";
import { useDispatch } from "react-redux";
import { setBestsellers } from "../redux/items";

const Bestsellers = ({ bestsellerList }) => {

    const dispatch = useDispatch();
    dispatch(setBestsellers(bestsellerList))
    return (

        <BestsellersSection>
            <Title>Weekly Bestsellers</Title>
            <BestsellersSection.Container>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </BestsellersSection.Container>

        </BestsellersSection>

    )
}

export default Bestsellers;