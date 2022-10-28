import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomeScreen from "./screens/HomeScreen";
import Navbar from "./components/Common/Navbar";

function App(lang) {
  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }
  return (
    <>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
      </Routes>
    </>
  );
}

export default App;
