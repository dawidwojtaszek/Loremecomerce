import styled from "styled-components";

const Element = styled.div`
    width: 100%;
    height: 100px;
    background-color: #F6F5F2;
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    transition: bacground-color 300ms;
    &:hover{
        background-color: #FBFBFA;
    }
      @media(max-width:600px){
        height: 70px;
    }
`
const ImgBox = styled.div`
    width:20%;

    display: flex;
    align-items: center;
    
    @media(max-width:600px){
        display: none;
    }
`
const Img = styled.img`
    height: 100px;
    width: 85px;
    object-fit: cover;
      @media(max-width:500px){
        height: 70px;
    }
  
`
const Name = styled.span`
    font-size: 1.3rem;
    font-weight: 900;
    width: 30%;
    @media(max-width:600px){
        font-size: 1rem;
        width: 40%;
        padding: 0.5rem;
    }
`
const Category = styled.span`
    color: ${({ theme }) => theme.colors.gray};
    font-size: 1.3rem;
    font-weight: 300;
    width: 20%;
      @media(max-width:600px){
        font-size: 1rem;
        
    }
    
`
const Price = styled.span`
    font-size:1.3rem;
    width: 20%;
      @media(max-width:600px){
        font-size: 1rem;
        width: 10%;
    }
`
const CounterBox = styled.div`
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`
const CounterIcon = styled.div`
    padding:0.5rem;
`
const Counter = styled.span`
    font-size:1.3rem;
    padding: 0.5rem;
     @media(max-width:600px){
        font-size: 1rem;
    }
`
const RemoveBtn = styled.button`
    background: none;
    border:none;
    cursor: pointer;
    padding:1rem;
    font-size: 1.3rem;
    width: 10%;
    color: ${({ theme }) => theme.colors.gray};
    transition: color 200ms;
    &:hover{
        color:#000;
    }
      @media(max-width:600px){
        font-size: 1rem;
    }
    
 
`
Element.ImgBox = ImgBox;
Element.Img = Img;
Element.Name = Name;
Element.Category = Category;
Element.Price = Price;
Element.CounterBox = CounterBox;
Element.CounterIcon = CounterIcon;
Element.Counter = Counter;
Element.RemoveBtn = RemoveBtn;

export default Element;