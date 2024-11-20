interface LayoutProp {
  children: React.ReactNode;
}

import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout: React.FC<LayoutProp> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
