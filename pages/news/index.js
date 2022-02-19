import Link from "next/link";

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3001/news");
  const data = await response.json();

  return {
    props: {
      articles: data,
    },
  };
};

const NewsList = ({ articles }) => {
  return (
    <section>
      <h1>List of News articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link href={`/news/article/${article.id}`} passHref>
              <h2>
                {article.id} {article.title} {article.category}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NewsList;
