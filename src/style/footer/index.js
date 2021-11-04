import styled from "styled-components";
import { ListBox, ListTitle, ListLinks, ListElement, LogoBox, Logo, Copyright } from "./linksList";
import { Description, Input, SubscribeBtn } from "./newsletter";

const FooterSection = styled.footer`
    background: ${({ theme }) => theme.colors.light};
    margin-top: 3rem;
`
const Container = styled.div`
    max-width: ${({ theme }) => theme.size.container};
    margin:auto;
    display: flex;
    justify-content:space-between;
    padding: 1rem;
    
`

FooterSection.Container = Container;
FooterSection.ListBox = ListBox;
FooterSection.ListTitle = ListTitle;
FooterSection.ListLinks = ListLinks;
FooterSection.ListElement = ListElement;
FooterSection.LogoBox = LogoBox;
FooterSection.Logo = Logo;
FooterSection.Copyright = Copyright;
FooterSection.Description = Description;
FooterSection.Input = Input;
FooterSection.SubscribeBtn = SubscribeBtn;
export default FooterSection;