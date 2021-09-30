import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";

// "getStaticProps" fetches necessary data for the post with "id"
// The post page is now using the getPostData function in getStaticProps to get the post data and return it as props
export async function getStaticProps({ params }) {
  // Fetches necessary data for the blog post using "params.id"
  // Adding the "await" keyword (to use 'remark' library)
  const postData = await getPostData(params.id)

  return {
    props: {
      postData
    }
  }
};

// "getStaticPaths" returns an array of possible values for "id"
// Importing & using the "getAllPostIds" function inside getStaticPaths
export async function getStaticPaths() {
  // Returns a list of 'possible values' for id
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false
  }
};

// A React component to render the page
// Using 'remark' library: Rendering "contentHtml" (the 'content' part of the Blog Post) using "dangerouslySetInnerHTML"
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{ postData.title }</title>
      </Head>

      { postData.title }
      <br/>
      { postData.id }

      <br/>
      {/* Replacing { postData.date } with: */}
      <Date dateString={ postData.date }/>

      <br/>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}/>
    </Layout>
  )
};