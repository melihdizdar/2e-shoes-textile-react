import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomeScreen from "./screens/HomeScreen";

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
      </Routes>
    </>
  );
}

export default App;
