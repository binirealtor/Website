import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Language } from '../types';
import { translations } from '../translations';
import { ChatBubbleOvalLeftEllipsisIcon, XMarkIcon, PaperAirplaneIcon } from '../constants';

interface AIChatWidgetProps {
    language: Language;
}

interface Message {
    sender: 'user' | 'ai';
    text: string;
}

const AIChatWidget: React.FC<AIChatWidgetProps> = ({ language }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const t = translations[language].aiChat;
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([{ sender: 'ai', text: t.welcomeMessage }]);
        }
    }, [isOpen, messages.length, t.welcomeMessage]);
    
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userInput.trim() || isLoading) return;

        const newMessages: Message[] = [...messages, { sender: 'user', text: userInput }];
        setMessages(newMessages);
        setUserInput('');
        setIsLoading(true);

        try {
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: `You are a helpful AI assistant for the Amsale Aberra Law Firm. Answer questions about U.S. immigration based on public knowledge. Do not provide legal advice. Always include a disclaimer that this is not legal advice and users should consult with an attorney. Question: "${userInput}"`,
            });
            const aiResponse = response.text;
            setMessages([...newMessages, { sender: 'ai', text: aiResponse }]);
        } catch (error) {
            console.error('Error fetching AI response:', error);
            setMessages([...newMessages, { sender: 'ai', text: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isOpen ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-brand-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-brand-blue-700 transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:ring-offset-2"
                    aria-label="Open AI Chat"
                >
                    <ChatBubbleOvalLeftEllipsisIcon className="h-8 w-8" />
                </button>
            </div>

            <div className={`fixed bottom-6 right-6 z-50 w-[calc(100%-3rem)] max-w-sm h-[70vh] max-h-[600px] transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                <div className="h-full flex flex-col glass-panel rounded-2xl shadow-2xl overflow-hidden">
                    <header className="flex items-center justify-between p-4 border-b border-white/20 dark:border-brand-neutral-700/50 flex-shrink-0">
                        <h3 className="font-bold text-brand-neutral-800 dark:text-white">{t.widgetTitle}</h3>
                        <button onClick={() => setIsOpen(false)} className="p-1 rounded-full text-brand-neutral-500 dark:text-brand-neutral-300 hover:bg-black/10 dark:hover:bg-white/10" aria-label="Close chat">
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                    </header>
                    <div className="flex-grow p-4 overflow-y-auto space-y-4">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-3 rounded-2xl ${msg.sender === 'user' ? 'bg-brand-blue-600 text-white rounded-br-lg' : 'bg-brand-neutral-200 dark:bg-brand-neutral-700 text-brand-neutral-800 dark:text-white rounded-bl-lg'}`}>
                                    <p className="text-sm">{msg.text}</p>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                             <div className="flex items-end gap-2 justify-start">
                                <div className="max-w-[80%] p-3 rounded-2xl bg-brand-neutral-200 dark:bg-brand-neutral-700 text-brand-neutral-800 dark:text-white rounded-bl-lg">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-brand-neutral-400 rounded-full animate-pulse"></div>
                                        <div className="w-2 h-2 bg-brand-neutral-400 rounded-full animate-pulse delay-150"></div>
                                        <div className="w-2 h-2 bg-brand-neutral-400 rounded-full animate-pulse delay-300"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                    <footer className="p-4 border-t border-white/20 dark:border-brand-neutral-700/50 flex-shrink-0">
                         <p className="text-xs text-center text-brand-neutral-500 dark:text-brand-neutral-400 mb-2">{t.disclaimer}</p>
                        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                            <input
                                type="text"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                placeholder={t.inputPlaceholder}
                                className="flex-grow py-2 px-4 block w-full shadow-sm focus:ring-brand-blue-500 focus:border-brand-blue-500 border-brand-neutral-300 rounded-full bg-white/50 dark:bg-brand-neutral-900/50 dark:border-brand-neutral-600 dark:text-white dark:placeholder-brand-neutral-400"
                                disabled={isLoading}
                            />
                            <button type="submit" disabled={isLoading || !userInput.trim()} className="p-2 rounded-full text-white bg-brand-blue-600 hover:bg-brand-blue-700 disabled:bg-brand-blue-300 dark:disabled:bg-brand-neutral-600 transition-colors">
                                <PaperAirplaneIcon className="h-5 w-5" />
                            </button>
                        </form>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default AIChatWidget;
