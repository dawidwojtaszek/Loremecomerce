import styled from "styled-components";


const BlogBox = styled.div`
    max-width: ${({ theme }) => theme.size.container};
    margin:auto;
    padding:1rem;
`
const Title = styled.h3`
    margin-top: 2rem;
    font-size: 1.3rem;
    text-transform: uppercase;
`
const PostList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 2rem;
`

BlogBox.Title = Title;
BlogBox.PostList = PostList;

export default BlogBox;