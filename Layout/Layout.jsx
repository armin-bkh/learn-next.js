import Footer from "@/layout/Footer/Footer";
import Header from "@/layout/Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
