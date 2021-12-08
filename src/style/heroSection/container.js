import styled from 'styled-components';

export const Container = styled.div`
    max-width: ${({ theme }) => theme.size.container};
    margin:auto;
    padding:1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    @media(max-width:920px){
        flex-direction: column-reverse;
    }
`