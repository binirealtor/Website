import React, { useState } from 'react';
import { Page, Language } from '../types';
import AnimatedSection from '../components/AnimatedSection';
import { translations } from '../translations';

interface QuizProps {
  navigateTo: (page: Page) => void;
  language: Language;
}

interface QuizAnswers {
  purpose: string;
  education: string;
  hasUSRelative: string;
}

const initialAnswers: QuizAnswers = {
  purpose: '',
  education: '',
  hasUSRelative: '',
};

const getGuidance = (answers: QuizAnswers, language: Language): string[] => {
  const guidanceMessages = translations[language].quiz.results.guidance;
  const suggestions = new Set<string>();

  if (answers.purpose === 'study') {
    suggestions.add(guidanceMessages.study);
  }
  if (answers.purpose === 'visit') {
    suggestions.add(guidanceMessages.visit);
  }
  if (answers.purpose === 'work') {
    if (['bachelors', 'masters', 'doctorate'].includes(answers.education)) {
      suggestions.add(guidanceMessages.workSpecialty);
    }
    suggestions.add(guidanceMessages.workIntracompany);
    suggestions.add(guidanceMessages.workExtraordinary);
  }
  if (answers.purpose === 'family' || answers.hasUSRelative === 'yes') {
    suggestions.add(guidanceMessages.family);
  }
  if (answers.purpose === 'other') {
    suggestions.add(guidanceMessages.other);
  }

  if (suggestions.size === 0) {
    return [guidanceMessages.default];
  }
  return Array.from(suggestions);
}


const Quiz: React.FC<QuizProps> = ({ navigateTo, language }) => {
  const t = translations[language].quiz;
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<QuizAnswers>(initialAnswers);
  const [results, setResults] = useState<string[] | null>(null);

  const totalSteps = t.questions.length;

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAnswers(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(s => s + 1);
    } else {
      setResults(getGuidance(answers, language));
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(s => s - 1);
    }
  };
  
  const resetQuiz = () => {
      setAnswers(initialAnswers);
      setStep(1);
      setResults(null);
  }

  const currentQuestion = t.questions.find(q => q.step === step);

  return (
    <div className="bg-white dark:bg-brand-neutral-900 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-base font-semibold text-brand-blue-600 dark:text-brand-blue-400 tracking-wide uppercase">{t.pageTitle}</h2>
            <p className="mt-2 text-3xl font-extrabold text-brand-neutral-900 dark:text-white sm:text-4xl">
              {t.mainHeading}
            </p>
          </div>
          <div className="mt-12 glass-panel p-8 rounded-2xl shadow-lg">
            {results ? (
              <AnimatedSection>
                <h3 className="text-2xl font-bold text-brand-neutral-800 dark:text-white">{t.results.heading}</h3>
                <p className="mt-4 text-brand-neutral-600 dark:text-brand-neutral-300">{t.results.subheading}</p>
                <ul className="mt-6 space-y-4">
                  {results.map((result, index) => (
                     <li key={index} className="flex items-start">
                        <div className="flex-shrink-0">
                           <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <p className="ml-3 text-brand-neutral-700 dark:text-brand-neutral-200">{result}</p>
                     </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-yellow-400/20 border-l-4 border-yellow-400 text-yellow-800 dark:text-yellow-200 rounded-r-lg">
                  <p className="font-bold">{t.results.disclaimer.heading}</p>
                  <p>{t.results.disclaimer.text}</p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={() => navigateTo('Contact')}
                        className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-brand-blue-600 hover:bg-brand-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue-500 transition-transform transform hover:scale-105"
                    >
                        {t.results.ctaButton}
                    </button>
                    <button
                        onClick={resetQuiz}
                        className="w-full inline-flex justify-center py-3 px-6 border border-brand-neutral-300 dark:border-brand-neutral-600 shadow-sm text-base font-medium rounded-md text-brand-neutral-700 dark:text-brand-neutral-200 bg-white dark:bg-white/10 hover:bg-brand-neutral-100 dark:hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue-500"
                    >
                        {t.results.resetButton}
                    </button>
                </div>
              </AnimatedSection>
            ) : (
              <>
                {/* Progress Bar */}
                <div>
                  <p className="text-sm font-medium text-brand-neutral-600 dark:text-brand-neutral-300">{t.progressText.replace('{step}', step.toString()).replace('{totalSteps}', totalSteps.toString())}</p>
                  <div className="mt-1 bg-brand-neutral-200 dark:bg-brand-neutral-700 rounded-full h-2">
                    <div className="bg-brand-blue-600 h-2 rounded-full transition-all duration-500" style={{ width: `${(step / totalSteps) * 100}%` }}></div>
                  </div>
                </div>

                {currentQuestion && (
                  <fieldset className="mt-8">
                    <legend className="text-lg font-medium text-brand-neutral-900 dark:text-white">{currentQuestion.questionText}</legend>
                    <div className="mt-4 space-y-4">
                      {currentQuestion.options.map(option => (
                        <div key={option.value} className="flex items-center">
                          <input
                            id={`${currentQuestion.name}-${option.value}`}
                            name={currentQuestion.name}
                            type="radio"
                            value={option.value}
                            checked={answers[currentQuestion.name as keyof QuizAnswers] === option.value}
                            onChange={handleAnswerChange}
                            className="focus:ring-brand-blue-500 h-4 w-4 text-brand-blue-600 border-brand-neutral-300"
                          />
                          <label htmlFor={`${currentQuestion.name}-${option.value}`} className="ml-3 block text-sm font-medium text-brand-neutral-700 dark:text-brand-neutral-200">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                )}

                <div className="mt-8 flex justify-between">
                  <button
                    onClick={prevStep}
                    disabled={step === 1}
                    className="px-4 py-2 border border-brand-neutral-300 dark:border-brand-neutral-600 rounded-md shadow-sm text-sm font-medium text-brand-neutral-700 dark:text-brand-neutral-200 bg-white dark:bg-white/10 hover:bg-brand-neutral-50 dark:hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {t.backButton}
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!answers[currentQuestion?.name as keyof QuizAnswers]}
                    className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-blue-600 hover:bg-brand-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {step === totalSteps ? t.resultsButton : t.nextButton}
                  </button>
                </div>
              </>
            )}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Quiz;
