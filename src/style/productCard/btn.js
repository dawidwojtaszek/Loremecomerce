import styled from "styled-components";
import { motion } from "framer-motion";

export const Btn = styled(motion.button)`
    background: ${({ theme }) => theme.colors.primary};
    border: none;
    color:white;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 1.3rem;
    width: 100%;
    height: 50px;
    &:hover{
        opacity:0.85;
    }
`