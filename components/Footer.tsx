import React from 'react';
import { translations } from '../translations';
import { Page, Language } from '../types';

// FIX: Define the FooterProps interface to provide types for the component's props.
interface FooterProps {
  navigateTo: (page: Page) => void;
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ navigateTo, language }) => {
  const t = translations[language];

  return (
    <footer className="bg-brand-neutral-100 dark:bg-brand-neutral-900 border-t border-brand-neutral-200 dark:border-brand-neutral-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
             <button onClick={() => navigateTo('Home')} className="text-left">
              <h1 className="text-2xl font-bold text-brand-blue-800 dark:text-brand-blue-300">{t.header.firmName}</h1>
              <p className="text-xs text-brand-neutral-500 dark:text-brand-neutral-400 tracking-wider uppercase">{t.header.firmSubheading}</p>
            </button>
            <p className="text-brand-neutral-600 dark:text-brand-neutral-300 text-base">
              {t.footer.tagline}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-brand-neutral-400 hover:text-brand-blue-600 dark:hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-brand-neutral-400 hover:text-brand-blue-600 dark:hover:text-white transition-colors">
                <span className="sr-only">X (formerly Twitter)</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="text-brand-neutral-400 hover:text-brand-blue-600 dark:hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-brand-neutral-900 dark:text-brand-neutral-100 tracking-wider uppercase">{t.footer.navigation}</h3>
                <ul className="mt-4 space-y-4">
                  {t.navLinks.map(link => (
                    <li key={link.key}>
                      <button onClick={() => navigateTo(link.key)} className="text-base text-brand-neutral-600 dark:text-brand-neutral-300 hover:text-brand-blue-600 dark:hover:text-white transition-colors">{link.label}</button>
                    </li>
                  ))}
                   <li>
                      <button onClick={() => navigateTo('Contact')} className="text-base text-brand-neutral-600 dark:text-brand-neutral-300 hover:text-brand-blue-600 dark:hover:text-white transition-colors">{t.footer.contactLink}</button>
                    </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-brand-neutral-900 dark:text-brand-neutral-100 tracking-wider uppercase">{t.footer.legal}</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-brand-neutral-600 dark:text-brand-neutral-300 hover:text-brand-blue-600 dark:hover:text-white transition-colors">{t.footer.privacy}</a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-brand-neutral-600 dark:text-brand-neutral-300 hover:text-brand-blue-600 dark:hover:text-white transition-colors">{t.footer.disclaimer}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-brand-neutral-900 dark:text-brand-neutral-100 tracking-wider uppercase">{t.footer.contactUs}</h3>
                <div className="mt-4 space-y-4 text-base text-brand-neutral-600 dark:text-brand-neutral-300">
                  <p><strong>{t.footer.seattleOffice.city}:</strong><br />{t.footer.seattleOffice.address1}<br />{t.footer.seattleOffice.address2}</p>
                  <p><strong>{t.footer.bellevueOffice.city}:</strong><br />{t.footer.bellevueOffice.address1}<br />{t.footer.bellevueOffice.address2}</p>
                  <p>Email: info@aberralaw.com</p>
                  <p>Phone: (206) 734-7614</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-brand-neutral-300 dark:border-brand-neutral-700 pt-8">
          <p className="text-base text-brand-neutral-500 dark:text-brand-neutral-400 xl:text-center">{t.footer.copyright.replace('{year}', new Date().getFullYear().toString())}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;