import { Routes, Route } from "react-router-dom";
import Layout from "./components/NavBarLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectTemplate from "./components/Projects/ProjectTemplate";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectTemplate />} />

      </Route>
    </Routes>
  );
}
