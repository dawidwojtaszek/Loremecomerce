import styled from "styled-components";

export const Image = styled.img`
    height: 600px;
    @media(max-width:920px){
        height: 300px;
    }
    @media(max-width:620px){
       display: none;
    }
`