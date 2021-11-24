import styled from "styled-components";

const RelatedSection = styled.div`
    max-width: ${({ theme }) => theme.size.container};
    margin:auto;

`
const ProductsBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

RelatedSection.ProductsBox = ProductsBox;

export default RelatedSection;