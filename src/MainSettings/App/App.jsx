import { Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../Components/Layout/Header/Header";
import HomePage from "../../Pages/HomePage/HomePage";
import AboutPage from "../../Pages/AboutPage/AboutPage";
import EpisodesPage from "../../Pages/EpisodesPage/EpisodesPage";
import BlogPage from "../../Pages/BlogPage/BlogPage";
import Beta from "../../Components/Layout/Beta/Beta";
import Footer from "../../Components/Layout/Footer/Footer";
import UseMediaQuery from "../../CustomHooks/UseMediaQuery";
import * as AppData from "./AppData";
import "aos/dist/aos.css";
import Aos from "aos";
import "./App.scss";
function App() {
  const isMobileScreen = UseMediaQuery("(max-width:768px)");
  useEffect(() => {
    Aos.init({
      delay: isMobileScreen ? 200 : 300,
      duration: 350,
      offset: isMobileScreen ? 150 : 50,
    });
  }, []);

  return (
    <Fragment>
      <Header data={AppData.HeaderData} />
      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/about"
            element={<AboutPage />}
          />
          <Route
            path="/details"
            element={<EpisodesPage />}
          />
          <Route
            path="/blog"
            element={<BlogPage />}
          />
        </Routes>
      </main>
      <Beta />
      <Footer
        data={AppData.FooterData}
        info={AppData.FooterInfo}
      />
    </Fragment>
  );
}
export default App;
