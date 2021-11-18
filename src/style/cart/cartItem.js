import styled from "styled-components"


const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:1rem;
    margin-bottom: .5rem;
    background-color: #F6F5F2;
    & a{
        text-decoration: none;
        color: #000;
    }
    &:hover{
        background-color: #FBFBFA;
    }
`
const Name = styled.span`
    font-size: 1.2rem;
    text-transform: uppercase;
    width: 250px;
   
`

const Price = styled.span`
    font: 1.2rem;
    width: 50px;
    text-align:center;
`
const QuantityBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:80px;
`
const Quantity = styled.span`
    font: 1.2rem;
    font-weight: 900;
`
const IconBox = styled.div`
    padding:.5rem;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 25px;
`


Item.Name = Name;
Item.Price = Price;
Item.QuantityBox = QuantityBox;
Item.Quantity = Quantity;
Item.IconBox = IconBox;

export default Item;
