import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const BoxIcon = styled.div`
    color:${({ theme }) => theme.colors.secondary};
    font-size: 3rem;
    padding:0.5rem;
`
export const BoxInfo = styled.div`
    display: flex;
    flex-direction: column;
`
export const BoxTitle = styled.h3`
    font-size:1.5rem;
`
export const BoxSubtitle = styled.p`
    color: #707070;
    font-size: 1.3rem;
`
