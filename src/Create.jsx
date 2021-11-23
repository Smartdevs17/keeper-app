import React,{useState} from 'react'
import {useHistory} from "react-router-dom";

export default function Create() {

    const [title,setTitle] =  useState("");
    const [body,setBody] = useState("");
    const [author,setAuthor] = useState("shege");
    const [isPending,setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true)
        const blog = { title, body, author}
        fetch("http://localhost:3001/blogs",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then( () => {
            console.log("New Blog Added")
            setIsPending(false)
            // history.go(-1);
            history.push("/")
        })
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>

            <form action="#" onSubmit={handleSubmit} >
                <label htmlFor="title">Blog title:</label>
                <input 
                name="name"
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value) }
                 />
                <label htmlFor="content">Blog body:</label>
                <textarea
                    name="post"
                    value={body}
                    onChange={(e) => setBody(e.target.value) }
                    required>
                </textarea>
                 <select
                    name="author"
                   value={author}
                    onChange={(e) => setAuthor(e.target.value) }
                    required >
                     <option value="shege">shege</option>
                     <option value="smart" >smart</option>
                 </select>
                { !isPending && <button>Add Blog</button>} 
                { isPending && <button disable >Adding Blog...</button>} 
            </form>
        </div>
    )
}
