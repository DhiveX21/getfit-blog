import Head from "next/head";
import Footer from "../components/Footer";
import { client } from "../lib/apollo";
import { gql } from "@apollo/client";
import parse from "html-react-parser";
import PreviewPanel from "../components/PreviewPanel";
import OtherArticle from "../components/OtherArticle";
import RegisterCard from "../components/RegisterCard";

export default function SlugPage({ post }) {
  const seoFullHead = parse(post.seo.fullHead);
  return (
    <div>
      <Head>
        <title>{post.seo.title}</title>
        <meta name="description" content={`${post.seo.metaDesc}`}></meta>
        {seoFullHead}
      </Head>

      <main>
        <div className="blog-banner w-full bg-[#F6F7FB]">
          <div
            className="blog-banner__wrapper min-h-[600px] flex justify-center items-center
           relative md:min-h-[300px]"
          >
            <div>
              <h1 className="blog-banner__title text-[#77C6A6] text-[60px]">
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
          className="p-[30px]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></article>
        <div className="other-article__section w-full">
          <OtherArticle />
        </div>
        <div className="register-card">
          <RegisterCard></RegisterCard>
        </div>
      </main>

      <Footer></Footer>
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
      }
    }
  `;
  const response = await client.query({
    query: GET_POST_BY_URI,
    variables: {
      id: params.uri,
    },
  });
  const post = response?.data?.post;
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: "blocking",
  };
}
