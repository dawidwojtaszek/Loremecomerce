import styled from "styled-components";

const Product = styled.div`
    max-width: ${({ theme }) => theme.size.container};
    margin:auto;
`
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    min-height: 600px;
    margin-top: 2rem;
    width: 100%;
    background-color: violet;
    
`
const ImgBox = styled.div`
    background-color: yellow;
    height: 600px;
`
const Img = styled.img`
    height: 100%;
`

const InfoBox = styled.div`
    background-color: green;
    height: 100px;
    width: 55%;
`


Product.Container = Container;
Product.ImgBox = ImgBox;
Product.Img = Img;
Product.InfoBox = InfoBox;

export default Product;