import Link from "next/link";
import { useState } from "react";

const Newpost = () => {

  const [post, setPost] = useState({});

  const changeData = (event) => {
    setPost({
      ...post,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("https://isdi-blog-posts-api.herokuapp.com/posts", {
      method: "POST",
      body: JSON.stringify({post}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const post = await response.json(); 
  }

  return (
    <><form onSubmit = {onSubmit} autoComplete="off" noValidate> 
        <input type ="text" id="title" onChange={changeData} /> 
        <input type="text" id="body" onChange={changeData} /> 
        <button type="submit"> Create </button>
      </form>
      <h3>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h3>
    </>  
  )
};


export default Newpost;