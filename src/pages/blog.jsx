import React from "react";
import { useEffect } from "react";
import { setPosts } from "../redux/blog";
import { useDispatch, useSelector } from "react-redux";
import BlogBox from "../style/blog";
import BlogPost from "../components/blogPost";
import { Helmet } from "react-helmet";

const BlogPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => dispatch(setPosts(json.slice(0, 15))));
    }, []);

    const blogPosts = useSelector(state => state.blog.blogPosts);


    return (
        <BlogBox>
            <Helmet>
                <title>Blog | Lorem Ecomerce</title>
            </Helmet>
            <BlogBox.Title>Recent Blog Post:</BlogBox.Title>
            <BlogBox.PostList>
                {blogPosts.map(post => (<BlogPost key={post.id} title={post.title} body={post.body} id={post.id}></BlogPost>))}
            </BlogBox.PostList>
        </BlogBox>
    )
}

export default BlogPage;