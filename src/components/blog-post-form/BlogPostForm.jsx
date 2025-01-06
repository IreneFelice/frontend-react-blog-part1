import {useForm} from 'react-hook-form';
import './BlogPostForm.css';
import calculateReadTime from "../../helpers/calculateReadTime.js";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import './BlogPostForm.css';
import InputComponent from "../input-component/InputComponent.jsx";

function BlogPostForm() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();

    async function handleFormSubmit(data) {
        try {
            const timestamp = new Date().toISOString();
            const readTime = calculateReadTime(data.content);

            const response = await axios.post('http://localhost:3000/posts',
                { ...data,
                    created: timestamp,
                    readTime,
                    comments: "0",
                    shares: "0"
                });
            console.log("blogpost toegevoegd");
            console.log(response);
            navigate(`/blog-post/${response.data.id}`);
        } catch (e) {
            console.error(e)
            console.error("Opslaan niet gelukt");
        }
    }


    return (
        <>
            <h2>Maak nieuwe post</h2>

            <form onSubmit={handleSubmit(handleFormSubmit)} className="formContainer">
                <InputComponent/>
                <label htmlFor="title-field">
                    Titel:
                    <input
                        type="text"
                        id="title-field"
                        {...register("title", {
                            required: {
                                value: true,
                                message: "Dit is een verplicht veld",
                            },
                        })}
                    />
                    {errors.title && <p className="formInputError">{errors.title.message}</p>}
                </label>
                <label htmlFor="subtitle-field">
                    Subtitel:
                    <input
                        type="text"
                        id="subtitle-field"
                        {...register("subtitle", {
                            required: {
                                value: true,
                                message: "Dit is een verplicht veld",
                            },
                        })}
                    />
                    {errors.subtitle && <p className="formInputError">{errors.subtitle.message}</p>}
                </label>
                <label htmlFor="author-field">
                    Auteur
                    <input
                        type="text"
                        id="author-field"
                        {...register("author", {
                            required: {
                                value: true,
                                message: "Dit is een verplicht veld",
                            },
                        })}
                    />
                    {errors.author && <p className="formInputError">{errors.author.message}</p>}
                </label>
                <label htmlFor="blog-content">
                    Bericht
                    <textarea
                        id="blog-content"
                        rows="4" cols="20"
                        {...register("content", {
                            required: {
                                value: true,
                                message: "Een blogpost moet minimaal 10 tekens lang zijn",
                            },
                                minLength: {
                                    value: 10,
                                    message: "Blogpost moet minimaal 10 karakters bevatten",
                                },

                            maxLength: {
                                value: 900,
                                message: "Bogpost mag niet meer dan 900 karakters bevatten",
                            }})}
                    ></textarea>
                    {errors.content && <p className="formInputError">{errors.content.message}</p>}
                </label>
                <button type="submit" >Toevoegen</button>
            </form>
        </>
    )
}

export default BlogPostForm;