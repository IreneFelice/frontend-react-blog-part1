import {useForm} from 'react-hook-form';
import './BlogPostForm.css';
import calculateReadTime from "../../helpers/calculateReadTime.js";
import {useNavigate} from "react-router-dom";

// import {useState} from "react";

function BlogPostForm() {
    // const methods = useForm(); // Hier roep je useForm aan
    // console.log(methods); // Log het object in de console, om te zien welke functionaliteiten deze bevat.


// ZONDER USEFORM:
// const [formState, setFormState] =
//         useState({
//             title: "",
//             subTitle: "",
//         });
//
//     function handleFormChange (e){
//         console.log(e.target.value);
//         const changedFieldName = e.target.name;
//         setFormState({...formState, [changedFieldName]: e.target.value,});
//     }

    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();


    function handleFormSubmit(data) {
// setFormState({...formState, [changedFieldName]: e.target.value,});

        const dataList = {
            ...data,
            created: new Date().toLocaleString(),
            readTime: calculateReadTime(data.blogcontent),
            comments: 0,
            shares: 0,
            id: 12,
        };
        console.log(dataList);
        navigate("/blog-overview");
    }


    return (
        <>
            <h2>Maak nieuwe post</h2>

            <form onSubmit={handleSubmit(handleFormSubmit)} className="formContainer">
                <label htmlFor="title-field">
                    Titel:
                    <input
                        type="text"
                        id="title-field"
                        {...register("title", {
                            required: true,
                        })}
                    />
                </label>
                <label htmlFor="subtitle-field">
                    Subtitel:
                    <input
                        type="text"
                        id="subtitle-field"
                        {...register("subtitle", {
                            required: true,
                        })}
                    />
                </label>
                <label htmlFor="author-field">
                    Auteur
                    <input
                        type="text"
                        id="author-field"
                        {...register("author", {
                            required: true,
                        })}
                    />
                </label>
                <label htmlFor="blog-content">
                    Bericht
                    <textarea
                        id="blog-content"
                        rows="4" cols="20"
                        {...register("blogcontent", {
                            required: true,
                            minLength: 10,
                            maxLength: 9000,
                        })}
                    ></textarea>
                </label>
                <button type="submit">Toevoegen</button>
            </form>
        </>
    )
}

export default BlogPostForm;