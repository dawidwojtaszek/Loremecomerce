import styled from 'styled-components'

export const Container = styled.div`
    max-width: ${({theme})=> theme.size.container};
    margin:auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
`