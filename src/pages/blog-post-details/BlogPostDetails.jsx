import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import formatDate from "../../helpers/formatDate.js";
import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Pagewrapper from "../../components/pagewrapper/Pagewrapper.jsx";

function BlogPostDetails() {
    const [singlePost, setSinglePost] = useState({});
    const [error, toggleError] = useState(false);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const controller = new AbortController();

        async function findSinglePost() {
            // RESET
            toggleError(false);
            try {
                const response = await axios.get(`http://localhost:3000/posts/${id}`, {
                    signal: controller.signal,
                });
                console.log(response);
                setSinglePost(response.data);
            } catch (e) {
                if (e.name !== "CanceledError") {
                    console.error(e);
                    toggleError(true);
                }
            }
        }

        findSinglePost();

        return function cleanup() {
            controller.abort();
        }
    }, [id]);

    async function handleDelete() {
        // RESET
        toggleError(false);
        try {
            const response = await axios.delete(`http://localhost:3000/posts/${id}`);
            console.log("succesvol verwijderd");
            setSinglePost(response.data);
            navigate("/blog-overview");
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }


    return (
        <Pagewrapper>
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
                    <button type="button" onClick={handleDelete}>Post verwijderen</button>
                </article>
            ) : (
                <p>Aan het laden...</p>
            )}
        </Pagewrapper>
    );
}


export default BlogPostDetails;

