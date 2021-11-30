import styled from "styled-components";
import { motion } from "framer-motion";

export const Image = styled(motion.img)`
    height: 600px;
    @media(max-width:920px){
        height: 300px;
    }
    @media(max-width:620px){
       display: none;
    }
`