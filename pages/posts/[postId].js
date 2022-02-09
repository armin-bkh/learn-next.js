import axios from "axios";

export const getStaticPaths = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const paths = data.map((post) => ({ params: { postId: String(post.id) } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { postId } }) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  return {
    props: {
      post: data,
    },
  };
};

const Post = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
