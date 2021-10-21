import React from "react";
import Logo from '../assets/images/loremLogo.png';
import Header from "../style/header";
const HeaderComponent = () =>{
    return(
        <Header>
            <Header.Container>
                <Header.Logo src={Logo}/>
                <Header.Links>
                    <Header.LinkElement>Home</Header.LinkElement>
                    <Header.LinkElement>Shop</Header.LinkElement>
                    <Header.LinkElement>Blog</Header.LinkElement>
                    <Header.LinkElement>Contact</Header.LinkElement>
                </Header.Links>
                <div>another text</div>
            </Header.Container>
        </Header>
    )
}

export default HeaderComponent;