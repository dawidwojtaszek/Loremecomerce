import React from "react";
import Hero from "../style/heroSection";
import { Button } from "../style/elements/button";
import heroImage from '../assets/images/herosection.jpg'
const HeroSection = () => {

    return (
        <Hero>
            <Hero.Container>
                <Hero.Box>
                    <Hero.Title>Summer Sale Lorem Ipsum</Hero.Title>
                    <Hero.Subtitle>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Hero.Subtitle>
                    <Button>Shop Now</Button>
                </Hero.Box>
                <Hero.Image src={heroImage} />
            </Hero.Container>
        </Hero>
    );
}

export default HeroSection;