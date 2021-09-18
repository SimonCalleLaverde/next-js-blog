// Adding Global CSS (Can Only Within This "_app.js")
import '../styles/global.scss';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}