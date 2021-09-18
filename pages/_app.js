// Imports
import '../styles/global.scss';

// Adding Global CSS (Can Only Within This "_app.js")
export default function App({ Component, pageProps }) {
  return <Component {...pageProps}/>
}