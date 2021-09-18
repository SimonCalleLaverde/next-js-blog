import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

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
          This is a sample website - built following on{' '}
          <a href="https://nextjs.org/learn">the Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}