import blogs from '/src/constants/data.json';
import {Link} from "react-router-dom";
import './BlogOverview.css';

function BlogOverview() {
    const totalPosts = blogs.length;
    const blogList = blogs.map((blog) => (
        <li key={blog.id}>
            <p><Link to={`/blog-post/${blog.id}`}>{blog.title}</Link> ({blog.author})</p>
            <p>{blog.comments} reactie - {blog.shares} keer gedeeld</p>
        </li>
    ))

    return (
        <div className="blog-overview-container">
            <h2>Blog Overview</h2>
            <p>Totale hoeveelheid blogs: {totalPosts}</p>
            <ul>{blogList}</ul>
        </div>
    );
}

export default BlogOverview;