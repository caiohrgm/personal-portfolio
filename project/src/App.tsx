import { Routes, Route } from "react-router-dom";
import Layout from "./components/NavBarLayout";
import Home from "./pages/Home";
import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      {/* Wrap all pages inside the Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        {/* <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} /> */}
      </Route>
    </Routes>
  );
}
