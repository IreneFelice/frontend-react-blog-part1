import {Link} from "react-router-dom";
import './BlogOverview.css';
import axios from 'axios';
import {useEffect, useState} from "react";
import Pagewrapper from "/src/components/pagewrapper/Pagewrapper.jsx";

function BlogOverview() {
    const [posts, setPosts] = useState([]);
    const [error, toggleError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        async function findPosts() {
            // RESET
            toggleError(false);

            try {
                const response = await axios.get('http://localhost:3000/posts', {
                    signal: controller.signal,
                });
                console.log(response);
                setPosts(response.data);

            } catch (e) {
                console.error(e);
                toggleError(true);
            }
        }

        findPosts();

        return function cleanup() {
            controller.abort();
        }
    }, []);

    async function handleDeleteClick(id) {
        // RESET
        toggleError(false);
        try {
            const response = await axios.delete(`http://localhost:3000/posts/${id}`);
            setPosts(posts.filter((post) => post.id !== id));
            console.log("succesvol verwijderd");
        } catch (e) {
            console.error("verwijderen niet gelukt");
            toggleError(true);
        }
    }

    return (
        <Pagewrapper>
            <section className="blog-overview-container">
                <h1>Blog Overview</h1>
                {error ? (
                    <>
                        <p>Alles is in de soep gelopen.. Probeer het opnieuw</p>
                        <p><Link to={'/'}>Home</Link></p>
                        <p><Link to={'/error-page'}>Wat moet ik doen?</Link></p>
                    </>
                ) : Object.keys(posts).length > 0 ? (
                    <ul>{posts.map((post) => (
                        <li key={post.id}>
                            <p><Link to={`/blog-post/${post.id}`}>{post.title}</Link> ({post.author})</p>
                            <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                            <button type="button" onClick={() => handleDeleteClick(post.id)}>X</button>
                        </li>))}</ul>
                ) : (
                    <p>Aan het laden...</p>
                )
                }
            </section>
        </Pagewrapper>
    );
}

export default BlogOverview;