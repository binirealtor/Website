import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { translations } from '../translations';
import { Language } from '../types';

interface BlogProps {
  language: Language;
}

const Blog: React.FC<BlogProps> = ({ language }) => {
  const t = translations[language];

  return (
    <div className="bg-brand-neutral-50 dark:bg-brand-neutral-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="text-base font-semibold text-brand-blue-600 dark:text-brand-blue-400 tracking-wide uppercase">{t.blogPage.pageTitle}</h2>
          <p className="mt-2 text-3xl font-extrabold text-brand-neutral-900 dark:text-white sm:text-4xl">
            {t.blogPage.mainHeading}
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-brand-neutral-500 dark:text-brand-neutral-300">
            {t.blogPage.subheading}
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          {t.blogPosts.map((post) => (
            <AnimatedSection key={post.id}>
              <div className="flex flex-col rounded-2xl overflow-hidden transition-all duration-300 glass-panel h-full hover:border-brand-blue-500 hover:shadow-2xl hover:shadow-brand-blue-500/10">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={post.imageUrl} alt={post.title} />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <a href="#" className="block mt-2 group">
                      <p className="text-xl font-semibold text-brand-neutral-900 dark:text-white group-hover:text-brand-blue-600 dark:group-hover:text-brand-blue-400 transition-colors">{post.title}</p>
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
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
