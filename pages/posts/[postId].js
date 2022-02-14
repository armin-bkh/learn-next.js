import axios from "axios";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const paths = data.map((post) => ({ params: { postId: `${post.id}` } }));

  return {
    paths,
    fallback: true,
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
    <div>
      <h1>
        {post.id} {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
