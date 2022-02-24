import Head from "next/head";

export const getStaticProps = async () => {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  console.log(user, password);
  return {
    props: {
      title: "this is about",
      user
    }
  }
}

const About = ({title, user}) => {
  return (
    <>
      <Head>
        <meta name="description" content="about us page" />
      </Head>
      <main className="main">{title} page {process.env.NEXT_PUBLIC_PASSWORD}</main>
    </>
  );
};

export default About;
