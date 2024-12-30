import {useParams} from "react-router-dom";
import blogs from '/src/constants/data.json';
import {Link} from "react-router-dom";
import formatDate from "../../helpers/formatDate.js";

function BlogPostDetails() {
    const {id} = useParams();
    // kijk naar id-key in url, aangemaakt in Route

    const blog = blogs.find((blog) => blog.id === parseInt(id));
    // vind in blogs de (hele) entry waarvan blog.id (= blogs[entry-index].id) overeenkomt met id-key uit de url.
    // vertaal de waarde van id-key naar heel getal met parseInt
    // nu bevat de variable 'blog' alle informatie van de entry die hoort bij dit id

    // const dateString = blog.created;



    return (
        <article>
            <h2>{blog.title}</h2>
            <h3>{blog.subtitle}</h3>
            <p>Geschreven door {blog.author} op {formatDate(blog.created)}</p>
            <p>{blog.content}</p>
            <sub>{blog.comments} reacties {blog.shares} keer gedeeld</sub>
            <p><Link to="/blog-overview">Terug naar overzichtspagina</Link></p>
        </article>
    )
}

export default BlogPostDetails;