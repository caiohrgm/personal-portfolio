import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import SkillsAndExpertise from "./pages/Skills&Expertise"
import Articles from "./pages/Articles";
import PersonalArticles from "./pages/PersonalArticles";
import ScientificPapers from "./pages/ScientificPapers";
import Contact from "./pages/Contact";

import Layout from "./components/Layout";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><AboutMe /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
        <Route path="/skills" element={<Layout><SkillsAndExpertise /></Layout>} />
         <Route path="/articles" element={<Layout><Articles /></Layout>} />
        <Route path="/articles/scientific-papers" element={<Layout><ScientificPapers /></Layout>} />
        <Route path="/articles/personal-articles" element={<Layout><PersonalArticles /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} /> 
      </Routes>
    </Router>
  );
}
