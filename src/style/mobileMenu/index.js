import styled from "styled-components";


const Menu = styled.div`
    width: 55%;
    height: 100%;
    margin:auto;
    background-color: #fff;
    z-index: 2;
    right: 0;
    top:0;
    position: absolute;
    display: flex;
    flex-direction: column;
`
const NavBox = styled.div`
    display: flex;
    justify-content: end;
`
const CloseBtn = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding:2rem;
    font-size: 2rem;
`

const NavLinks = styled.ul`
    display: flex;
    flex-direction: column;
    a{
        color:#000;
        text-decoration: none;
    }
`

const LinkElement = styled.li`
    padding: 1rem;
    list-style: none;
`

const BottomSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-left: 40px;
    a{
        color:#000;
        text-decoration: none;
    }
`
const BottomElement = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:1rem 1rem 1rem 0;

`
const Counter = styled.div`
    color:#fff;
    background: #000;
    width: 23px;
    height: 23px;
    padding:.2rem;
    margin:.5rem;
    border-radius: 100%;
    font-size: 15px;
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ElementIcon = styled.div`
    padding:.5rem;
`

Menu.NavBox = NavBox;
Menu.CloseBtn = CloseBtn;
Menu.NavLinks = NavLinks;
Menu.LinkElement = LinkElement;
Menu.BottomSection = BottomSection;
Menu.BottomElement = BottomElement;
Menu.Counter = Counter;
Menu.ElementIcon = ElementIcon;

export default Menu;