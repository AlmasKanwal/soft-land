import './App.css';
import Main from './components/routing/Main';
import About from './pages/About';
import Features from './pages/Features';
import Home from './pages/Home';

function App() {
  return (
    <>
    {/* Header Maim */}
    <Main />
    <Home />
    <About />
    <Features />

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
