import React from 'react';
import CtaSection from '../components/CtaSection';
import { Page, Language } from '../types';
import AnimatedSection from '../components/AnimatedSection';
import { translations } from '../translations';

interface TestimonialsProps {
  navigateTo: (page: Page) => void;
  language: Language;
}

const Testimonials: React.FC<TestimonialsProps> = ({ navigateTo, language }) => {
  const t = translations[language];

  return (
    <>
    <div className="bg-white dark:bg-brand-neutral-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="text-base font-semibold text-brand-blue-600 dark:text-brand-blue-400 tracking-wide uppercase">{t.successStoriesPage.pageTitle}</h2>
          <p className="mt-2 text-3xl font-extrabold text-brand-neutral-900 dark:text-white sm:text-4xl">
            {t.successStoriesPage.mainHeading}
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-brand-neutral-500 dark:text-brand-neutral-300">
            {t.successStoriesPage.subheading}
          </p>
        </AnimatedSection>

        <div className="mt-16 space-y-16">
          {t.successStories.map((story, index) => (
            <AnimatedSection key={index}>
              <div className="glass-panel rounded-2xl overflow-hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
                <div className="lg:col-span-1">
                  <img className="h-64 w-full object-cover lg:h-full" src={story.image} alt={story.client.name} />
                </div>
                <div className="lg:col-span-2 p-8">
                  <div>
                    <span className="inline-block bg-brand-blue-100 dark:bg-brand-blue-500/20 text-brand-blue-800 dark:text-brand-blue-300 text-sm font-semibold px-3 py-1 rounded-full">
                        {story.practiceArea}
                    </span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-brand-neutral-800 dark:text-white">{t.successStoriesPage.challengeHeading}</h3>
                    <p className="mt-2 text-brand-neutral-600 dark:text-brand-neutral-300">{story.challenge}</p>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-brand-neutral-800 dark:text-white">{t.successStoriesPage.resolutionHeading}</h3>
                    <p className="mt-2 text-brand-neutral-600 dark:text-brand-neutral-300">{story.resolution}</p>
                  </div>
                  <footer className="mt-6">
                    <p className="text-sm font-semibold text-brand-neutral-900 dark:text-white">{story.client.name}</p>
                    <p className="text-sm text-brand-neutral-500 dark:text-brand-neutral-400">{story.client.location}</p>
                  </footer>
                </div>
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

export default Testimonials;
