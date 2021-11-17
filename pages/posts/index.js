import Link from "next/link";

const Posts = ({posts}) => {
  return (
    <>
      <h1> Posts List </h1>
      <ul>
        {posts.map( post => (
          <Link key={post.id} href={`/posts/${post.id}`} passHref>
            <li> <p> {post.title} </p> 
                 <span> {post.body} </span> 
            </li>
          </Link>
          )
        )}        
      </ul>
    </>
  )
};

export const getServerSideProps = async () => {
  const response = await fetch("https://isdi-blog-posts-api.herokuapp.com/posts");
  const postsAPI =  await response.json();
  return {
    props: {
      posts: postsAPI,
    }
  }
}

export default Posts;