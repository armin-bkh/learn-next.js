import Link from "next/link";

export const getServerSideProps = async ({ params: { category }, req, res, query }) => {
  const response = await fetch(
    `http://localhost:3001/news?category=${category}`
  );
  const data = await response.json();
  if (!data.length) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      articles: data,
      category,
    },
  };
};

const ArticleListByCategory = ({ articles, category }) => {
  return (
    <section>
      <h1>articles list of {category}</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link href={`/news/article/${article.id}`}>
              <div>
                <h2>
                  {article.id} {article.title}
                </h2>
                <p>{article.descirption}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ArticleListByCategory;
