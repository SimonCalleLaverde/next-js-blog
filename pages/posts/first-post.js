// export default function FirstPost() {
//   return <h1>First Post Wi Wi</h1>
// }

import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post Yei</title>
      </Head>

      <h1>
        First Post
      </h1>

      {/*<Link href="/">
        <a>
          <h2>
            Back to home
          </h2>
        </a>
      </Link>*/}
    </Layout>
  )
}