import styled from "styled-components";

export const ListBox = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    height: 100%;
`
export const ListTitle = styled.h6`
    font-size: 1.3rem;
    font-weight: 400;
    text-transform: uppercase;
`
export const ListLinks = styled.ul`
    list-style: none;
    padding:0;
`
export const ListElement = styled.li`
    padding:.5rem 0;
    
`
export const LogoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const Logo = styled.img`
    width: 100px;
`
export const Copyright = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.gray};
`