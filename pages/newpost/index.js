import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Newpost = () => {
  const router = useRouter();
  const initialValues={
    title: "",
    body: "",
  }

  const [post, setPost] = useState(initialValues);

  const changeData = (event) => {
    setPost({
      ...post,
      [event.target.id]: event.target.value,
    });
  };

  const createPost = async (post) => {
    const response = await fetch("https://isdi-blog-posts-api.herokuapp.com/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newPost = await response.json(); 
    console.log(newPost);
  }  

  const onSubmit = (event) => {
    event.preventDefault();
    createPost(post);
    router.push("/");
  }


  return (
    <>
      <h1 className={styles.title}> Add a New Post </h1>
      <form className={styles.form} onSubmit = {onSubmit} autoComplete="off" noValidate> 
        <input
          className={styles.textInput} 
          type ="text" 
          placeholder = "Title"
          id="title" 
          value={post.title}
          onChange={changeData} 
        /> 
        <textarea 
          className={styles.textarea}
          placeholder="Tell me waht you think" 
          id="body" 
          calue={post.body}
          onChange={changeData} 
        /> 
        <button type="submit"> Create </button>
      </form>
      <h4>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h4>
    </>  
  )
};


export default Newpost;