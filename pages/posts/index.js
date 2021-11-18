import Link from "next/link";
import PostCard from "../../components/PostCard/PostCard";

const Posts = ({posts}) => {

  const [posted, setPosted] = useState(posts);

  const onDelete = async (id) => {
    await fetch(`https://isdi-blog-posts-api.herokuapp.com/posts`,
      {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: {
          "Content-Type": "application/json",
        }
      });
    setPosted( posted.filter((post) => (post.id !== id)) );
  };


  return (
    <>
      <h1> Posts List </h1>
      <ul>
        {posted.map( post => (
          
          <Link key={post.id} href={`/posts/${post.id}`} passHref>

            <PostCard post={post} onDelete={onDelete}/>

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