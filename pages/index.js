// Imports
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';

// Home Page
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>
      </Head>

      <section className={ utilStyles.headingMd }>
        <p>
          Immediately regret falling into bathtub tuxedo cats always looking
          dapper yet chew foot when in doubt, wash. No, you can't close the door,
          i haven't decided whether or not i wanna go out. Climb into cupboard
          and lick the salt off rice cakes. Furball roll roll roll human is in
          bath tub, emergency! drowning! meooowww!.
        </p>

        <p>
          Following on{' '}
          <a href="https://nextjs.org/learn">the <strong>Next.js</strong> tutorial</a>.
        </p>


        {/*Temporary*/}
        <Link href="/posts/first-post">
          <a>
            <h3>
              First Post (Temporary)
            </h3>
          </a>
        </Link>


      </section>
    </Layout>
  )
}