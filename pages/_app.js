import React, {
   useEffect,
   useState
} from 'react';
import Header from '@/components/Header'
import Login from "../components/Login/Login";
import '../styles/global.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [isInLocalStorage, setIsInLocalStorage] = useState(false);

  useEffect(() => {
    const retrievedUser = JSON.parse(localStorage.getItem('user')); 
    setIsInLocalStorage(true);
  }, []);

  return (
    <>
      <Header />
      {isInLocalStorage ? <Component {...pageProps} /> : <Login />}
    </>
  )
}
