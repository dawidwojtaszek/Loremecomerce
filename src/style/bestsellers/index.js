import styled from "styled-components";

const BestsellersSection = styled.section`
    margin-top: 2rem;
`
const Container = styled.div`
    max-width: ${({ theme }) => theme.size.container};
    margin:1rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
BestsellersSection.Container = Container;

export default BestsellersSection;