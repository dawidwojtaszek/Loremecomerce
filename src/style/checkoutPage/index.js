import styled from "styled-components";


const Checkout = styled.div`
    max-width: ${({ theme }) => theme.size.container};
    margin: auto;
`
const Box = styled.div`
    margin-top: 2rem;
    border: 1px solid #F4F3EF;
    border-radius: 10px;
    min-height: 600px;
    width: 100%;
    -webkit-box-shadow: 0px 5px 31px -5px rgba(66, 68, 90, 0.1);
    -moz-box-shadow: 0px 5px 31px -5px rgba(66, 68, 90, 0.1);
    box-shadow: 0px 5px 31px -5px rgba(66, 68, 90, 0.1);
`
const Title = styled.h3`
    font-size: 1.6rem;
    font-weight: 400;
    padding:2rem;
    color: ${({ theme }) => theme.colors.gray};
`
const EmptyCart = styled.p`
    font-size: 1.5rem;
    text-align:center;
`
const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
 
    padding: 1rem;
`
const CheckoutBtn = styled.button`
    width:400px;
    margin:auto;
    background:${({ theme }) => theme.colors.secondary};
    color:white;
    padding:1rem;
    margin:auto;
    cursor: pointer;
    border:none;
    font-size: 1.2rem;
    font-weight: 900;
    text-transform: uppercase;
    transition: background-color 200ms;
    &:hover{
        background-color: #2B8498;
    }
`

Checkout.Box = Box;
Checkout.Title = Title;
Checkout.EmptyCart = EmptyCart;
Checkout.ButtonBox = ButtonBox;
Checkout.CheckoutBtn = CheckoutBtn;

export default Checkout;