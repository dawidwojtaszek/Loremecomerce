import styled from "styled-components";
import { Container } from './container';
import { InfoBox, InfoTitle, InfoSubtitle } from "./leftSide";
import { Image } from "./image";

const Hero = styled.div`
    background: #f4f3ef;
`

Hero.Container = Container;
Hero.Box = InfoBox;
Hero.Title = InfoTitle;
Hero.Subtitle = InfoSubtitle;
Hero.Image = Image;

export default Hero;