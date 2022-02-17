export const getServerSideProps = async ({ params: { articleId } }) => {
  const response = await fetch(`http://localhost:3001/news/${articleId}`);
  const data = await response.json();

  return {
    props: {
      article: data,
    },
  };
};

const NewArticleDetail = () => {
  return <section></section>;
};

export default NewArticleDetail;
