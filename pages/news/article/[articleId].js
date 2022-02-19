export const getServerSideProps = async ({ params: { articleId } }) => {
  const data = await (
    await fetch(`http://localhost:3001/news/${articleId}`)
  ).json();

  if(!data.id){
      return {
          notFound: true,
      }
  }

  return {
    props: {
      article: data,
    },
  };
};

const ArticleDetailPage = ({ article }) => {
  return (
    <section>
      <h1>
        {article.id} {article.title} | {article.category}
      </h1>
      <p>{article.description}</p>
    </section>
  );
};

export default ArticleDetailPage;
