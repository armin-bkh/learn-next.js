import Link from 'next/link';
import Footer from "../components/layout/Footer/Footer";

export const getStaticProps = ({ preview }) => {
  return {
    props: {
      data: preview ? "Armin" : 'user',
    }
  }
}

const Contact = ({ data }) => {
  console.log(data);
  return <main className="main">contact page {data}
  {/* <Link href={{ pathname: "/api/disable-preview", query: {
    redirect: "/contact"
  } }}><a>clear prview mode</a></Link> */}
  </main>;
};

export default Contact;

Contact.getLayout = function pageLayout(page) {
    
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
