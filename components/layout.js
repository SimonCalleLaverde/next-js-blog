// Imports
import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';

// Constants
const name = 'Simón Calle Laverde';
export const siteTitle = 'Next.js Sample Website';

// Layout (Wrapper)
export default function Layout({ children, home }) {
  return (
    <div className={ styles.container }>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta
          name="og:title"
          content={ siteTitle }
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
      </Head>

      <header className={ styles.header }>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={ utilStyles.borderCircle }
              height={ 144 }
              width={ 144 }
              alt={ name }
            />

            <h1 className={ utilStyles.heading2Xl }>
              { name }
            </h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={ utilStyles.borderCircle }
                  height={ 108 }
                  width={ 108 }
                  alt={ name }
                />
              </a>
            </Link>

            <Link href="/">
              <a className={ utilStyles.colorInherit }>
                <h2 className={ utilStyles.headingLg }>
                  { name }
                </h2>
              </a>
            </Link>
          </>
        )}
      </header>

      <main>
        { children }{/*Similar To 'yield/content' In Liquid Code*/}
      </main>

      {!home && (
        <div className={ styles.backToHome }>
          <Link href="/">
            <a>
              ← Back to home
            </a>
          </Link>
        </div>
      )}
    </div>
  )
}