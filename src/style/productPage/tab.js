import styled from "styled-components";


const Tab = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
`
const Nav = styled.div`
    display: flex;
    height: 50px;
`
const NavBtn = styled.button`
    cursor: pointer;
    color: ${({ isActive }) => isActive ? ('#000') : ('#707070')};
    text-transform: uppercase;
    font-size: 1.5rem;
    background: none;
    border: none;
    height: 50px;
    padding: 1rem;
    transition: color 200ms;
    &:hover{
        color:#000;
    }
`
const ContentBox = styled.div`
    margin-top: 1rem;
    min-height: 150px;
    max-width: 700px;
    padding:1rem;
`
const Content = styled.p`
    font-size: 1.4rem;
`
const List = styled.ul`
    list-style: none;
    padding: 0;
`
const ListElement = styled.li`
    font-size: 1.4rem;
`
const Bold = styled.span`
    font-size: 1.2rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.gray};
    text-transform: lowercase;
`

Tab.Nav = Nav;
Tab.NavBtn = NavBtn;
Tab.ContentBox = ContentBox;
Tab.Content = Content;
Tab.List = List;
Tab.ListElement = ListElement;
Tab.Bold = Bold;
export default Tab;