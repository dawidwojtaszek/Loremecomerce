import React from "react";
import HeroSection from '../components/heroSection';
import BenefitsSection from '../components/benefitsSection';
import Bestsellers from "../components/bestsellers";
import SHOP_DATA from "../assets/data/shopData";


const HomePage = () => {

    const bestsellers = SHOP_DATA.filter(item => (item.bestseller === true));

    return (

        <>
            <HeroSection />
            <BenefitsSection />
            <Bestsellers bestsellerList={bestsellers} />

        </>
    );
}

export default HomePage;