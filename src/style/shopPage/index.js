import styled from "styled-components";


const Shop = styled.div`
    max-width: ${({ theme }) => theme.size.container};
    margin: auto;

`
const Container = styled.div`
    display: flex;
    width: 100%;
    min-height: 600px;
    margin-top: 2rem;
    @media(max-width:920px){
        flex-direction: column;
    }
`
const Navigation = styled.div`
    background: #FAF9F7;
    margin-top: 2rem;
    padding: 1rem;
    height: 500px;
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
        @media(max-width:920px){
        width: 100%;
        height: 100px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: .5rem;
    }
`
const NavigationTitle = styled.span`
    font-size: 1.7rem;
    text-transform: uppercase;
    font-weight: 300;
    padding: 1rem;
       @media(max-width:920px){
        display: none;

    }

`
const NavigationBtn = styled.button`
    background: none;
    border:none;
    cursor: pointer;
    font-size: 1.3rem;
    padding:1rem;
    text-transform:uppercase;
    @media(max-width:920px){
        font-size:1rem;
        padding: 0.5rem;

    }
    @media(max-width:650px){
        font-size: .8rem;
    }
`
const ProductList = styled.div`
    width: 75%;
    display: flex;
    justify-content:space-around;
    flex-wrap: wrap;
        @media(max-width:920px){
        width: 100%;
    }
`
Shop.Container = Container;
Shop.Navigation = Navigation;
Shop.NavigationBtn = NavigationBtn;
Shop.NavigationTitle = NavigationTitle;
Shop.ProductList = ProductList;

export default Shop;