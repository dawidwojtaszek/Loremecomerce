import React from "react";
import Hero from "../style/heroSection";
import { Button } from "../style/elements/button";
import heroImage from '../assets/images/herosection.jpg'
import { Link } from 'react-router-dom'
const HeroSection = () => {

    return (
        <Hero>
            <Hero.Container>
                <Hero.Box>
                    <Hero.Title>Summer Sale Lorem Ipsum</Hero.Title>
                    <Hero.Subtitle>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Hero.Subtitle>
                    <Link to="/shop" ><Button>Shop Now</Button></Link>
                </Hero.Box>
                <Hero.Image src={heroImage} />
            </Hero.Container>
        </Hero>
    );
}

export default HeroSection;