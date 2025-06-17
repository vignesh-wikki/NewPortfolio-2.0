import Home from "./Components/Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./Components/Pages/Projects";
import Navbar from "./Components/Header/Navbar";
import Footer from "./Components/Footer/Footer";
import { useDispatch } from "react-redux";
import { setDarkMode } from "./Context/Slice";

export default function App() {
  const theme = window.matchMedia("(prefers-color-scheme: dark)");
  const dispatch = useDispatch();
  if (theme) dispatch(setDarkMode("dark"));

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
