import styled from "styled-components";
import { motion } from "framer-motion";

export const InfoBox = styled.div`
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    @media(max-width:920px){
        align-items: center;
    }
`

export const InfoTitle = styled(motion.h2)`
    padding:1rem 0;
    font-size: 3rem;
    font-weight: bold;
    max-width: 300px;
     @media(max-width:920px){
        font-size: 1.8rem;
    }
`
export const InfoSubtitle = styled(motion.p)`
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 2rem;
     @media(max-width:920px){
        font-size: 1.3rem;
        font-weight: 400;
        max-width: 300px;
    }
    
`