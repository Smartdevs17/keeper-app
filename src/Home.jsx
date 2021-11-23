import React from 'react'
import BlogList from './Blog_list'
import useFetch from "./usefetch";



function Home() {
  const {data: blogs,error,isPending} = useFetch("http://localhost:3001/blogs");
    return (
       <div className="home">
           {error && <div> {error} </div> }
           { isPending && <div>Loading...</div> }
         { blogs && <BlogList blogs={blogs} title="All Blogs" />} 
        {/* <BlogList blogs={blogs.filter((blog) => blog.author === "Smart Developer")} title="Smart Developer Blogs"/> */}
       </div>
    )
}

export default Home
