const PostCard = ({post, onDelete}) => {

  return (
    <li> <p> {post.title} </p> 
         <span> {post.body} </span> 
         <button onClick={onDelete}> Delete </button>
    </li>
  )
}

export default PostCard;