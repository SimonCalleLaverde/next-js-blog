import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

// "getStaticProps" which fetches necessary data for the post with "id"
// The post page is now using the getPostData function in getStaticProps to get the post data and return it as props
export async function getStaticProps({ params }) {
  // Fetches necessary data for the blog post using params.id
  const postData = getPostData(params.id)

  return {
    props: {
      postData
    }
  }
};

// "getStaticPaths" which returns an array of possible values for "id"
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
export default function Post({ postData }) {
  return (
    <Layout>
      { postData.title }
      <br/>
      { postData.id }
      <br/>
      { postData.date }
    </Layout>
  )
};
// export default function Post() {
//   return <Layout>...</Layout>
// };