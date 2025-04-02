import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Pages/Home";
// import * as assets from "../src/assets"
// import LinkComponent from "./components/LinkComponent";
Home


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}>

        </Route>
      </Routes>
    </>
  );
}

export default App;
