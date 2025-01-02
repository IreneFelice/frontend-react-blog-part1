import {Link} from "react-router-dom";
import './BlogOverview.css';
import axios from 'axios';
import {useEffect, useState} from "react";


function BlogOverview() {
    const [posts, setPosts] = useState([]);
    const [error, toggleError] = useState(false);

    useEffect(() => {
        async function findPosts() {
            // RESET
            toggleError(false);

            try {
                const response = await axios.get('http://localhost:3000/posts');
                console.log(response);
                setPosts(response.data);
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
        }

        findPosts();
    }, []);

    return (
        <>
            <h1>Blog Overview</h1>
            {error === true ? (
                <>
                <p>Alles is in de soep gelopen.. Probeer het opnieuw</p>
                <p><Link to={'/'}>Home</Link></p>
                </>
            ):
            <ul>{Object.keys(posts).length > 0 && posts.map((post) => (
                <li key={post.id}>
                    <p><Link to={`/blog-post/${post.id}`}>{post.title}</Link> ({post.author})</p>
                    <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                </li>))}</ul>
            }
        </>
    )
}

export default BlogOverview;