import Head from "next/head";
import Footer from "../components/Footer";
import PostCard from "../components/PostCard";
import { client } from "../lib/apollo";
import { gql } from "@apollo/client";
import PreviewPanel from "../components/PreviewPanel";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <Head>
        <title>Get Fisio | Kesehatan Berawal dari pengetahuan</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>

      <main>
        <div className="blog-banner w-full bg-[#F6F7FB]">
          <div
            className="blog-banner__wrapper min-h-[600px] flex justify-center items-center
           relative md:min-h-[300px]"
          >
            <div>
              <h1 className="blog-banner__title text-[#77C6A6] text-[60px]">
                Get Fisio Blogs
              </h1>
            </div>
          </div>
        </div>
        <div className="preview-panel w-full">
          <PreviewPanel></PreviewPanel>
        </div>

        <div className="flex flex-row flex-wrap w-2/3 py-[50px]">
          {posts.map((post) => {
            return <PostCard key={post.uri} post={post}></PostCard>;
          })}
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
}

export async function getStaticProps() {
  const GET_POSTS = gql`
    query GetAllPosts {
      posts {
        nodes {
          title
          content
          uri
          date
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_POSTS,
  });
  const posts = response?.data?.posts?.nodes;
  return {
    props: {
      posts,
    },
  };
}
