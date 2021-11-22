import styled from "styled-components";

const Product = styled.div`
    max-width: ${({ theme }) => theme.size.container};
    margin:auto;
`
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100px;
    width: 100%;
`
const ImgBox = styled.div`
    background-color: yellow;
    height: 100px;
`
const Img = styled.img`

`

const InfoBox = styled.div`
    background-color: green;
    height: 100px;
`

Product.Container = Container;
Product.ImgBox = ImgBox;
Product.Img = Img;
Product.InfoBox = InfoBox;

export default Product;