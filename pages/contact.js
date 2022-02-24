import Footer from "../components/layout/Footer/Footer";

const Contact = () => {
  return <main className="main">contact page</main>;
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
