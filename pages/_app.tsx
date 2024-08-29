import type { AppProps } from 'next/app';
import Head from '../components/Head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

// pages/_app.tsx
// import { useEffect } from 'react';
// import type { AppProps } from 'next/app';

// function MyApp({ Component, pageProps }: AppProps) {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = '/web3-loader.js';
//     script.onload = () => {
//       if (window.web3) {
//         console.log('Web3 is available');
//       } else {
//         console.error('Web3 is not available');
//       }
//     };
//     document.body.appendChild(script);

//     // Cleanup script when component unmounts
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return <Component {...pageProps} />;
// }

// export default MyApp;
