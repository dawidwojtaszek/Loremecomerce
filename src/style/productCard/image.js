import styled from "styled-components";
import { motion } from "framer-motion";

export const ImageBox = styled.div`
    position: relative;
    width: 100%;
    height: 330px;
    display: block;
    overflow: hidden;
`
export const Image = styled(motion.img)`
    position: absolute;
    width: 100%;

`
export const Tag = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    top: 10px;
    left: 10px;
    height: 30px;
    width: 60px;
    color: white;
    font-size: 1rem;
    text-transform: uppercase;
    background: ${({ bg }) => bg ? (bg) : ('#4894A6')};
`
export const WishlistBtn = styled(motion.button)`
    position: absolute;
    z-index: 1;
    top:10px;
    right: 10px;
    font-size:2.3rem;
    border: none;
    cursor: pointer;
    background: none;
    color:${({ color }) => color};
    opacity: ${({ opacity }) => opacity};
    transition: opacity 0.200s;


`
export const QuickView = styled(motion.button)`
    position: absolute;
    z-index: 1;
    top:55px;
    right: 10px;
    font-size: 2.3rem;
    cursor: pointer;
    background: none;
    color: ${({ theme }) => theme.colors.secondary};
    border: none;
    transition: color 0.200s;
    &:hover{
        color: #fff;
    }
`