import { Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../Components/Layout/Header/Header";
import HomePage from "../../Pages/HomePage/HomePage";
import UseMediaQuery from "../../CustomHooks/UseMediaQuery";
import Footer from "../../Components/Layout/Footer/Footer";
import * as AppData from "./AppData";
import "aos/dist/aos.css";
import Aos from "aos";
import "./App.scss";
function App() {
  const isMobileScreen = UseMediaQuery("(max-width:768px)");
  useEffect(() => {
    Aos.init({
      delay: isMobileScreen ? 350 : 450,
      duration: 500,
      offset: isMobileScreen ? 250 : 450,
    });
  }, []);

  return (
    <Fragment>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
        </Routes>
      </main>
      <Footer
        data={AppData.FooterData}
        info={AppData.FooterInfo}
      />
    </Fragment>
  );
}
export default App;
