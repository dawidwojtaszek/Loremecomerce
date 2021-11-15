import React from "react";
import HeroSection from '../components/heroSection';
import BenefitsSection from '../components/benefitsSection';
import Bestsellers from "../components/bestsellers";
import { useDispatch } from "react-redux";
import SHOP_DATA from "../assets/data/shopData";
import { setItemsList } from "../redux/items";

const HomePage = () => {

    const dispatch = useDispatch();
    dispatch(setItemsList(SHOP_DATA));
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