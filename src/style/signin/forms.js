import styled from "styled-components";


export const FormsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
    padding:1.5rem;
    @media(max-width: 900px){
        flex-direction: column;
    }
`
export const Title = styled.h3`
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: 900;
    @media(max-width: 900px){
        font-size: 1.1rem;
    }
`
export const SubTitle = styled.span`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.gray};
    text-transform: uppercase;
`
export const Box = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
     @media(max-width: 900px){
        width:100%;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 360px;
    padding:1rem;
    margin-bottom: 3rem;
`

export const Input = styled.input`
    margin:.5rem 0;
    padding:.5rem;
    border-radius:7px;
    border: 2px solid ${({ theme }) => theme.colors.gray};

`
export const Label = styled.label`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.gray};
    text-transform: uppercase;
    margin-top: .7rem;
`
export const BtnBox = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Button = styled.button`
   width: 100%;
   margin-top: 1rem;
   text-transform: uppercase;
   font-weight: bold;
   border-radius: 5px;
   padding:.7rem;
   background: ${({ bg }) => bg};
   color:white;
   border:none;
   cursor: pointer;
   &:hover{
      opacity: 0.85;
   }
`