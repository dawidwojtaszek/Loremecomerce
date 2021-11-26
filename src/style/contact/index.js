import styled from "styled-components";

const Contact = styled.div`
    max-width: ${({ theme }) => theme.size.container};
    min-height: 600px;
    margin:auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`
const Title = styled.h3`
    font-size: 1.3rem;
    text-transform: uppercase;
    margin-top: 2rem;

`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 360px;
    padding:1rem;
`
const Input = styled.input`
    margin:.5rem 0;
    padding:.5rem;
    border-radius:7px;
    border: 2px solid ${({ theme }) => theme.colors.gray};

`
const Message = styled.textarea`
    border: 2px solid ${({ theme }) => theme.colors.gray};
    border-radius: 7px;
    margin:.5rem 0;
    padding:.5rem;
    min-height: 200px;
    font-family: 'Jost', sans-serif;
`
const Label = styled.label`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.gray};
    text-transform: uppercase;
    margin-top: .7rem;
`
const Button = styled.button`
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

Contact.Input = Input;
Contact.Message = Message;
Contact.Title = Title;
Contact.Form = Form;
Contact.Label = Label;
Contact.Button = Button;

export default Contact;