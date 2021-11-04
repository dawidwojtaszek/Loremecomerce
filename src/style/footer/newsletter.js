import styled from "styled-components";

export const Description = styled.p`

`
export const Input = styled.input`
    width:100%;
    padding:0.5rem;
    border-radius: 5px;
    border:none;
    margin-top: 1rem;
`
export const SubscribeBtn = styled.button`
    padding:0.4rem;
    border:none;
    border-radius: 10px;
    color:white;
    background: ${({ theme }) => theme.colors.secondary};
    margin-top: 1rem;
    cursor: pointer;
    font-size: 1rem;
    text-transform: uppercase;
    transition: opacity 0.100s;
    &:hover{
        opacity: 0.8;
    }
`