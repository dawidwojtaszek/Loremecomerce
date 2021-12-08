import styled from "styled-components";

const BestsellersSection = styled.section`
    margin-top: 2rem;
`
const Container = styled.div`
    max-width: ${({ theme }) => theme.size.container};
    margin:1rem auto;
    
`
const ItemsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const Navigation = styled.div`
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    @media(max-width:650px){
        font-size: 0.8rem;
    }
`
const NavLink = styled.button`
    cursor: pointer;
    border: none;
    background: none;
    text-transform: uppercase;
    font-size: 1.5rem;
    &:hover{
        opacity: 0.8;
    }
    @media(max-width:650px){
        font-size: 0.8rem;
    }

`

BestsellersSection.Container = Container;
BestsellersSection.ItemsContainer = ItemsContainer;
BestsellersSection.Navigation = Navigation;
BestsellersSection.NavLink = NavLink;

export default BestsellersSection;