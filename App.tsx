import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import PracticeAreas from './pages/PracticeAreas';
import Blog from './pages/Blog';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Quiz from './pages/Quiz';
import AIChatWidget from './components/AIChatWidget';
import { Page, Language } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Home');
  const [language, setLanguage] = useState<Language>('en');
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const navigateTo = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home navigateTo={navigateTo} language={language} />;
      case 'About':
        return <About navigateTo={navigateTo} language={language} />;
      case 'Practice Areas':
        return <PracticeAreas navigateTo={navigateTo} language={language} />;
      case 'Blog':
        return <Blog language={language} />;
      case 'Success Stories':
        return <Testimonials navigateTo={navigateTo} language={language} />;
      case 'Contact':
        return <Contact language={language} />;
      case 'Quiz':
        return <Quiz navigateTo={navigateTo} language={language} />;
      default:
        return <Home navigateTo={navigateTo} language={language} />;
    }
  };
  
  const appClassName = `bg-brand-neutral-50 dark:bg-brand-neutral-900 text-brand-neutral-700 dark:text-brand-neutral-200 font-sans antialiased transition-colors duration-500 ${language === 'am' ? 'font-sans-am' : ''}`;

  return (
    <div className={appClassName}>
      <Header 
        currentPage={currentPage} 
        navigateTo={navigateTo} 
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main>
        {renderPage()}
      </main>
      <Footer navigateTo={navigateTo} language={language} />
      <AIChatWidget language={language} />
    </div>
  );
};

export default App;
