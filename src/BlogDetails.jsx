import React from 'react'
import {useParams,useHistory} from "react-router-dom";
import useFetch from "./usefetch";

function BlogDetails() {

    const {id} = useParams();
        const {data: blog,isPending,error} = useFetch("http://localhost:3001/blogs/" + id);
        const history = useHistory();
        const handleDelete = () => {
            fetch("http://localhost:3001/blogs/" + blog.id , {
                method: "DELETE"
            })
            .then(() => {
                console.log("This Blog has just being deleted")
                history.push("/")
            })
        }

    return (
        <div className="blog-details" >
            {isPending && <div>Loading...</div> }
            {error && <div> {error} </div> }
            {blog && (
                <article>
                    <h2> {blog.title} </h2>
                    <p>Written by {blog.author} </p>
                    <div>
                        {blog.body}
                    </div>
                    <button onClick={handleDelete} >delete</button>
                </article>
            ) }
        </div>
    )
}

export default BlogDetails