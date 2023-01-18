import Head from "next/head";
import PostCard from "../components/PostCard";
import { client } from "../lib/apollo";
import { gql } from "@apollo/client";
import PreviewPanel from "../components/PreviewPanel";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Get Fisio | Kesehatan Berawal dari pengetahuan</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>

      <main>
        <div
          className="blog-banner w-full bg-[#F6F7FB] mt-[30px]"
          style={{
            backgroundImage: "url(/images/banner_index.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="blog-banner__wrapper min-h-[300px] flex justify-center items-center
           relative md:min-h-[600px]"
          >
            <div>
              <h1 className="blog-banner__title text-white text-[60px] font-bold ">
                Blogs
              </h1>
            </div>
          </div>
        </div>
        <div className="preview-panel w-full">
          <PreviewPanel></PreviewPanel>
        </div>

        <div className="w-full flex flex-wrap gap-[20px] p-[20px] md:p-[40px] lg:p-[100px]">
          {posts.map((post) => {
            return (
              <PostCard
                key={post.uri}
                title={post.title}
                category={post.categories.nodes}
                thumbnail={post.featuredImage.node.sourceUrl}
                date={post.date}
                link={post.uri}
              ></PostCard>
            );
          })}
        </div>
      </main>
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
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes {
              name
            }
          }
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
    revalidate: 60,
  };
}
