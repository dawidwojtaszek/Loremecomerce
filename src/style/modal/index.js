import styled from "styled-components";
import { CloseContainer, CloseBtn, Product, ProductTitle, ProductDescription, ProductPrice, ProductBtn } from "./info";

const ModalWrap = styled.div`
    position: fixed;
    background: rgba(0,0,0,0.8);
    width: 100%;
    height: 100%;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  
`
const ModalContainer = styled.div`
    width: 70%;
    height: 80%;
    z-index: 3;
    position: absolute;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    @media (max-width: 1200px){
        width: 90%;
    }
    @media (max-width: 900px){
        flex-direction: column-reverse;
        overflow-y: scroll;
        overflow: none;
        height: 95%;
    }
`
const ImgBox = styled.div`
    width: 45%;
    height: 100%;
    object-fit: cover;
    @media (max-width: 900px){
        width: 100%;
        height: auto;
    }
`
const Img = styled.img`
    width: 100%;
    height: 100%;
   
`
const Info = styled.div`
    width: 55%;
    overflow-y: scroll;
     @media (max-width: 900px){
        width: 100%;
        height: 600px;
        overflow-y: visible;
        display: flex;
        flex-direction: column;
    }
 
`

ModalWrap.Container = ModalContainer;
ModalWrap.ImgBox = ImgBox;
ModalWrap.Img = Img;
ModalWrap.Info = Info;
ModalWrap.CloseContainer = CloseContainer;
ModalWrap.CloseBtn = CloseBtn;
ModalWrap.Product = Product;
ModalWrap.ProductTitle = ProductTitle;
ModalWrap.ProductDescription = ProductDescription;
ModalWrap.ProductPrice = ProductPrice;
ModalWrap.ProductBtn = ProductBtn;
export default ModalWrap;