import Index from "./Pages/Index";
import "./assets/fonts/fonts.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDetails from "./Components/Projects/ProjectDetails";
import ScrollToTop from "./Pages/ScrollToTop";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Projects from "./Components/Projects/Projects";
import About from "./Pages/About";
import Articles from "./Components/Articles/Articles";
import ArticleDetails from "./Components/Articles/ArticleDetails";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Index />
              </>
            }
          />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article/:id" element={<ArticleDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
