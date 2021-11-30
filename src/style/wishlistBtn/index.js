import styled from "styled-components";
import { motion } from "framer-motion";

const Heart = styled(motion.div)`
    height: 50px;
    width: 50px;
    svg{
        font-size: 45px;
        cursor: pointer;
    }
`

export default Heart;