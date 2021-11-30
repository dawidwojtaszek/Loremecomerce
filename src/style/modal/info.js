import styled from "styled-components";
import { motion } from "framer-motion";
export const CloseContainer = styled.div`
    display: flex;
    justify-content: end;
    height: 50px;
    width: 100%;
    z-index: 5;
`
export const CloseBtn = styled.button`
    background: none;
    position: fixed;
    cursor: pointer;
    border:none;
    font-size: 2rem;
    padding: 2rem;
      @media (max-width: 1200px){
        padding:1rem;

    }
    @media (max-width: 900px){
        position: relative;
    }

`
export const Product = styled.div`
    width: 90%;
    padding:2rem;
    margin-top: 4.5rem;
    display: flex;
    flex-direction: column;
    @media (max-width: 900px){
        margin-top: 1rem;
    }

`

export const ProductTitle = styled.h4`
    text-transform:uppercase;
    font-size: 2.3rem;
    font-weight: 900;
`
export const ProductCategory = styled.span`
    font-size: 1.6rem;
    font-weight: 300;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.gray};
    
`

export const ProductDescription = styled.p`
    margin-top: 2rem;
    font-size: 1.2rem;
`
export const ProductPrice = styled.span`
    margin-top: 2rem;
    font-size: 2.2rem;
    
`
export const BtnBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    margin-top: 2rem;
`
export const ProductBtn = styled(motion.button)`
    background: ${({ theme }) => theme.colors.primary};
    border: none;
    color:white;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 1.3rem;
    width: 230px;
    height: 50px;
    &:hover{
        opacity:0.85;
    }
`
