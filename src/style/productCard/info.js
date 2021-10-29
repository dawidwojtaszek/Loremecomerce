import styled from "styled-components";

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    padding:1rem;
    z-index: 1;
`

export const Name = styled.h4`
    text-transform: uppercase;
    font-weight: 400;
    font-size: 1.5rem;
`

export const Category = styled.span`
    color:${({ theme }) => theme.colors.gray};
    text-transform: uppercase;
    font-weight: 300;
    font-size: 1.3rem;
`
export const PriceBox = styled.div`
    display: flex;
`
export const Price = styled.span`
    font-weight: 700;
    font-size: 1.35rem;
`
export const PriceTag = styled.div`
    font-size: 1.35rem;
    padding-right:.5rem;
    color: ${({ theme }) => theme.colors.gray};
`
