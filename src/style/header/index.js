import styled from 'styled-components'
import { Container } from './container';
import { Logo } from './logo';
import { Links, LinkElement, Nav } from './links';
import { RightSection, RightElement, Counter, ElementIcon, Hamburger } from './rightSection';

const Header = styled.header`
    height: 100px;
    background-color: ${({ theme }) => theme.colors.header};
    color:${({ theme }) => theme.colors.font};
    -webkit-box-shadow: 0px 5px 31px -5px rgba(66, 68, 90, 0.1);
    -moz-box-shadow: 0px 5px 31px -5px rgba(66, 68, 90, 0.1);
    box-shadow: 0px 5px 31px -5px rgba(66, 68, 90, 0.1);  
 

`
Header.Container = Container;
Header.Logo = Logo;
Header.Nav = Nav;
Header.Links = Links;
Header.LinkElement = LinkElement;
Header.RightSection = RightSection;
Header.RightElement = RightElement;
Header.Counter = Counter;
Header.ElementIcon = ElementIcon;
Header.Hamburger = Hamburger;
export default Header;