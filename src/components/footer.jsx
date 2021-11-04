import React from "react";
import FooterSection from "../style/footer";
import Logo from '../assets/images/loremLogo.png'
const Footer = () => {

    return (

        <FooterSection>
            <FooterSection.Container>
                <FooterSection.LogoBox>
                    <FooterSection.Logo src={Logo} />
                    <FooterSection.Copyright>
                        © {new Date().getFullYear()}

                    </FooterSection.Copyright>
                    <FooterSection.Copyright>

                        All Rights Reserved
                    </FooterSection.Copyright>
                </FooterSection.LogoBox>
                <FooterSection.ListBox>
                    <FooterSection.ListTitle>About us</FooterSection.ListTitle>
                    <FooterSection.ListLinks>
                        <FooterSection.ListElement>About us</FooterSection.ListElement>
                        <FooterSection.ListElement>Contact</FooterSection.ListElement>
                        <FooterSection.ListElement>Store Location</FooterSection.ListElement>
                    </FooterSection.ListLinks>
                </FooterSection.ListBox>
                <FooterSection.ListBox>
                    <FooterSection.ListTitle>Follow Us</FooterSection.ListTitle>
                    <FooterSection.ListLinks>
                        <FooterSection.ListElement>Facebook</FooterSection.ListElement>
                        <FooterSection.ListElement>Instagram</FooterSection.ListElement>
                        <FooterSection.ListElement>Twitter</FooterSection.ListElement>
                        <FooterSection.ListElement>Youtube</FooterSection.ListElement>
                    </FooterSection.ListLinks>
                </FooterSection.ListBox>
                <FooterSection.ListBox>
                    <FooterSection.ListTitle>Subscribe</FooterSection.ListTitle>
                    <FooterSection.Description>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </FooterSection.Description>
                    <FooterSection.Input placeholder="Email" type="email" />
                    <FooterSection.SubscribeBtn>Subscribe</FooterSection.SubscribeBtn>
                </FooterSection.ListBox>

            </FooterSection.Container>
        </FooterSection >
    )
}

export default Footer;