import React from "react";
import { Title } from '../style/elements/title';
import ProductCard from "./productCard";
import BestsellersSection from "../style/bestsellers";

const Bestsellers = () => {

    return (

        <BestsellersSection>
            <Title>Weekly Bestsellers</Title>
            <BestsellersSection.Container>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </BestsellersSection.Container>

        </BestsellersSection>

    )
}

export default Bestsellers;