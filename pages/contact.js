import Footer from "../components/Footer/Footer";

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
