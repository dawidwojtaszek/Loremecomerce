import styled from "styled-components";
import { motion } from "framer-motion";

const Post = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    height: 300px;
    margin-bottom: 1rem;
    /* background-color: ${({ theme }) => theme.colors.light}; */
    @media(max-width:900px){
        flex-direction: column;
        height: 600px;
    }
`
const ImageBox = styled.div`
    height: 300px;
    width: 600px;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    overflow: hidden;
    @media(max-width:900px){
        width: 100%;
        justify-content: center;
    }
`
const Img = styled(motion.img)`
    height: 300px;
    width: auto;

 
`

const Info = styled.div`
    width: 60%;
    height: 300px;
    padding:1.5rem;
    @media(max-width:900px){
        width: 100%;
    }
`
const Title = styled.h4`
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
`
const BodyBox = styled.div`
    
`
const Body = styled.p`
    font-size: 1rem;
`

Post.ImageBox = ImageBox;
Post.Img = Img;
Post.Info = Info;
Post.Title = Title;
Post.BodyBox = BodyBox;
Post.Body = Body;


export default Post;