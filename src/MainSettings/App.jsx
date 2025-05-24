import Header from "../Components/Layout/Header/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
function App() {
  return (
    <Routes>
      <Header />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
export default App;
