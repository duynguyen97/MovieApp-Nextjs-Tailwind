import "../styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import type { AppProps } from "next/app";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
