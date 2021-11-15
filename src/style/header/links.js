import styled from "styled-components";

export const Nav = styled.nav`
    height: 75px;
`

export const Links = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 75px;
`
export const LinkElement = styled.li`
    padding:0 1rem;
    font-size: 1.3rem;
    font-weight: 300;

   
    & a {
        color:#000;
        text-decoration: none;
    }
    /* &:hover{
        border-bottom: 1px solid #000;
    } */
`