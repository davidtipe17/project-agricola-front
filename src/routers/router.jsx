import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../layouts/Footer";
import NavBar from "../layouts/Footer";
import { HomePage } from "../pages";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
