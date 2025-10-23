// FIX: Import React to use React.createElement for defining icon components without JSX.
import React from 'react';
import {
  UsersIcon,
  BriefcaseIcon,
  DocumentCheckIcon,
  AcademicCapIcon,
  LifebuoyIcon,
  ShieldCheckIcon
} from './constants';

export const translations = {
  en: {
    navLinks: [
      { key: 'Home', label: 'Home' },
      { key: 'About', label: 'About' },
      { key: 'Practice Areas', label: 'Practice Areas' },
      { key: 'Success Stories', label: 'Success Stories' },
      { key: 'Blog', label: 'Blog' },
    ],
    header: {
        firmName: 'Amsale Aberra Law',
        firmSubheading: 'Immigration Law Firm, PLLC',
        cta: 'Request a Consultation'
    },
    footer: {
        tagline: 'Your trusted partner in navigating U.S. immigration law.',
        navigation: 'Navigation',
        contactLink: 'Contact',
        legal: 'Legal',
        privacy: 'Privacy Policy',
        disclaimer: 'Disclaimer',
        contactUs: 'Contact Us',
        seattleOffice: {
            city: 'Seattle',
            address1: '1001 4th Ave Suite 3200',
            address2: 'Seattle, WA 98154'
        },
        bellevueOffice: {
            city: 'Bellevue',
            address1: '14205 SE 36th St. Suite 100',
            address2: 'Bellevue, WA 98006'
        },
        copyright: '© {year} Amsale Aberra Law, PLLC. All rights reserved.'
    },
    home: {
        hero: {
            headline: 'Guiding You Through Immigration with Care and Expertise',
            subheading: 'A Seattle and Bellevue based immigration law firm, we represent clients in asylum, family, and business immigration matters. Our experienced team has the exceptional skills to navigate complex U.S. immigration laws with dedication and compassion.',
            ctaPrimary: 'Schedule Your Consultation',
            ctaSecondary: 'Take Visa Eligibility Quiz',
        },
        services: {
            heading: 'Our Expertise',
            subheading: 'Immigration Law Practice Areas',
            description: 'We offer comprehensive legal support across all areas of U.S. immigration law.',
            viewAll: 'View All Practice Areas'
        },
        impact: {
            heading: 'Our Impact, Your Success',
            metrics: [
                { value: '100+', label: 'Clients Guided in 2024' },
                { value: '98%', label: 'Case Approval Rate' },
                { value: '15+', label: 'Languages Supported' }
            ]
        },
        languageServices: {
            heading: 'We Speak Your Language',
            description: 'To ensure clear communication and understanding, our office provides services in Amharic. We can also provide interpreters for other languages upon prior request. Your comfort and clarity are our priorities.'
        },
        successStories: {
            heading: 'Our Success Stories',
            subheading: 'Your trust is our greatest achievement. See how we\'ve helped clients like you.'
        },
        blog: {
            heading: 'Insights & News',
            subheading: 'From Our Legal Team',
            description: 'Stay informed with the latest updates and analysis on U.S. immigration law and policy.',
            viewAll: 'View All Insights'
        }
    },
    about: {
        pageTitle: 'About Our Firm',
        mainHeading: 'A Compassionate Advocate on Your Side',
        p1: 'Amsale Aberra is the founder and principal attorney of Amsale Aberra Law, PLLC. As a first-generation immigrant herself, she has a deep, personal understanding of the challenges and aspirations of those seeking to build a life in the United States. This firsthand experience fuels her passion for immigration law and her unwavering dedication to her clients.',
        p2: 'After graduating with honors from Seattle University School of Law, Amsale dedicated her career exclusively to the practice of U.S. immigration and nationality law. She has successfully represented a diverse range of clients, from multinational corporations to families and individuals, before U.S. Citizenship and Immigration Services (USCIS), the Department of State, and Immigration Courts.',
        missionHeading: 'Our Mission & Values',
        missionText: 'Our mission is to provide exceptional legal representation with empathy, integrity, and respect. We believe in open communication, meticulous preparation, and a client-centered approach to demystify the immigration process and achieve the best possible outcomes.',
        multilingualHeading: 'Multilingual Services',
        multilingualText: 'We are proud to serve our diverse community. Our team is fluent in Amharic. Interpreters for other languages are available upon request to ensure every client is heard and understood.',
    },
    practiceAreasPage: {
        pageTitle: 'Our Services',
        mainHeading: 'Guidance for Every Step of Your Journey',
        subheading: 'We are dedicated to helping clients navigate every aspect of U.S. immigration law with confidence and clarity.',
    },
    successStoriesPage: {
        pageTitle: 'Success Stories',
        mainHeading: 'Building Futures, Together',
        subheading: "We are proud to have been a part of so many successful immigration journeys. Here are some of their stories.",
        challengeHeading: "The Challenge",
        resolutionHeading: "Our Approach & Resolution"
    },
    blogPage: {
        pageTitle: 'Insights & News',
        mainHeading: 'From Our Legal Team',
        subheading: 'Stay informed with the latest updates and analysis on U.S. immigration law and policy.',
    },
    contact: {
        pageTitle: 'Contact Us',
        mainHeading: 'Let\'s Discuss Your Case',
        subheading: 'Please fill out the form below to schedule a confidential consultation with our legal team. We will respond to your inquiry promptly.',
        officeInfo: {
            heading: 'Our Offices',
            appointmentNote: '(Consultations by appointment only)',
        },
        emailInfo: {
            heading: 'Email',
        },
        phoneInfo: {
            heading: 'Phone',
        },
        map: {
            heading: 'Find Our Seattle Office'
        },
        form: {
            fullName: { label: 'Full Name' },
            email: { label: 'Email' },
            phone: { label: 'Phone Number (Optional)' },
            service: { 
                label: 'Service of Interest',
                placeholder: 'Please select a service'
            },
            language: { 
                label: 'Preferred Language',
                placeholder: 'Please select a language',
                options: ['English', 'Amharic', 'Afaan Oromoo', 'French', 'Other (please specify in message)']
            },
            message: { label: 'How can we help?' },
            submitButton: 'Send Message',
            thankYou: 'Thank You!',
            submittedMessage: 'Your message has been sent. Our team will get back to you as soon as possible.',
        }
    },
    cta: {
        heading: 'Ready to Start Your Immigration Journey?',
        subheading: "Let's discuss your case. We provide clear, honest, and effective legal guidance tailored to your unique situation.",
        buttonText: 'Request a Consultation'
    },
    aiChat: {
      widgetTitle: "AI Assistant",
      welcomeMessage: "Hello! I'm the AI assistant for Amsale Aberra Law. How can I help you with your immigration questions today?",
      inputPlaceholder: "Ask about visas, green cards...",
      disclaimer: "I am an AI assistant. This is not legal advice. For case-specific guidance, please schedule a consultation."
    },
    quiz: {
        pageTitle: 'Free Tool',
        mainHeading: 'Visa Eligibility Quiz',
        progressText: 'Step {step} of {totalSteps}',
        backButton: 'Back',
        nextButton: 'Next',
        resultsButton: 'See Results',
        questions: [
            {
                step: 1,
                questionText: 'What is the primary purpose of your visit to the U.S.?',
                name: 'purpose',
                options: [
                  { value: 'study', label: 'Study' },
                  { value: 'work', label: 'Work' },
                  { value: 'family', label: 'Joining Family' },
                  { value: 'visit', label: 'Tourism or Business Visit' },
                  { value: 'other', label: 'Other / Seeking Protection' },
                ],
            },
            {
                step: 2,
                questionText: 'What is your highest level of education?',
                name: 'education',
                options: [
                  { value: 'highschool', label: 'High School or equivalent' },
                  { value: 'bachelors', label: "Bachelor's Degree" },
                  { value: 'masters', label: "Master's Degree" },
                  { value: 'doctorate', label: 'Doctorate (PhD, MD, etc.)' },
                  { value: 'none', label: 'None of the above' },
                ],
            },
            {
                step: 3,
                questionText: 'Do you have a close relative who is a U.S. Citizen or a Lawful Permanent Resident (Green Card holder)?',
                name: 'hasUSRelative',
                options: [
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' },
                ],
            },
        ],
        results: {
            heading: 'Preliminary Guidance',
            subheading: 'Based on your answers, here are some potential visa categories that may be relevant to your situation. Please note this is not legal advice.',
            ctaButton: 'Schedule a Full Consultation',
            resetButton: 'Start Over',
            disclaimer: {
                heading: 'Important Disclaimer',
                text: 'This quiz is for informational purposes only and does not constitute legal advice or create an attorney-client relationship. Immigration law is complex and individual circumstances vary. For accurate legal guidance, please schedule a consultation.',
            },
            guidance: {
                study: 'F-1 Student Visa: For academic and language studies at accredited U.S. institutions.',
                visit: 'B-1/B-2 Visitor Visa: For tourism, temporary business meetings, or medical treatment.',
                workSpecialty: "H-1B Specialty Occupation Visa: For professionals in specialized fields with at least a bachelor's degree.",
                workIntracompany: 'L-1 Intracompany Transferee Visa: For employees of an international company with offices in both the U.S. and abroad.',
                workExtraordinary: 'O-1 Extraordinary Ability Visa: For individuals with extraordinary ability or achievement in sciences, arts, education, business, or athletics.',
                family: 'Family-Based Visas: Options may be available for spouses, children, parents, and siblings of U.S. citizens, or spouses and children of green card holders.',
                other: 'Asylum or Humanitarian Relief: For individuals unable to return to their home country due to persecution or other urgent humanitarian reasons.',
                default: "Your situation may require a more detailed analysis. We highly recommend a consultation to determine the best path forward."
            }
        }
    },
    practiceAreas: [
      {
        icon: (props) => React.createElement(UsersIcon, { ...props }),
        title: 'Family-Based Immigration',
        description: 'Reuniting families is our passion. We help with spouse visas, fiancée visas, and petitions for relatives.'
      },
      {
        icon: (props) => React.createElement(BriefcaseIcon, { ...props }),
        title: 'Employment-Based Visas',
        description: 'Navigating the complexities of work visas like H-1B, L-1, and employment-based green cards for professionals and businesses.'
      },
      {
        icon: (props) => React.createElement(DocumentCheckIcon, { ...props }),
        title: 'Citizenship & Naturalization',
        description: 'Achieve your dream of U.S. citizenship. We guide you through the entire naturalization process, from application to interview.'
      },
      {
        icon: (props) => React.createElement(AcademicCapIcon, { ...props }),
        title: 'Student Visas (F-1)',
        description: 'Assisting international students in obtaining and maintaining their F-1 visa status to pursue education in the United States.'
      },
      {
        icon: (props) => React.createElement(LifebuoyIcon, { ...props }),
        title: 'Asylum & Humanitarian Relief',
        description: 'Providing compassionate and skilled representation for individuals seeking asylum, humanitarian parole, and other forms of relief.'
      },
      {
        icon: (props) => React.createElement(ShieldCheckIcon, { ...props }),
        title: 'Deportation Defense',
        description: 'Vigorously defending our clients in removal proceedings. We explore every available option to keep you and your family together.'
      },
    ],
    successStories: [
      {
        practiceArea: 'Family-Based Immigration',
        practiceAreaKey: 'Practice Areas',
        challenge: "A U.S. citizen was separated from her spouse, who lived abroad, by complex consular processing delays and confusing requests for evidence. The couple was distressed by the prolonged separation and the uncertainty of their future together.",
        resolution: "Our firm took immediate action, liaising directly with the National Visa Center and the U.S. consulate abroad. We compiled a meticulously organized petition, preemptively addressing potential issues. By providing clear, compelling evidence and maintaining persistent communication with government agencies, we successfully expedited the case. The spouse's visa was approved, and the couple was reunited in Seattle within months, finally able to begin their life together.",
        client: { name: 'Maria & Luis S.', location: 'Seattle, WA' },
        image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&h=800&fit=crop'
      },
      {
        practiceArea: 'Employment-Based Visas',
        practiceAreaKey: 'Practice Areas',
        challenge: "A fast-growing Bellevue tech startup needed to hire a key software engineer with a unique skillset from India, but they were facing the daunting H-1B visa cap and lottery. A delay or denial would have severely impacted their product development timeline.",
        resolution: "We crafted a strong H-1B petition that highlighted the specialized nature of the role and the candidate's exceptional qualifications. We guided the company through every step of the lottery registration and filing process. The petition was selected and promptly approved. We then facilitated a smooth visa stamping process, enabling the engineer to join the team in Bellevue and make an immediate impact on their critical project.",
        client: { name: 'David C., Tech CEO', location: 'Bellevue, WA' },
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&h=800&fit=crop'
      },
      {
        practiceArea: 'Citizenship & Naturalization',
        practiceAreaKey: 'Practice Areas',
        challenge: "A long-term green card holder was eligible for U.S. citizenship but felt anxious about the complex application and the English and civics test. She had a minor travel history issue that she feared might complicate her case.",
        resolution: "Our team carefully reviewed her entire immigration history, addressing the travel issue with a clear and concise explanation in her N-400 application. We provided comprehensive study materials and conducted mock interviews to build her confidence for the exam. She passed her naturalization interview with flying colors and took the Oath of Allegiance, a proud and life-changing moment for her and her family.",
        client: { name: 'Fatima A.', location: 'Redmond, WA' },
        image: 'https://images.unsplash.com/photo-1600216835492-75c1b6a3b276?q=80&w=800&h=800&fit=crop'
      },
      {
        practiceArea: 'Asylum & Humanitarian Relief',
        practiceAreaKey: 'Practice Areas',
        challenge: "An individual fled their home country due to a credible fear of persecution. They arrived in the U.S. with limited evidence and faced the intimidating task of preparing an asylum application within the strict one-year deadline while dealing with significant trauma.",
        resolution: "We provided a safe and supportive environment for our client to share their story. Our team worked diligently to corroborate their claim with country conditions research and expert affidavits. We prepared a thorough asylum application and represented the client at their interview, ensuring their testimony was presented clearly and credibly. The client was granted asylum, providing them with the safety and stability to rebuild their life in the United States.",
        client: { name: 'Anonymous Client', location: 'Washington' },
        image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&h=800&fit=crop'
      }
    ],
    blogPosts: [
      {
        id: 1,
        title: 'Understanding the H-1B Visa Cap and Lottery Process',
        excerpt: 'The H-1B visa is highly sought after by professionals worldwide. This guide breaks down the annual cap, the lottery system, and key dates to remember.',
        imageUrl: 'https://picsum.photos/id/103/600/400',
        date: 'October 26, 2023',
        author: 'Amsale Aberra'
      },
      {
        id: 2,
        title: '5 Common Mistakes to Avoid in Your Green Card Application',
        excerpt: 'Applying for a green card is a meticulous process. Learn about the common pitfalls that can delay or derail your application and how to avoid them.',
        imageUrl: 'https://picsum.photos/id/211/600/400',
        date: 'September 15, 2023',
        author: 'Amsale Aberra'
      },
      {
        id: 3,
        title: 'Navigating the Path to U.S. Citizenship: A Step-by-Step Guide',
        excerpt: 'Becoming a U.S. citizen is a significant milestone. This article outlines the eligibility requirements, application process, and what to expect at your interview.',
        imageUrl: 'https://picsum.photos/id/23/600/400',
        date: 'August 01, 2023',
        author: 'Amsale Aberra'
      },
      {
        id: 4,
        title: 'What is Humanitarian Parole and Who is Eligible?',
        excerpt: 'Humanitarian parole can provide a temporary lifeline for individuals facing urgent circumstances. Discover the criteria and application process here.',
        imageUrl: 'https://picsum.photos/id/433/600/400',
        date: 'July 20, 2023',
        author: 'Amsale Aberra'
      },
    ],
  },
  am: {
    navLinks: [
      { key: 'Home', label: 'መነሻ' },
      { key: 'About', label: 'ስለ እኛ' },
      { key: 'Practice Areas', label: 'የአገልግሎት ዘርፎች' },
      { key: 'Success Stories', label: 'የስኬት ታሪኮች' },
      { key: 'Blog', label: 'ብሎግ' },
    ],
    header: {
        firmName: 'አምሳለ አበራ የህግ ቢሮ',
        firmSubheading: 'የኢሚግሬሽን የህግ ድርጅት, PLLC',
        cta: 'ምክክር ይጠይቁ'
    },
    footer: {
        tagline: 'በአሜሪካ የኢሚግሬሽን ህግ ጉዞ ላይ ታማኝ አጋርዎ።',
        navigation: 'ዳሰሳ',
        contactLink: 'እኛን ያግኙን',
        legal: 'ህጋዊ',
        privacy: 'የግላዊነት ፖሊሲ',
        disclaimer: 'የኃላፊነት ማስተባበያ',
        contactUs: 'እኛን ያግኙን',
        seattleOffice: {
            city: 'ሲያትል',
            address1: '1001 4ኛ አቬኑ ስዊት 3200',
            address2: 'ሲያትል, WA 98154'
        },
        bellevueOffice: {
            city: 'ቤልቪው',
            address1: '14205 SE 36ኛ ስትሪት ስዊት 100',
            address2: 'ቤልቪው, WA 98006'
        },
        copyright: '© {year} አምሳለ አበራ የህግ ቢሮ, PLLC. ሁሉም መብቶች የተጠበቁ ናቸው።'
    },
    home: {
        hero: {
            headline: 'በኢሚግሬሽን ጉዞዎ ላይ በእንክብካቤ እና በሙያዊ ብቃት እንመራዎታለን',
            subheading: 'በሲያትል እና ቤልቪው የሚገኝ የኢሚግሬሽን የህግ ድርጅት ሲሆን፣ በስደተኝነት፣ በቤተሰብ እና በንግድ የኢሚግሬሽን ጉዳዮች ላይ ደንበኞችን እንወክላለን። ልምድ ያለው ቡድናችን ውስብስብ የአሜሪካ የኢሚግሬሽን ህጎችን በቁርጠኝነት እና በርህራሄ የመምራት ልዩ ችሎታ አለው።',
            ctaPrimary: 'ምክክርዎን ቀጠሮ ያስይዙ',
            ctaSecondary: 'የቪዛ ብቁነት ጥያቄዎችን ይውሰዱ',
        },
        services: {
            heading: 'የእኛ ሙያ',
            subheading: 'የኢሚግሬሽን ህግ የአገልግሎት ዘርፎች',
            description: 'በሁሉም የአሜሪካ የኢሚግሬሽን ህግ ዘርፎች ላይ አጠቃላይ የህግ ድጋፍ እንሰጣለን።',
            viewAll: 'ሁሉንም የአገልግሎት ዘርፎች ይመልከቱ'
        },
        impact: {
            heading: 'የእኛ ተጽዕኖ፣ የእርስዎ ስኬት',
            metrics: [
                { value: '100+', label: 'በ2024 የተመሩ ደንበኞች' },
                { value: '98%', label: 'የጉዳይ ማጽደቅ መጠን' },
                { value: '15+', label: 'የሚደገፉ ቋንቋዎች' }
            ]
        },
        languageServices: {
            heading: 'ቋንቋዎን እንናገራለን',
            description: 'ግልጽ የሆነ ግንኙነት እና መግባባትን ለማረጋገጥ፣ ቢሮአችን በአማርኛ አገልግሎት ይሰጣል። በቅድሚያ ሲጠየቅ ለሌሎች ቋንቋዎች አስተርጓሚዎችን ማቅረብ እንችላለን። የእርስዎ ምቾት እና ግልጽነት ቅድሚያ የምንሰጣቸው ጉዳዮች ናቸው።'
        },
        successStories: {
            heading: 'የእኛ የስኬት ታሪኮች',
            subheading: 'የእርስዎ እምነት ትልቁ ስኬታችን ነው። እንደ እርስዎ ላሉ ደንበኞች እንዴት እንደረዳን ይመልከቱ።'
        },
        blog: {
            heading: 'አስተያየቶች እና ዜናዎች',
            subheading: 'ከህግ ቡድናችን',
            description: 'በአሜሪካ የኢሚግሬሽን ህግ እና ፖሊሲ ላይ ወቅታዊ መረጃዎችን እና ትንታኔዎችን ያግኙ።',
            viewAll: 'ሁሉንም አስተያየቶች ይመልከቱ'
        }
    },
     about: {
        pageTitle: 'ስለ ድርጅታችን',
        mainHeading: 'ከጎንዎ የምትቆም አዛኝ ጠበቃ',
        p1: 'አምሳለ አበራ የአምሳለ አበራ የህግ ቢሮ, PLLC መስራች እና ዋና ጠበቃ ናት። እራሷ የመጀመሪያ ትውልድ ስደተኛ እንደመሆኗ፣ በአሜሪካ ውስጥ ህይወትን ለመገንባት የሚፈልጉትን ሰዎች ተግዳሮቶች እና ምኞቶች ጥልቅ፣ ግላዊ ግንዛቤ አላት። ይህ የመጀመሪያ እጅ ተሞክሮ ለኢሚግሬሽን ህግ ያላትን ፍቅር እና ለደንበኞቿ ያላትን ጽኑ ቁርጠኝነት ያነሳሳል።',
        p2: 'ከሲያትል ዩኒቨርሲቲ የህግ ትምህርት ቤት በክብር ከተመረቀች በኋላ፣ አምሳለ ስራዋን ሙሉ በሙሉ ለአሜሪካ የኢሚግሬሽን እና የዜግነት ህግ ልምምድ ሰጥታለች። ከአገር አቋራጭ ኮርፖሬሽኖች እስከ ቤተሰቦች እና ግለሰቦች ድረስ የተለያዩ ደንበኞችን በአሜሪካ የዜግነት እና የኢሚግሬሽን አገልግሎቶች (USCIS)፣ በውጭ ጉዳይ ሚኒስቴር እና በኢሚግሬሽን ፍርድ ቤቶች ፊት በተሳካ ሁኔታ ወክላለች።',
        missionHeading: 'የእኛ ተልዕኮ እና እሴቶች',
        missionText: 'የእኛ ተልዕኮ በርህራሄ፣ በታማኝነት እና በአክብሮት ልዩ የህግ ውክልና መስጠት ነው። በግልጽ ግንኙነት፣ በጥንቃቄ ዝግጅት እና የኢሚግሬሽን ሂደቱን ለማቃለል እና የተሻለውን ውጤት ለማምጣት በደንበኛ ላይ ያተኮረ አካሄድ እናምናለን።',
        multilingualHeading: 'ባለብዙ ቋንቋ አገልግሎቶች',
        multilingualText: 'የተለያየውን ማህበረሰባችንን በማገልገል ኩራት ይሰማናል። ቡድናችን አማርኛን አቀላጥፎ ይናገራል። እያንዳንዱ ደንበኛ መሰማቱን እና መረዳቱን ለማረጋገጥ በቅድሚያ ሲጠየቅ ለሌሎች ቋንቋዎች አስተርጓሚዎች ይገኛሉ።',
    },
    practiceAreasPage: {
        pageTitle: 'አገልግሎቶቻችን',
        mainHeading: 'ለጉዞዎ እያንዳንዱ እርምጃ መመሪያ',
        subheading: 'ደንበኞች እያንዳንዱን የአሜሪካ የኢሚግሬሽን ህግ ገጽታ በልበ ሙሉነት እና በግልጽነት እንዲጓዙ ለመርዳት ቆርጠናል።',
    },
    successStoriesPage: {
        pageTitle: 'የስኬት ታሪኮች',
        mainHeading: 'ወደፊትን በጋራ መገንባት',
        subheading: "የብዙ ስኬታማ የኢሚግሬሽን ጉዞዎች አካል በመሆናችን ኩራት ይሰማናል። ከታሪኮቻቸው ጥቂቶቹ እነሆ።",
        challengeHeading: "ተግዳሮቱ",
        resolutionHeading: "የእኛ አካሄድ እና መፍትሄ"
    },
    blogPage: {
        pageTitle: 'አስተያየቶች እና ዜናዎች',
        mainHeading: 'ከህግ ቡድናችን',
        subheading: 'በአሜሪካ የኢሚግሬሽን ህግ እና ፖሊሲ ላይ ወቅታዊ መረጃዎችን እና ትንታኔዎችን ያግኙ።',
    },
    contact: {
        pageTitle: 'እኛን ያግኙን',
        mainHeading: 'ስለ ጉዳይዎ እንወያይ',
        subheading: 'ከህግ ቡድናችን ጋር ሚስጥራዊ ምክክር ለማዘጋጀት እባክዎ ከዚህ በታች ያለውን ቅጽ ይሙሉ። ለጥያቄዎ በፍጥነት ምላሽ እንሰጣለን።',
        officeInfo: {
            heading: 'የእኛ ቢሮዎች',
            appointmentNote: '(ምክክር በቀጠሮ ብቻ)',
        },
        emailInfo: {
            heading: 'ኢሜይል',
        },
        phoneInfo: {
            heading: 'ስልክ',
        },
        map: {
            heading: 'የሲያትል ቢሮአችንን ያግኙ'
        },
        form: {
            fullName: { label: 'ሙሉ ስም' },
            email: { label: 'ኢሜይል' },
            phone: { label: 'ስልክ ቁጥር (አስገዳጅ ያልሆነ)' },
            service: { 
                label: 'የሚፈልጉት አገልግሎት',
                placeholder: 'እባክዎ አገልግሎት ይምረጡ'
            },
            language: { 
                label: 'የሚመርጡት ቋንቋ',
                placeholder: 'እባክዎ ቋንቋ ይምረጡ',
                options: ['እንግሊዝኛ', 'አማርኛ', 'አፋን ኦሮሞ', 'ፈረንሳይኛ', 'ሌላ (እባክዎ በመልዕክቱ ውስጥ ይግለጹ)']
            },
            message: { label: 'እንዴት ልንረዳዎ እንችላለን?' },
            submitButton: 'መልዕክት ይላኩ',
            thankYou: 'እናመሰግናለን!',
            submittedMessage: 'መልዕክትዎ ተልኳል። ቡድናችን በተቻለ ፍጥነት ወደ እርስዎ ይመለሳል።',
        }
    },
    cta: {
        heading: 'የኢሚግሬሽን ጉዞዎን ለመጀመር ዝግጁ ነዎት?',
        subheading: 'ስለ ጉዳይዎ እንወያይ። ለየት ያለ ሁኔታዎ የተዘጋጀ ግልጽ፣ ታማኝ እና ውጤታማ የህግ መመሪያ እንሰጣለን።',
        buttonText: 'ምክክር ይጠይቁ'
    },
    aiChat: {
        widgetTitle: "AI ረዳት",
        welcomeMessage: "ሰላም! እኔ የአምሳለ አበራ የህግ ቢሮ AI ረዳት ነኝ። ዛሬ በኢሚግሬሽን ጥያቄዎችዎ እንዴት ልረዳዎት እችላለሁ?",
        inputPlaceholder: "ስለ ቪዛ፣ ግሪን ካርድ ይጠይቁ...",
        disclaimer: "እኔ AI ረዳት ነኝ። ይህ የህግ ምክር አይደለም። ለጉዳይዎ የተለየ መመሪያ ለማግኘት፣ እባክዎ ምክክር ቀጠሮ ያስይዙ።"
    },
    quiz: {
        pageTitle: 'ነፃ መሳሪያ',
        mainHeading: 'የቪዛ ብቁነት ጥያቄዎች',
        progressText: 'ደረጃ {step} ከ {totalSteps}',
        backButton: 'ተመለስ',
        nextButton: 'ቀጣይ',
        resultsButton: 'ውጤቶችን ይመልከቱ',
        questions: [
            {
                step: 1,
                questionText: 'ወደ አሜሪካ የመምጣትዎ ዋና አላማ ምንድነው?',
                name: 'purpose',
                options: [
                    { value: 'study', label: 'ትምህርት' },
                    { value: 'work', label: 'ስራ' },
                    { value: 'family', label: 'ቤተሰብን መቀላቀል' },
                    { value: 'visit', label: 'ቱሪዝም ወይም የንግድ ጉብኝት' },
                    { value: 'other', label: 'ሌላ / ጥበቃ መፈለግ' },
                ],
            },
            {
                step: 2,
                questionText: 'ከፍተኛ የትምህርት ደረጃዎ ምንድነው?',
                name: 'education',
                options: [
                    { value: 'highschool', label: 'የሁለተኛ ደረጃ ትምህርት ወይም ተመጣጣኝ' },
                    { value: 'bachelors', label: 'የባችለር ዲግሪ' },
                    { value: 'masters', label: 'የማስተርስ ዲግሪ' },
                    { value: 'doctorate', label: 'ዶክትሬት (PhD, MD, ወዘተ)' },
                    { value: 'none', label: 'ከላይ ከተጠቀሱት ውስጥ አንዳቸውም' },
                ],
            },
            {
                step: 3,
                questionText: 'የአሜሪካ ዜጋ ወይም ህጋዊ ነዋሪ (ግሪን ካርድ ያዥ) የሆነ የቅርብ ዘመድ አለዎት?',
                name: 'hasUSRelative',
                options: [
                  { value: 'yes', label: 'አዎ' },
                  { value: 'no', label: 'የለም' },
                ],
            },
        ],
        results: {
            heading: 'ቅድመ-ይሁንታ መመሪያ',
            subheading: 'በሰጡት መልሶች መሰረት፣ ከሁኔታዎ ጋር ሊዛመዱ የሚችሉ አንዳንድ የቪዛ ምድቦች ከዚህ በታች ቀርበዋል። እባክዎ ይህ የህግ ምክር እንዳልሆነ ልብ ይበሉ።',
            ctaButton: 'ሙሉ ምክክር ቀጠሮ ያስይዙ',
            resetButton: 'እንደገና ጀምር',
            disclaimer: {
                heading: 'ጠቃሚ ማስተባበያ',
                text: 'ይህ ጥያቄ ለመረጃ አገልግሎት ብቻ የቀረበ ሲሆን የህግ ምክር አይሰጥም ወይም የጠበቃ-ደንበኛ ግንኙነት አይፈጥርም። የኢሚግሬሽን ህግ ውስብስብ ሲሆን የግለሰቦች ሁኔታ ይለያያል። ለትክክለኛ የህግ መመሪያ፣ እባክዎ ምክክር ቀጠሮ ያስይዙ።',
            },
            guidance: {
                study: 'F-1 የተማሪ ቪዛ: እውቅና ባላቸው የአሜሪካ ተቋማት ውስጥ ለአካዳሚክ እና ለቋንቋ ጥናቶች።',
                visit: 'B-1/B-2 የጎብኚ ቪዛ: ለቱሪዝም፣ ለጊዜያዊ የንግድ ስብሰባዎች ወይም ለህክምና።',
                workSpecialty: 'H-1B ልዩ የሙያ ቪዛ: ቢያንስ የባችለር ዲግሪ ላላቸው በልዩ መስኮች ውስጥ ላሉ ባለሙያዎች።',
                workIntracompany: 'L-1 የድርጅት ውስጥ ዝውውር ቪዛ: በአሜሪካም ሆነ በውጭ አገር ቢሮዎች ላሏቸው ዓለም አቀፍ ኩባንያዎች ሰራተኞች።',
                workExtraordinary: 'O-1 ልዩ ችሎታ ቪዛ: በሳይንስ፣ በኪነጥበብ፣ በትምህርት፣ በንግድ ወይም በአትሌቲክስ ልዩ ችሎታ ወይም ስኬት ላላቸው ግለሰቦች።',
                family: 'በቤተሰብ ላይ የተመሰረቱ ቪዛዎች: ለአሜሪካ ዜጎች የትዳር ጓደኞች፣ ልጆች፣ ወላጆች እና እህትማማቾች ወይም የግሪን ካርድ ያዦች የትዳር ጓደኞች እና ልጆች አማራጮች ሊኖሩ ይችላሉ።',
                other: 'የስደተኝነት ወይም የሰብአዊ እርዳታ: በስደት ወይም በሌሎች አስቸኳይ ሰብአዊ ምክንያቶች ወደ አገራቸው መመለስ ለማይችሉ ግለሰቦች።',
                default: "የእርስዎ ሁኔታ የበለጠ ዝርዝር ትንታኔ ሊፈልግ ይችላል። የተሻለውን መንገድ ለመወሰን ምክክር እንዲያደርጉ አበክረን እንመክራለን።"
            }
        }
    },
    practiceAreas: [
      {
        icon: (props) => React.createElement(UsersIcon, { ...props }),
        title: 'በቤተሰብ ላይ የተመሰረተ ኢሚግሬሽን',
        description: 'ቤተሰቦችን ማገናኘት የእኛ ፍላጎት ነው። በትዳር ጓደኛ ቪዛ፣ በእጮኛ ቪዛ እና ለዘመዶች በሚቀርቡ ማመልከቻዎች እንረዳለን።'
      },
      {
        icon: (props) => React.createElement(BriefcaseIcon, { ...props }),
        title: 'በስራ ላይ የተመሰረቱ ቪዛዎች',
        description: 'እንደ H-1B, L-1 ያሉ የስራ ቪዛዎችን እና ለባለሙያዎች እና ለንግዶች በስራ ላይ የተመሰረቱ ግሪን ካርዶችን ውስብስብነት ማስተናገድ።'
      },
      {
        icon: (props) => React.createElement(DocumentCheckIcon, { ...props }),
        title: 'ዜግነት እና ናቹራላይዜሽን',
        description: 'የአሜሪካ ዜጋ የመሆን ህልምዎን እውን ያድርጉ። ከመጀመሪያው ማመልከቻ እስከ ቃለ መጠይቅ ድረስ በሙሉ የናቹራላይዜሽን ሂደት ውስጥ እንመራዎታለን።'
      },
      {
        icon: (props) => React.createElement(AcademicCapIcon, { ...props }),
        title: 'የተማሪ ቪዛ (F-1)',
        description: 'ዓለም አቀፍ ተማሪዎች በአሜሪካ ውስጥ ትምህርታቸውን ለመከታተል የ F-1 ቪዛ ሁኔታቸውን እንዲያገኙ እና እንዲጠብቁ መርዳት።'
      },
      {
        icon: (props) => React.createElement(LifebuoyIcon, { ...props }),
        title: 'የስደተኝነት እና የሰብአዊ እርዳታ',
        description: 'የስደተኝነት፣ የሰብአዊ ፓሮል እና ሌሎች የእርዳታ አይነቶችን ለሚሹ ግለሰቦች በርህራሄ እና በሙያዊ ብቃት የተሞላ ውክልና መስጠት።'
      },
      {
        icon: (props) => React.createElement(ShieldCheckIcon, { ...props }),
        title: 'ከአገር መባረር መከላከያ',
        description: 'ደንበኞቻችንን በማስወገድ ሂደቶች ውስጥ በብርቱ እንከላከላለን። እርስዎን እና ቤተሰብዎን አንድ ላይ ለማቆየት ያሉትን ሁሉንም አማራጮች እንመረምራለን።'
      },
    ],
    successStories: [
      {
        practiceArea: 'በቤተሰብ ላይ የተመሰረተ ኢሚግሬሽን',
        practiceAreaKey: 'Practice Areas',
        challenge: "አንድ የአሜሪካ ዜጋ በውጭ አገር ከሚኖረው የትዳር ጓደኛው ጋር በተወሳሰቡ የቆንስላ ሂደት መዘግየቶች እና ግራ በሚያጋቡ የመረጃ ጥያቄዎች ተለያይቶ ነበር። ጥንዶቹ በረጅም ጊዜ መለያየት እና ስለወደፊታቸው እርግጠኛ አለመሆን ተጨንቀው ነበር።",
        resolution: "ድርጅታችን ወዲያውኑ እርምጃ ወስዶ ከብሔራዊ የቪዛ ማእከል እና በውጭ ካለው የአሜሪካ ቆንስላ ጋር በቀጥታ ተገናኘ። በጥንቃቄ የተደራጀ ማመልከቻ በማዘጋጀት ሊከሰቱ የሚችሉ ችግሮችን አስቀድመን ፈታን። ግልጽ እና አሳማኝ ማስረጃዎችን በማቅረብ እና ከመንግስት ኤጀንሲዎች ጋር የማያቋርጥ ግንኙነት በመጠበቅ ጉዳዩን በተሳካ ሁኔታ አፋጠንን። የትዳር ጓደኛው ቪዛ ጸድቆ፣ ጥንዶቹ በሲያትል ውስጥ በወራት ጊዜ ውስጥ እንደገና ተገናኙ፣ በመጨረሻም አብረው ህይወታቸውን መጀመር ቻሉ።",
        client: { name: 'ማሪያ እና ሉዊስ ኤስ.', location: 'ሲያትል, WA' },
        image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&h=800&fit=crop'
      },
      {
        practiceArea: 'በስራ ላይ የተመሰረቱ ቪዛዎች',
        practiceAreaKey: 'Practice Areas',
        challenge: "በፍጥነት እያደገ ያለ የቤልቪው የቴክኖሎጂ ጀማሪ ኩባንያ ከህንድ ልዩ ችሎታ ያለው ቁልፍ የሶፍትዌር መሃንዲስ መቅጠር ነበረበት፣ ነገር ግን ከአስፈሪው የ H-1B ቪዛ ገደብ እና ሎተሪ ጋር ተጋፍጠው ነበር። መዘግየት ወይም ውድቅ መደረግ የምርት ልማት የጊዜ ሰሌዳቸውን በእጅጉ ይጎዳ ነበር።",
        resolution: "የስራውን ልዩ ባህሪ እና የእጩውን ልዩ ብቃት የሚያጎላ ጠንካራ የ H-1B ማመልከቻ አዘጋጀን። ኩባንያውን በሎተሪ ምዝገባ እና በማመልከቻ ሂደት እያንዳንዱ ደረጃ መራነው። ማመልከቻው ተመርጦ ወዲያውኑ ጸደቀ። ከዚያም ለስላሳ የቪዛ ማህተም ሂደትን አመቻችተን፣ መሃንዲሱ በቤልቪው ውስጥ ቡድኑን እንዲቀላቀል እና ወሳኝ በሆነው ፕሮጀክታቸው ላይ ወዲያውኑ ተጽዕኖ እንዲያሳድር አስችለነዋል።",
        client: { name: 'ዳዊት ሲ.፣ የቴክኖሎጂ ዋና ሥራ አስፈጻሚ', location: 'ቤልቪው, WA' },
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&h=800&fit=crop'
      },
      {
        practiceArea: 'ዜግነት እና ናቹራላይዜሽን',
        practiceAreaKey: 'Practice Areas',
        challenge: "ለረጅም ጊዜ የግሪን ካርድ ያዥ የነበረች ሴት ለአሜሪካ ዜግነት ብቁ ነበረች ነገር ግን ስለ ውስብስብ ማመልከቻው እና ስለ እንግሊዝኛ እና የሲቪክስ ፈተናው ትጨነቅ ነበር። ጉዳዩን ሊያወሳስብ ይችላል ብላ የፈራችው සුළු የጉዞ ታሪክ ችግር ነበራት።",
        resolution: "ቡድናችን ሙሉ የኢሚግሬሽን ታሪኳን በጥንቃቄ በመገምገም የጉዞ ጉዳዩን በ N-400 ማመልከቻዋ ውስጥ ግልጽ እና አጭር ማብራሪያ ሰጥቷል። ለፈተናው በራስ መተማመኗን ለመገንባት አጠቃላይ የጥናት ቁሳቁሶችን አቅርበን እና የሙከራ ቃለ-መጠይቆችን አካሂደናል። የናቹራላይዜሽን ቃለ-መጠይቋን በከፍተኛ ውጤት አልፋ የታማኝነት ቃለ መሃላ ፈጸመች፣ ይህም ለእሷ እና ለቤተሰቧ ኩራት እና ህይወትን የሚቀይር ጊዜ ነበር።",
        client: { name: 'ፋጢማ ኤ.', location: 'ሬድመንድ, WA' },
        image: 'https://images.unsplash.com/photo-1600216835492-75c1b6a3b276?q=80&w=800&h=800&fit=crop'
      },
      {
        practiceArea: 'የስደተኝነት እና የሰብአዊ እርዳታ',
        practiceAreaKey: 'Practice Areas',
        challenge: "አንድ ግለሰብ በሚታመን የስደት ፍራቻ ምክንያት ከትውልድ አገሩ ሸሽቷል። ውስን ማስረጃ ይዞ አሜሪካ ደርሶ ከባድ የስሜት ቀውስ እያስተናገደ ጥብቅ በሆነው የአንድ አመት የጊዜ ገደብ ውስጥ የጥገኝነት ማመልከቻ የማዘጋጀት አስፈሪ ተግባር ገጥሞት ነበር።",
        resolution: "ደንበኛችን ታሪኩን እንዲያካፍል አስተማማኝ እና ደጋፊ አካባቢ አዘጋጅተናል። ቡድናችን የይገባኛል ጥያቄውን ከአገር ሁኔታዎች ምርምር እና ከባለሙያዎች ምስክርነት ጋር በማገናኘት በትጋት ሰርቷል። የተሟላ የጥገኝነት ማመልከቻ አዘጋጅተን ደንበኛውን በቃለ-መጠይቁ ላይ ወክለናል፣ ምስክርነቱ በግልጽ እና በሚታመን ሁኔታ መቅረቡን አረጋግጠናል። ደንበኛው ጥገኝነት ተሰጥቶታል፣ ይህም በአሜሪካ ውስጥ ህይወቱን እንደገና ለመገንባት የሚያስፈልገውን ደህንነት እና መረጋጋት ሰጥቶታል።",
        client: { name: 'ስሙ ያልተገለጸ ደንበኛ', location: 'ዋሽንግተን' },
        image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&h=800&fit=crop'
      }
    ],
    blogPosts: [
      {
        id: 1,
        title: 'የ H-1B ቪዛ ገደብ እና የሎተሪ ሂደትን መረዳት',
        excerpt: 'የ H-1B ቪዛ በዓለም ዙሪያ ባሉ ባለሙያዎች ዘንድ ከፍተኛ ፍላጎት አለው። ይህ መመሪያ ዓመታዊውን ገደብ፣ የሎተሪ ስርዓቱን እና ሊታወሱ የሚገባቸው ቁልፍ ቀኖችን ያብራራል።',
        imageUrl: 'https://picsum.photos/id/103/600/400',
        date: 'ጥቅምት 26, 2023',
        author: 'አምሳለ አበራ'
      },
      {
        id: 2,
        title: 'በግሪን ካርድ ማመልከቻዎ ውስጥ ሊወገዱ የሚገባቸው 5 የተለመዱ ስህተቶች',
        excerpt: 'ለግሪን ካርድ ማመልከት ጥንቃቄ የተሞላበት ሂደት ነው። ማመልከቻዎን ሊያዘገዩ ወይም ሊያበላሹ የሚችሉ የተለመዱ ስህተቶችን እና እንዴት ማስወገድ እንደሚችሉ ይወቁ።',
        imageUrl: 'https://picsum.photos/id/211/600/400',
        date: 'መስከረም 15, 2023',
        author: 'አምሳለ አበራ'
      },
      {
        id: 3,
        title: 'ወደ አሜሪካ ዜግነት የሚወስደውን መንገድ ማሰስ፡ ደረጃ በደረጃ መመሪያ',
        excerpt: 'የአሜሪካ ዜጋ መሆን ትልቅ ምዕራፍ ነው። ይህ ጽሑፍ የብቁነት መስፈርቶችን፣ የማመልከቻ ሂደቱን እና በቃለ መጠይቅዎ ላይ ምን እንደሚጠብቁ ይዘረዝራል።',
        imageUrl: 'https://picsum.photos/id/23/600/400',
        date: 'ነሐሴ 01, 2023',
        author: 'አምሳለ አበራ'
      },
      {
        id: 4,
        title: 'ሰብአዊ ፓሮል ምንድነው እና ማን ብቁ ነው?',
        excerpt: 'ሰብአዊ ፓሮል አስቸኳይ ሁኔታዎች ላጋጠማቸው ግለሰቦች ጊዜያዊ መፍትሄ ሊሰጥ ይችላል። መስፈርቶቹን እና የማመልከቻ ሂደቱን እዚህ ያግኙ።',
        imageUrl: 'https://picsum.photos/id/433/600/400',
        date: 'ሐምሌ 20, 2023',
        author: 'አምሳለ አበራ'
      },
    ],
  },
};
