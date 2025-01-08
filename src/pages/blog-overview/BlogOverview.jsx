import {Link} from "react-router-dom";
import './BlogOverview.css';
import axios from 'axios';
import {useEffect, useState} from "react";
import Pagewrapper from "/src/components/pagewrapper/Pagewrapper.jsx";

function BlogOverview() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const controller = new AbortController(); // Voor request annulering
        async function findPosts () {
            setError(false); // Reset foutstatus bij elke fetch

            try {
                const response = await axios.get("http://localhost:3000/posts", {
                    signal: controller.signal,
                });
                console.log("Response ontvangen:", response);
                setPosts(response.data); // Data opslaan in state
            } catch (e) {
                if (e.name !== "CanceledError") {
                        console.error("Er is een fout opgetreden:", e);
                        setError(true);
                }
            }
        }

        findPosts();

        return function cleanup() {
            controller.abort();
        }
    }, []);

    async function handleDeleteClick(id) {
        // RESET
        setError(false);
        try {
            const response = await axios.delete(`http://localhost:3000/posts/${id}`);
            setPosts(posts.filter((post) => post.id !== id));
            console.log("succesvol verwijderd");
        } catch (e) {
            console.error("verwijderen niet gelukt");
            setError(true);
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