import React from 'react';
import { Page, Language } from '../types';
import CtaSection from '../components/CtaSection';
import AnimatedSection from '../components/AnimatedSection';
import { translations } from '../translations';

interface AboutProps {
  navigateTo: (page: Page) => void;
  language: Language;
}

const About: React.FC<AboutProps> = ({ navigateTo, language }) => {
  const t = translations[language];

  return (
    <>
    <div className="bg-white dark:bg-brand-neutral-900 py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-base font-semibold text-brand-blue-600 dark:text-brand-blue-400 tracking-wide uppercase">{t.about.pageTitle}</h2>
            <p className="mt-2 text-3xl font-extrabold text-brand-neutral-900 dark:text-white sm:text-4xl">
              {t.about.mainHeading}
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
             <div className="mt-10 lg:mt-0" aria-hidden="true">
              <div className="aspect-w-1 aspect-h-1">
                  <img 
                      className="rounded-2xl shadow-xl object-cover" 
                      src="https://images.unsplash.com/photo-1580894732444-84cf4b76a0b6?q=80&w=800&h=800&fit=crop" 
                      alt="Professional headshot of Amsale Aberra"
                  />
              </div>
            </div>
            <div>
              <div className="mt-6 text-lg text-brand-neutral-600 dark:text-brand-neutral-300 space-y-6">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
         <AnimatedSection>
            <div className="mt-16 grid md:grid-cols-2 gap-12">
                <div className="glass-panel p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold text-brand-neutral-800 dark:text-white">{t.about.missionHeading}</h3>
                    <p className="mt-4 text-lg text-brand-neutral-600 dark:text-brand-neutral-300">
                        {t.about.missionText}
                    </p>
                </div>
                <div className="glass-panel p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold text-brand-neutral-800 dark:text-white">{t.about.multilingualHeading}</h3>
                    <p className="mt-4 text-lg text-brand-neutral-600 dark:text-brand-neutral-300">
                        {t.about.multilingualText}
                    </p>
                </div>
            </div>
         </AnimatedSection>
      </div>
    </div>
    <CtaSection navigateTo={navigateTo} language={language} />
    </>
  );
};

export default About;
