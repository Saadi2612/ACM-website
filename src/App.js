import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SeminarsContainer from "./components/SeminarsContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Homepage} exact />
        {/* <Route path="/services" Component={SeminarsContainer} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
