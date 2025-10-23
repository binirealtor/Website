import React, { useState, useEffect, useCallback } from 'react';
import { SuccessStory, Page } from '../types';

interface SuccessStorySliderProps {
  stories: SuccessStory[];
  navigateTo: (page: Page) => void;
}

const TestimonialSlider: React.FC<SuccessStorySliderProps> = ({ stories, navigateTo }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  }, [stories.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 7000); // Change slide every 7 seconds
    return () => clearInterval(slideInterval);
  }, [nextSlide]);
  
  if (!stories || stories.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {stories.map((story, index) => (
          <div key={index} className="w-full flex-shrink-0 px-4">
            <div className="glass-panel p-8 md:p-12 rounded-2xl text-center">
              <div className="mb-4">
                  <span className="inline-block bg-brand-blue-100 dark:bg-brand-blue-500/20 text-brand-blue-800 dark:text-brand-blue-300 text-sm font-semibold px-3 py-1 rounded-full">
                      {story.practiceArea}
                  </span>
              </div>
              <p className="text-xl md:text-2xl italic text-brand-neutral-700 dark:text-brand-neutral-200">
                "{story.resolution.substring(0, 200)}..."
              </p>
              <div className="mt-6 flex flex-col items-center justify-center space-y-4">
                  <div className="flex items-center space-x-3">
                      <img className="h-12 w-12 rounded-full object-cover" src={story.image} alt={story.client.name} />
                      <div>
                          <div className="font-semibold text-brand-neutral-800 dark:text-brand-neutral-100">{story.client.name}</div>
                          <div className="text-sm text-brand-neutral-500 dark:text-brand-neutral-400">{story.client.location}</div>
                      </div>
                  </div>
                  <button
                      onClick={() => navigateTo('Success Stories')}
                      className="text-brand-blue-600 dark:text-brand-blue-400 hover:text-brand-blue-800 dark:hover:text-brand-blue-300 font-semibold transition-colors duration-200 text-sm"
                  >
                      Read the full story &rarr;
                  </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute top-1/2 left-0 -translate-y-1/2 p-2 rounded-full bg-white/50 dark:bg-black/20 hover:bg-white dark:hover:bg-black/40 text-brand-neutral-600 dark:text-white shadow-md transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-0 -translate-y-1/2 p-2 rounded-full bg-white/50 dark:bg-black/20 hover:bg-white dark:hover:bg-black/40 text-brand-neutral-600 dark:text-white shadow-md transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
      </button>
    </div>
  );
};

export default TestimonialSlider;
