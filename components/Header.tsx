import React, { useState } from 'react';
import { translations } from '../translations';
import { Page, Language } from '../types';
import { SunIcon, MoonIcon } from '../constants';

interface HeaderProps {
  currentPage: Page;
  navigateTo: (page: Page) => void;
  language: Language;
  setLanguage: (language: Language) => void;
  theme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, navigateTo, language, setLanguage, theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[language];

  const handleNavClick = (page: Page) => {
    navigateTo(page);
    setIsMenuOpen(false);
  };
  
  const handleContactClick = () => {
      navigateTo('Contact');
      setIsMenuOpen(false);
  }

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'am' : 'en');
  };

  return (
    <header className="glass-panel sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button onClick={() => handleNavClick('Home')} className="text-left">
              <h1 className="text-2xl font-bold text-brand-blue-800 dark:text-brand-blue-300 font-sans">{t.header.firmName}</h1>
              <p className="text-xs text-brand-neutral-500 dark:text-brand-neutral-400 tracking-wider uppercase">{t.header.firmSubheading}</p>
            </button>
          </div>
          <div className="hidden md:flex items-center">
            <nav className="flex items-baseline space-x-1">
              {t.navLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => handleNavClick(link.key)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    currentPage === link.key
                      ? 'text-brand-blue-600 dark:text-white'
                      : 'text-brand-neutral-600 dark:text-brand-neutral-300 hover:text-brand-blue-600 dark:hover:text-white hover:bg-brand-blue-50 dark:hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
             <button
              onClick={handleContactClick}
              className="ml-6 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-blue-600 hover:bg-brand-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue-500 transition-transform transform hover:scale-105"
            >
              {t.header.cta}
            </button>
            <button
              onClick={toggleLanguage}
              className="ml-4 p-2 rounded-full text-brand-neutral-600 dark:text-brand-neutral-300 hover:text-brand-blue-600 dark:hover:text-white hover:bg-brand-blue-50 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle Language"
            >
              <span className="font-semibold">{language === 'en' ? 'AM' : 'EN'}</span>
            </button>
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-full text-brand-neutral-600 dark:text-brand-neutral-300 hover:text-brand-blue-600 dark:hover:text-white hover:bg-brand-blue-50 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
             <button
              onClick={toggleTheme}
              className="mr-2 p-2 rounded-full text-brand-neutral-500 dark:text-brand-neutral-300 hover:bg-brand-neutral-100 dark:hover:bg-white/10"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-brand-neutral-100 dark:bg-white/10 inline-flex items-center justify-center p-2 rounded-md text-brand-neutral-500 dark:text-brand-neutral-300 hover:bg-brand-neutral-200 dark:hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-neutral-100 focus:ring-brand-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {t.navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => handleNavClick(link.key)}
                className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium ${
                  currentPage === link.key
                    ? 'bg-brand-blue-100 dark:bg-brand-blue-900/50 text-brand-blue-700 dark:text-white'
                    : 'text-brand-neutral-600 dark:text-brand-neutral-300 hover:bg-brand-neutral-100 dark:hover:bg-white/10 hover:text-brand-blue-700 dark:hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
             <button
              onClick={handleContactClick}
              className="w-full mt-2 block px-3 py-3 rounded-md text-center text-base font-medium text-white bg-brand-blue-600 hover:bg-brand-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue-500"
            >
              {t.header.cta}
            </button>
             <button
              onClick={toggleLanguage}
              className="w-full mt-2 block px-3 py-3 rounded-md text-center text-base font-medium text-brand-blue-600 dark:text-brand-blue-300 bg-brand-blue-100 dark:bg-white/10 hover:bg-brand-blue-200 dark:hover:bg-white/20"
            >
              Switch to {language === 'en' ? 'Amharic' : 'English'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
