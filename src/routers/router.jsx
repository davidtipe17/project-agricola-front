import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../layouts/Footer";
import NavBar from "../layouts/NavBar";
import { HomePage, LoginPage } from "../pages";

const AppRouter = () => {
  return (
    <BrowserRouter>
      {/* <NavBar/> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
};

export default AppRouter;
