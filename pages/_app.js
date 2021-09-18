// Adding Global CSS (Can Only Within This "_app.js")
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}