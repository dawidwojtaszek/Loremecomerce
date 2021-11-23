import styled from "styled-components";

const Product = styled.div`
    max-width: ${({ theme }) => theme.size.container};
    margin:auto;
            -webkit-box-shadow: 7px 16px 25px 1px rgba(197, 197, 197, 1);
    -moz-box-shadow: 7px 16px 25px 1px rgba(197, 197, 197, 1);
    box-shadow: 7px 16px 25px 1px rgba(197, 197, 197, 1);
`
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    min-height: 600px;
    margin-top: 2rem;
    width: 100%;

    @media(max-width: 800px){
        flex-direction: column;
    }
`
const ImgBox = styled.div`
    padding: 1rem;
    height: 600px;
    width: 500px;
    @media(max-width: 800px){
        width:80%;
        height: auto;
        align-self: center;
    }

`
const Img = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    padding:1rem;
    width: 700px;
    @media(max-width:1200px){
        width: 500px;
    }
    @media(max-width:1000px){
        width: 400px;
    }
`
const Name = styled.h3`
    font-size: 1.8rem;
    text-transform: uppercase;
`
const Category = styled.span`
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.gray};
`
const Description = styled.p`
    font-size: 1.3rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding-right: 2rem;
`
const Price = styled.span`
    font-size: 2rem;
`

Product.Container = Container;
Product.ImgBox = ImgBox;
Product.Img = Img;
Product.InfoBox = InfoBox;
Product.Name = Name;
Product.Category = Category;
Product.Description = Description;
Product.Price = Price;
export default Product;