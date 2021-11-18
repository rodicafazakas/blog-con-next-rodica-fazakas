import React, {
   useEffect,
   useState
} from 'react';
import Header from '@/components/Header'
import Login from "../components/Login/Login";
import '../styles/global.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const user = {
    id: 1234,
    name: "Maya",
    avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2FFofurasenFoami%2Fabeja-maya%2F&psig=AOvVaw3lH7-u_Ys5lrUFIetoUNC0&ust=1637320542758000&source=images&cd=vfe&ved=2ahUKEwjlh_m75KH0AhXH3eAKHTDdCTUQjRx6BAgAEAk"
  };
  
  localStorage.setItem('user', 'user');

  const [isInLocalStorage, setIsInLocalStorage] = useState(localStorage.user);

  useEffect(() => {
    const retrievedUser = JSON.parse(localStorage.getItem('user')); 
    console.log('local', retrievedUser);
    return retrievedId;
  }, [user]);

  return (
    <>
    <Header />
    {isInLocalStorage && <Login />}
    <Component {...pageProps} />
    </>
  )
}
