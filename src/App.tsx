import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);

  const handleNavigate = (page: string) => {
    if (page === currentPage) return;
    
    setIsPageTransitioning(true);
    
    // Smooth scroll to top with page transition
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
    
    // Delay page change for smooth transition
    setTimeout(() => {
      setCurrentPage(page);
      setIsPageTransitioning(false);
    }, 150);
  };

  // Add scroll-based effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      // Add progress indicator or other scroll-based effects here
      document.documentElement.style.setProperty('--scroll-progress', `${scrollPercent}%`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main className={`flex-grow page-transition ${isPageTransitioning ? 'opacity-50' : 'opacity-100'}`}>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
