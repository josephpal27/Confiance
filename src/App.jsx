import { Outlet } from "react-router-dom"
import { useEffect } from "react";
import MyNavbar from "./components/navbar/Navbar"
import Footer from './components/footer/Footer';
import PageTitle from "./components/PageTitle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";

const App = () => {

  // AOS Init
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      // once: true,
    });
  }, []);

  // Refresh AOS on scroll
  useEffect(() => {
    const handleScroll = () => {
      AOS.refresh();
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <PageTitle />
      <MyNavbar />
      <Outlet />
      <Footer />
      <ToastContainer position="top-right" autoClose={4000} />
    </>
  )
}

export default App
