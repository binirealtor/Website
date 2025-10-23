import React from 'react';
import CtaSection from '../components/CtaSection';
import { Page, Language } from '../types';
import AnimatedSection from '../components/AnimatedSection';
import { translations } from '../translations';

interface PracticeAreasProps {
  navigateTo: (page: Page) => void;
  language: Language;
}

const PracticeAreas: React.FC<PracticeAreasProps> = ({ navigateTo, language }) => {
  const t = translations[language];

  return (
    <>
    <div className="bg-brand-neutral-50 dark:bg-brand-neutral-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="text-base font-semibold text-brand-blue-600 dark:text-brand-blue-400 tracking-wide uppercase">{t.practiceAreasPage.pageTitle}</h2>
          <p className="mt-2 text-3xl font-extrabold text-brand-neutral-900 dark:text-white sm:text-4xl">
            {t.practiceAreasPage.mainHeading}
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-brand-neutral-500 dark:text-brand-neutral-300">
            {t.practiceAreasPage.subheading}
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.practiceAreas.map((service) => (
            <AnimatedSection key={service.title}>
              <div className="group glass-panel p-6 rounded-2xl h-full transition-all duration-300 hover:border-brand-blue-500 hover:shadow-2xl hover:shadow-brand-blue-500/10">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-brand-blue-100 dark:bg-brand-blue-900/50 text-brand-blue-700 transition-all duration-300 group-hover:scale-110 group-hover:neon-glow-blue">
                      <service.icon className="h-8 w-8 text-brand-blue-600 dark:text-brand-blue-300" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-neutral-900 dark:text-white">{service.title}</h3>
                </div>
                <p className="mt-4 text-base text-brand-neutral-600 dark:text-brand-neutral-300">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
    <CtaSection navigateTo={navigateTo} language={language} />
    </>
  );
};

export default PracticeAreas;
