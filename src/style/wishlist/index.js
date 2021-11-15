import styled from "styled-components";

const WishlistWrap = styled.div`
    max-width: ${({ theme }) => theme.size.container};
    margin:auto;
    
`
const ListBox = styled.div`
    margin-top: 2rem;
    border: 1px solid #F4F3EF;
    border-radius: 10px;
    min-height: 600px;
    width: 100%;
    -webkit-box-shadow: 0px 5px 31px -5px rgba(66, 68, 90, 0.1);
    -moz-box-shadow: 0px 5px 31px -5px rgba(66, 68, 90, 0.1);
    box-shadow: 0px 5px 31px -5px rgba(66, 68, 90, 0.1);
    

`
const Title = styled.h3`
    font-size: 1.6rem;
    font-weight: 400;
    padding:2rem;
    color: ${({ theme }) => theme.colors.gray};
`
const EmptyList = styled.p`
    font-size: 1.4rem;
    text-align:center;
`
const List = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
`
const ClearListBtn = styled.button`
    border:none;
    background: none;
    margin: 1rem auto;
    width: 200px;
    padding: 1rem;
    font-size: 1.3rem;
    text-transform: uppercase;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
`

WishlistWrap.List = List;
WishlistWrap.EmptyList = EmptyList;
WishlistWrap.Title = Title;
WishlistWrap.ListBox = ListBox;
WishlistWrap.ClearListBtn = ClearListBtn;

export default WishlistWrap;