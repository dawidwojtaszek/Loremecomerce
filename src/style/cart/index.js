import styled from "styled-components";

const CartWrap = styled.div`
    position: fixed;
    background: rgba(0,0,0,0.8);
    width: 100%;
    height: 100vh;
    z-index: 2;
`
const CartBox = styled.div`
    background: #fff;
    width: 520px;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    top:0;
    right: 0;
`
const CloseBtnBox = styled.div`
    padding: 0 1rem;
    display: flex;
    justify-content: start;
`
const CloseBtn = styled.button`
    cursor: pointer;
    border:none;
    background: none;
    font-size: 1.5rem;
    padding:1rem;
    float: left;
`
const EmptyCart = styled.span`
    font-size: 1.5rem;
    text-transform: uppercase;
    text-align:center;
`
const ProductsBox = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    height: 80%;
    padding:1rem;
    overflow-y: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {
  display: none;
}
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
`

CartWrap.CartBox = CartBox;
CartWrap.CloseBtnBox = CloseBtnBox;
CartWrap.CloseBtn = CloseBtn;
CartWrap.EmptyCart = EmptyCart;
CartWrap.ProductsBox = ProductsBox;
CartWrap.CheckoutBtn = CheckoutBtn;
export default CartWrap;
