import './App.css';
import Main from './components/routing/Main';
import About from './pages/About';
import Faq from './pages/Faq';
import Features from './pages/Features';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Testimonials from './pages/Testimonials';

function App() {
  return (
    <>
    {/* Header Maim */}
    <Main />
    <Home />
    <About />
    <Features />
    <Gallery />
    <Testimonials />
    <Pricing />
    <Faq />

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
