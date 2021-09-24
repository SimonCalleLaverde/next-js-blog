// Imports
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.scss";
import Link from "next/link";

// Importing "GetSortedPostsData" & Using It In "getStaticProps"
import { getSortedPostsData } from "../lib/posts";

// Implementing Async "getStaticProps"
export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc
  const allPostsData = getSortedPostsData()

  // The 'value' of the "props" 'key' will be passed to the "Home" component
  return {
    props: {
      allPostsData//This is "allPostsData: allPostsData"
    }
  }
};

// // To use Server-side Rendering, you need to export getServerSideProps instead of getStaticProps from your page.
// // Starter Code Example
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     }
//   }
// };

// Home Page
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>
      </Head>

      {/* Self Introduction Section */}
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
        {/*<Link href="/posts/first-post">
          <a>
            <h3>
              First Post (Temporary)
            </h3>
          </a>
        </Link>*/}
      </section>




      {/* Blog Posts Section */}
      <section className={ `${utilStyles.headingMd} ${utilStyles.padding1px}` }>
        <h2 className={ utilStyles.headingLg }>
          Blog
        </h2>

        <ul className={ utilStyles.list }>
          {allPostsData.map(({ id, date, title }) => (
            <li className={ utilStyles.listItem } key={ id }>
              { title }
              <br/>
              { id }
              <br/>
              { date }
            </li>
          ))}
        </ul>
      </section>




    </Layout>
  )
};