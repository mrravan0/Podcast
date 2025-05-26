import Header from "../Components/Layout/Header/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import { Fragment } from "react/jsx-runtime";
function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Fragment>
  );
}
export default App;
