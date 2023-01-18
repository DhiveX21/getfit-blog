import Head from "next/head";
import { client } from "../lib/apollo";
import { gql } from "@apollo/client";
import parse from "html-react-parser";
import PreviewPanel from "../components/PreviewPanel";
import OtherArticle from "../components/OtherArticle";
import RegisterCard from "../components/RegisterCard";
import PostCard from "../components/PostCard";
import Link from "next/link";

export default function SlugPage({ post, allPosts }) {
  const seoFullHead = parse(post.seo.fullHead);
  return (
    <div>
      <Head>
        <title>{post.seo.title}</title>
        <meta name="description" content={`${post.seo.metaDesc}`}></meta>
        {seoFullHead}
      </Head>

      <main>
        <div
          className="blog-banner w-full bg-[#F6F7FB] mt-[30px]"
          style={{
            backgroundImage: `url('${post.featuredImage.node.sourceUrl}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="blog-banner__wrapper min-h-[300px] flex justify-center items-center
            relative md:min-h-[600px]"
            style={{
              backgroundColor: "#000000a0",
            }}
          >
            <div className="px-[40px]">
              <h1 className="blog-banner__title text-white text-[30px] md:text-[45px] lg:text-[60px] text-center leading-[1.2em] font-bold">
                {post.title}
              </h1>
            </div>
            <div className="blog-banner__detail absolute bottom-[10px] left-[10px] flex flex-col md:flex-row md:gap-[30px] md:left-[30px]">
              <h4 className="text-[12px] leading-[20px] text-[#A18B7E] md:text-[16px]">
                Author :
                {`${post.author.node.firstName} ${post.author.node.lastName}`}{" "}
              </h4>
              <h4 className="text-[12px] leading-[20px] text-[#A18B7E] md:text-[16px]">
                Released On :{new Date(post.date).toLocaleDateString()}
              </h4>
            </div>
          </div>
        </div>
        <div className="preview-panel w-full">
          <PreviewPanel></PreviewPanel>
        </div>
        <article
          className="p-[30px] mb-[50px]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></article>
        <div className="other-article__section w-full bg-gray-100 py-[20px]">
          <div className="other-article__title text-[#77C6A6] text-[32px] leading-[44px] font-bold text-center">
            <h2>
              Artikel <span className="text-[#555555] ">Terbaik</span>
            </h2>
          </div>
          <div className="other-article__subtitle text-[#555555] text-[14px] text-center mb-[20px]">
            <p>Kami memberikan artikel terbaik khusus untuk kamu</p>
          </div>
          <div className="w-full flex flex-wrap md:flex-nowrap justify-between gap-[20px] px-[20px] md:px-[40px] lg:px-[100px]">
            {allPosts.map((post) => {
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
          <div className="other-article__link flex justify-center text-center text-[#3fc28d] my-[30px]">
            <Link href={"/"}>Lihat Selengkapnya &raquo;</Link>
          </div>
        </div>
        <div className="register-card">
          <RegisterCard></RegisterCard>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const GET_POST_BY_URI = gql`
    query GetPostByURI($id: ID!) {
      post(id: $id, idType: URI) {
        title
        content
        excerpt
        date
        uri
        author {
          node {
            firstName
            lastName
          }
        }
        seo {
          metaDesc
          title
          fullHead
        }
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
    }
  `;

  const GET_POSTS = gql`
    query GetAllPosts {
      posts(first: 3) {
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
    query: GET_POST_BY_URI,
    variables: {
      id: params.uri,
    },
  });
  const allPostsData = await client.query({
    query: GET_POSTS,
  });
  const post = response?.data?.post;
  const allPosts = allPostsData?.data?.posts?.nodes;
  return {
    props: {
      post,
      allPosts,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: "blocking",
  };
}
