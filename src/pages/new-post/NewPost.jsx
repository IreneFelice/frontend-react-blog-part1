import BlogPostForm from "../../components/blog-post-form/BlogPostForm.jsx";
import Pagewrapper from "../../components/pagewrapper/Pagewrapper.jsx";

function NewPost() {

    return (
        <Pagewrapper>
            <BlogPostForm/>
        </Pagewrapper>
    );
}

export default NewPost;