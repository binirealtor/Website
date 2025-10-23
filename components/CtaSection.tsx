import React from 'react';
import { Page, Language } from '../types';
import { translations } from '../translations';

interface CtaSectionProps {
  navigateTo: (page: Page) => void;
  language: Language;
}

const CtaSection: React.FC<CtaSectionProps> = ({ navigateTo, language }) => {
  const t = translations[language];

  return (
    <section className="bg-white dark:bg-brand-neutral-900/50">
      <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-brand-neutral-900 dark:text-white sm:text-4xl">
          <span className="block">{t.cta.heading}</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-brand-neutral-500 dark:text-brand-neutral-300">
          {t.cta.subheading}
        </p>
        <button
            onClick={() => navigateTo('Contact')}
            className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-lg text-base font-medium text-white bg-brand-blue-600 hover:bg-brand-blue-700 sm:w-auto transition-all transform hover:scale-105 hover:shadow-brand-blue-500/50"
        >
          {t.cta.buttonText}
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
