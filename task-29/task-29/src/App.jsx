import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Projects from "./components/section/article-1";
import About from "./components/section/article-2";
import Map from "./components/section/article-4";
import Contact from "./components/section/artricle-3";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Projects/>
      <About/>
      <Contact/>
      <Map/>
      <Footer/>
    </>
  );
}

export default App;
