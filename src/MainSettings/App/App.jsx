import { Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../Components/Layout/Header/Header";
import HomePage from "../../Pages/HomePage/HomePage";
import UseMediaQuery from "../../CustomHooks/UseMediaQuery";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.scss";
function App() {
  const isMobileScreen = UseMediaQuery("(max-width:768px)");
  useEffect(() => {
    Aos.init({
      delay: isMobileScreen ? 350 : 250,
      duration: 500,
      offset: isMobileScreen ? 250 : 350,
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
    </Fragment>
  );
}
export default App;
