import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import formatDate from "../../helpers/formatDate.js";
import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";


function BlogPostDetails() {
    const [singlePost, setSinglePost] = useState({});
    const [error, toggleError] = useState(false);
    const {id} = useParams();


    useEffect(() => {
        async function findSinglePost() {
            // RESET
            toggleError(false);
            try {
                const response = await axios.get(`http://localhost:3000/posts/${id}`);
                console.log(response);
                setSinglePost(response.data);
            } catch (e) {
                console.error(e)
                toggleError(true);
            }
        }

        findSinglePost();
    }, [id]);


    return (
        <>
            <h1>Postdetails</h1>

            {error ? (
                <p>Helaas pindakaas</p>
            ) : Object.keys(singlePost).length > 0 ? (
                    <article>
                        <h2>{singlePost.title}</h2>
                        <h3>{singlePost.subtitle}</h3>
                        <p>Geschreven door {singlePost.author} op {formatDate(singlePost.created)}</p>
                        <p>{singlePost.content}</p>
                        <sub>{singlePost.comments} reacties {singlePost.shares} keer gedeeld</sub>
                        <p><Link to="/blog-overview">Terug naar overzichtspagina</Link></p>
                    </article>
                ) : (
                    <p>Aan het laden...</p>
                )}
        </>
    );
}


export default BlogPostDetails;

