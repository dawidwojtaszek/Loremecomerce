import Hero from "../style/heroSection";
import { Button } from "../style/elements/button";
import heroImage from "../assets/images/herosection.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <Hero>
    <Hero.Container>
      <Hero.Box>
        <Hero.Title
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -200, opacity: 0 }}
          transition={{ type: "tween", duration: 0.8 }}
        >
          Summer Sale Lorem Ipsum
        </Hero.Title>
        <Hero.Subtitle
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Hero.Subtitle>
        <Link to="/shop">
          <Button
            animate={{ x: 0 }}
            initial={{ x: "-100vw" }}
            transition={{ type: "tween", delay: 0.8 }}
          >
            Shop Now
          </Button>
        </Link>
      </Hero.Box>
      <Hero.Image
        src={heroImage}
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: "100%" }}
        transition={{ delay: 0.5, duration: 0.5 }}
      />
    </Hero.Container>
  </Hero>
);

export default HeroSection;
