import React from 'react';
import TestimonialSlider from '../components/TestimonialSlider';
import { translations } from '../translations';
import { Page, Language } from '../types';
import AnimatedSection from '../components/AnimatedSection';

interface HomeProps {
    navigateTo: (page: Page) => void;
    language: Language;
}

const Home: React.FC<HomeProps> = ({ navigateTo, language }) => {
  const t = translations[language];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-brand-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0">
            <img
                src="https://images.unsplash.com/photo-1516116412351-2e2521a0a57e?q=80&w=2070&auto=format&fit=crop"
                alt="Abstract futuristic background"
                className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-neutral-900 via-brand-neutral-900/80 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 text-center">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-neutral-300">
              {t.home.hero.headline}
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-brand-neutral-300">
              {t.home.hero.subheading}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigateTo('Contact')}
                className="px-8 py-3 border border-transparent rounded-md shadow-lg text-base font-medium text-white bg-brand-blue-600 hover:bg-brand-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-neutral-900 focus:ring-brand-blue-500 transition-all transform hover:scale-105 hover:shadow-brand-blue-500/50"
              >
                {t.home.hero.ctaPrimary}
              </button>
              <button
                onClick={() => navigateTo('Quiz')}
                className="px-8 py-3 border border-white/50 rounded-md text-base font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-neutral-900 focus:ring-white transition-all"
              >
                {t.home.hero.ctaSecondary}
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Overview Section */}
      <AnimatedSection>
        <section className="py-20 bg-white dark:bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-brand-blue-600 dark:text-brand-blue-400 tracking-wide uppercase">{t.home.services.heading}</h2>
              <p className="mt-2 text-3xl font-extrabold text-brand-neutral-900 dark:text-white sm:text-4xl">
                {t.home.services.subheading}
              </p>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-brand-neutral-500 dark:text-brand-neutral-300">
                {t.home.services.description}
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {t.practiceAreas.slice(0, 3).map((service) => (
                 <div key={service.title} className="group p-6 text-center glass-panel rounded-2xl transition-all duration-300 hover:border-brand-blue-500 hover:shadow-2xl hover:shadow-brand-blue-500/10">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-blue-100 dark:bg-brand-blue-900/50 mx-auto transition-all duration-300 group-hover:scale-110 group-hover:neon-glow-blue">
                        <service.icon aria-hidden="true" className="h-8 w-8 text-brand-blue-600 dark:text-brand-blue-300" />
                    </div>
                    <h3 className="mt-6 text-lg font-bold text-brand-neutral-900 dark:text-white">{service.title}</h3>
                    <p className="mt-2 text-base text-brand-neutral-600 dark:text-brand-neutral-300">{service.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
                  <button
                      onClick={() => navigateTo('Practice Areas')}
                      className="text-brand-blue-600 dark:text-brand-blue-400 hover:text-brand-blue-800 dark:hover:text-brand-blue-300 font-semibold transition-colors duration-200"
                  >
                      {t.home.services.viewAll} &rarr;
                  </button>
              </div>
          </div>
        </section>
      </AnimatedSection>
      
      {/* Impact Metrics Section */}
      <section className="bg-brand-neutral-100 dark:bg-brand-neutral-900 py-20">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-brand-neutral-900 dark:text-white sm:text-4xl">
                {t.home.impact.heading}
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {t.home.impact.metrics.map((metric, index) => (
                <AnimatedSection key={index} delay={index * 150}>
                  <div className="glass-panel p-8 rounded-2xl">
                    <p className="text-5xl font-bold text-brand-blue-600 dark:text-brand-blue-400">{metric.value}</p>
                    <p className="mt-2 text-lg font-medium text-brand-neutral-600 dark:text-brand-neutral-300">{metric.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
        </AnimatedSection>
      </section>

      {/* Language Services Section */}
      <AnimatedSection>
        <section className="bg-white dark:bg-transparent py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
              <div className="lg:col-span-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start text-brand-blue-600 dark:text-brand-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" />
                  </svg>
                </div>
                <h2 className="mt-4 text-3xl font-extrabold text-brand-neutral-900 dark:text-white sm:text-4xl">
                  {t.home.languageServices.heading}
                </h2>
              </div>
              <div className="mt-8 lg:mt-0 lg:col-span-2">
                <p className="text-xl text-brand-neutral-600 dark:text-brand-neutral-300">
                  {t.home.languageServices.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Success Stories Section */}
      <section className="bg-brand-neutral-100 dark:bg-brand-neutral-900 py-20">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-brand-neutral-900 dark:text-white sm:text-4xl">
                    {t.home.successStories.heading}
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-brand-neutral-500 dark:text-brand-neutral-300">
                    {t.home.successStories.subheading}
                </p>
            </div>
            <TestimonialSlider stories={t.successStories} navigateTo={navigateTo} />
        </AnimatedSection>
      </section>

      {/* Blog Preview Section */}
      <AnimatedSection>
        <section className="bg-white dark:bg-transparent py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-brand-blue-600 dark:text-brand-blue-400 tracking-wide uppercase">{t.home.blog.heading}</h2>
              <p className="mt-2 text-3xl font-extrabold text-brand-neutral-900 dark:text-white sm:text-4xl">
                {t.home.blog.subheading}
              </p>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-brand-neutral-500 dark:text-brand-neutral-300">
                {t.home.blog.description}
              </p>
            </div>
            <div className="mt-16 grid gap-8 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
              {t.blogPosts.slice(0, 3).map((post) => (
                <div key={post.id} className="flex flex-col rounded-2xl overflow-hidden transition-all duration-300 glass-panel hover:border-brand-blue-500 hover:shadow-2xl hover:shadow-brand-blue-500/10">
                  <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src={post.imageUrl} alt={post.title} />
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('Blog'); }} className="block mt-2">
                        <p className="text-xl font-semibold text-brand-neutral-900 dark:text-white">{post.title}</p>
                        <p className="mt-3 text-base text-brand-neutral-600 dark:text-brand-neutral-300">{post.excerpt}</p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="text-sm text-brand-neutral-500 dark:text-brand-neutral-400">
                        <time dateTime={post.date}>{post.date}</time>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
                <button
                    onClick={() => navigateTo('Blog')}
                    className="text-brand-blue-600 dark:text-brand-blue-400 hover:text-brand-blue-800 dark:hover:text-brand-blue-300 font-semibold transition-colors duration-200"
                >
                    {t.home.blog.viewAll} &rarr;
                </button>
            </div>
          </div>
        </section>
      </AnimatedSection>
      
      {/* CTA Section */}
      <AnimatedSection>
        <section className="bg-brand-neutral-50 dark:bg-brand-neutral-900/50">
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
      </AnimatedSection>
    </>
  );
};

export default Home;
