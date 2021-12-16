import HeroSection from "../components/heroSection";
import BenefitsSection from "../components/benefitsSection";
import Bestsellers from "../components/bestsellers";
import SHOP_DATA from "../assets/data/shopData";
import { Helmet } from "react-helmet";

const HomePage = () => {
  const bestsellers = SHOP_DATA.filter((item) => item.bestseller);

  return (
    <>
      <Helmet>
        <title>Home | Lorem Ecomerce</title>
      </Helmet>
      <HeroSection />
      <BenefitsSection />
      <Bestsellers bestsellerList={bestsellers} />
    </>
  );
};

export default HomePage;
