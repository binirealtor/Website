import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { translations } from '../translations';
import { Language } from '../types';

interface ContactProps {
  language: Language;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const t = translations[language];
  const [formState, setFormState] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    service: '', 
    language: '', 
    message: '' 
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
  };

  const inputStyles = "py-3 px-4 block w-full shadow-sm focus:ring-brand-blue-500 focus:border-brand-blue-500 border-brand-neutral-300 rounded-md bg-white/50 dark:bg-brand-neutral-900/50 dark:border-brand-neutral-600 dark:text-white dark:placeholder-brand-neutral-400";
  const labelStyles = "block text-sm font-medium text-brand-neutral-700 dark:text-brand-neutral-300";

  return (
    <div className="bg-white dark:bg-brand-neutral-900 py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-base font-semibold text-brand-blue-600 dark:text-brand-blue-400 tracking-wide uppercase">{t.contact.pageTitle}</h2>
            <p className="mt-2 text-3xl font-extrabold text-brand-neutral-900 dark:text-white sm:text-4xl">
              {t.contact.mainHeading}
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-brand-neutral-500 dark:text-brand-neutral-300">
              {t.contact.subheading}
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-16">
            <div className="lg:col-span-1">
              <div className="mt-10 space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 text-brand-blue-600 dark:text-brand-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
                  </div>
                  <div className="ml-4">
                      <h3 className="text-lg font-medium text-brand-neutral-900 dark:text-white">{t.contact.officeInfo.heading}</h3>
                      <p className="mt-1 text-brand-neutral-600 dark:text-brand-neutral-300"><strong>{t.footer.seattleOffice.city}:</strong> {t.footer.seattleOffice.address1}, {t.footer.seattleOffice.address2}</p>
                      <p className="mt-1 text-brand-neutral-600 dark:text-brand-neutral-300"><strong>{t.footer.bellevueOffice.city}:</strong> {t.footer.bellevueOffice.address1}, {t.footer.bellevueOffice.address2}</p>
                      <p className="mt-2 text-brand-neutral-500 dark:text-brand-neutral-400 text-sm">{t.contact.officeInfo.appointmentNote}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 text-brand-blue-600 dark:text-brand-blue-400">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                  </div>
                  <div className="ml-4">
                      <h3 className="text-lg font-medium text-brand-neutral-900 dark:text-white">{t.contact.emailInfo.heading}</h3>
                      <p className="mt-1 text-brand-neutral-600 dark:text-brand-neutral-300">info@aberralaw.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 text-brand-blue-600 dark:text-brand-blue-400">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                  </div>
                  <div className="ml-4">
                      <h3 className="text-lg font-medium text-brand-neutral-900 dark:text-white">{t.contact.phoneInfo.heading}</h3>
                      <p className="mt-1 text-brand-neutral-600 dark:text-brand-neutral-300">(206) 734-7614</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-1 glass-panel p-8 rounded-2xl">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center">
                  <h3 className="text-2xl font-bold text-brand-blue-800 dark:text-white">{t.contact.form.thankYou}</h3>
                  <p className="mt-2 text-center text-brand-neutral-600 dark:text-brand-neutral-300">{t.contact.form.submittedMessage}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className={labelStyles}>{t.contact.form.fullName.label}</label>
                    <div className="mt-1">
                      <input type="text" name="name" id="name" required value={formState.name} onChange={handleChange} className={inputStyles} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className={labelStyles}>{t.contact.form.email.label}</label>
                    <div className="mt-1">
                      <input id="email" name="email" type="email" autoComplete="email" required value={formState.email} onChange={handleChange} className={inputStyles} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelStyles}>{t.contact.form.phone.label}</label>
                    <div className="mt-1">
                      <input type="text" name="phone" id="phone" autoComplete="tel" value={formState.phone} onChange={handleChange} className={inputStyles} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className={labelStyles}>{t.contact.form.service.label}</label>
                    <div className="mt-1">
                      <select id="service" name="service" required value={formState.service} onChange={handleChange} className={inputStyles}>
                        <option value="" disabled>{t.contact.form.service.placeholder}</option>
                        {t.practiceAreas.map(area => (
                          <option key={area.title} value={area.title}>{area.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="language" className={labelStyles}>{t.contact.form.language.label}</label>
                    <div className="mt-1">
                      <select id="language" name="language" required value={formState.language} onChange={handleChange} className={inputStyles}>
                        <option value="" disabled>{t.contact.form.language.placeholder}</option>
                        {t.contact.form.language.options.map(lang => (
                            <option key={lang}>{lang}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className={labelStyles}>{t.contact.form.message.label}</label>
                    <div className="mt-1">
                      <textarea id="message" name="message" rows={4} required value={formState.message} onChange={handleChange} className={inputStyles}></textarea>
                    </div>
                  </div>
                  <div>
                    <button type="submit" className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-brand-blue-600 hover:bg-brand-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue-500 transition-transform transform hover:scale-105">
                      {t.contact.form.submitButton}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </AnimatedSection>
        
        {/* Google Maps Section */}
        <AnimatedSection className="mt-16 sm:mt-24">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-brand-neutral-900 dark:text-white sm:text-4xl">{t.contact.map.heading}</h2>
            </div>
            <div className="mt-8 aspect-w-16 aspect-h-9 rounded-2xl shadow-lg overflow-hidden">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.628892415518!2d-122.3365856843699!3d47.60839897918471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab3c38f1211%3A0x62656920d5656345!2s1001%204th%20Ave%2C%20Seattle%2C%20WA%2098154!5e0!3m2!1sen!2sus!4v1698357321680!5m2!1sen!2sus" 
                    width="600" 
                    height="450" 
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Seattle Office Location"
                    className="w-full h-full filter dark:grayscale dark:invert"
                ></iframe>
            </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Contact;
