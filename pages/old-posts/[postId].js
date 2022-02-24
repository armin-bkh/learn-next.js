import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const paths = data.map((post) => ({ params: { postId: `${post.id}` } }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { postId } }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
};

const Post = ({ post }) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Head>
        <title>
          {post.id} {post.title}
        </title>
        <meta
          name="description"
          content={`post with id = ${post.id} and name = ${post.title}`}
        />
      </Head>
      <div>
        <h1>
          {post.id} {post.title}
        </h1>
        <p>{post.body}</p>
      </div>
    </>
  );
};

export default Post;
