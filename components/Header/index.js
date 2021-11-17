import Link from "next/link";

const Header = () => {

  
    return (
    <>
      <div> 
        <Link href="/"> Home </Link> 
        <Link href="/posts"> Posts </Link> 
        <Link href="/newpost"> CreatePost </Link> 
      </div>
    </>
    )
};

export default Header;