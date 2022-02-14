import axios from "axios";
import Link from "next/link";
import React from "react";

export const getStaticProps = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
};

const PostsList = ({ posts }) => {
  return (
    <div>
      <h1>list of posts</h1>
      <ul>
        {posts.map((post) => (
          <React.Fragment key={post.id}>
            <li>
              <Link href={`/posts/${post.id}`} passHref>
                <h3>
                  {post.id}
                  {post.title}
                </h3>
              </Link>
            </li>
            <hr />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
