import './App.css';
import Main from './components/routing/Main';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Features from './pages/Features';
import Footer from './pages/Footer';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Testimonials from './pages/Testimonials';

function App() {
  return (
    <>
    {/* Header Main */}
    <Main />
    <Home />
    <About />
    <Features />
    <Gallery />
    <Testimonials />
    <Pricing />
    <Faq />
    <Contact />
    <Footer />

    </>
  );
}

export default App;

// <!-- Nav Fixed Start -->
// <script>
//   const navbar = document.getElementById('mainNavbar');

//   window.addEventListener('scroll', function () {
//     if (window.scrollY > 100) {
//       navbar.classList.add('fixed-nav');
//     } else {
//       navbar.classList.remove('fixed-nav');
//     }
//   });
// </script>
// <!-- Nav Fixed End -->
