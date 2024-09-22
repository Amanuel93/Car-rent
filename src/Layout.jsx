import React,{useEffect} from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTheme } from "./ThemeContext"; // Import the custom hook to use the context

const Layout = ({ children }) => {
    useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 800,
          easing: "ease-in-sine",
          delay: 100,
        });
        AOS.refresh();
      }, []);

  const { theme, setTheme } = useTheme(); // Access theme and setTheme from context

  return (
    <div className="bg-white dark:bg-dark dark:text-white text-black overflow-x-hidden">
      <Navbar theme={theme} setTheme={setTheme} /> 
      {/* <Navbar/> */}
      <main>{children}</main>
      <Footer /> {/* Persistent Footer */}
    </div>
  );
};

export default Layout;
