// import blogs from '/src/constants/data.json';
import {Link} from "react-router-dom";
import './BlogOverview.css';
import axios from 'axios';
import {useEffect, useState} from "react";


function BlogOverview() {
    const [posts, setPosts] = useState([]);



    useEffect(() => {
        async function findPosts() {
            try {
                const response = await axios.get('http://localhost:3000/posts');
                console.log(response);
                setPosts(response.data);
            } catch (e) {
                console.error(e);
            }
        }
        findPosts();
    }, []);

    return (
        <>
            <h1>Welkom hier</h1>
            <ul>{Object.keys(posts).length > 0 && posts.map((post) => (
                <li key={post.id}>
                    <p><Link to={`/blog-post/${post.id}`}>{post.title}</Link> ({post.author})</p>
                    <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                </li>))}</ul>

        </>
    )
}

// function BlogOverview() {
//     const totalPosts = blogs.length;
//     const blogList = blogs.map((blog) => (
//         <li key={blog.id}>
//             <p><Link to={`/blog-post/${blog.id}`}>{blog.title}</Link> ({blog.author})</p>
//             <p>{blog.comments} reactie - {blog.shares} keer gedeeld</p>
//         </li>
//     ))
//
//     return (
//         <div className="blog-overview-container">
//             <h2>Blog Overview</h2>
//             <p>Totale hoeveelheid blogs: {totalPosts}</p>
//             <ul>{blogList}</ul>
//         </div>
//     );
// }
//
export default BlogOverview;