import NavBar from "/src/components/NavBar.jsx";
import Header from "/src/components/Header.jsx";
import Technologies from "/src/components/Technologies.jsx";
import Projects from "/src/components/Projects.jsx";
import About from "/src/components/About.jsx";
import Footer from "/src/components/Footer.jsx";

export default function MainPage() {
  return (
    <>
      <NavBar />
      <Header />
      <Technologies />
      <Projects />
      <About />
      <Footer />
    </>
  );
}
