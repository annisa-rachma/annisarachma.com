import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Pages/Home";
import Projects from "./components/Pages/Projects";
import ProjectDetail1 from "./components/Pages/ProjectDetail1";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/projects/what-to-cook" element={<ProjectDetail1 />} />
      </Routes>
    </>
  );
}

export default App;
