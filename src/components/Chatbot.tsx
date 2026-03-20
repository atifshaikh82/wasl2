import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Minus, Plus, Send, Bot, User } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { Link } from 'react-router-dom';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

const SYSTEM_INSTRUCTION = `You are a helpful assistant for Wasl Tech. 
You must reply to the point in **bold letters**. 
Be short, concise, and to the point. 
If the user asks for pricing for a specific service, you must provide the pricing page link: /pricing.
Knowledgebase: We do Web Apps, Mobile Apps, AI Solutions, SEO, Marketing, Social Media.`;

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'model', text: '**Hello! How can I help you today?**' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [fontSize, setFontSize] = useState(14); // Default font size
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null);

  useEffect(() => {
    if (!chatRef.current) {
      chatRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        }
      });
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isTyping || !chatRef.current) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', text: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await chatRef.current.sendMessage({ message: userMessage.text });
      
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: response.text || '**I am sorry, I could not process that.**'
      }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: '**Sorry, I am having trouble connecting right now.**'
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const renderMessageText = (text: string) => {
    // Simple bold markdown parser and link parser
    const parts = text.split(/(\*\*.*?\*\*|\/pricing)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      if (part === '/pricing') {
        return <Link key={i} to="/pricing" className="text-[#8cc63f] underline hover:text-[#9ddb45]">/pricing</Link>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-[#8cc63f] text-[#050505] flex items-center justify-center shadow-[0_0_20px_rgba(140,198,63,0.3)] hover:bg-[#9ddb45] transition-colors ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 left-6 z-50 w-[350px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-6rem)] bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#8cc63f]/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-[#8cc63f]" />
                </div>
                <span className="font-semibold text-white">Wasl Tech Assistant</span>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setFontSize(prev => Math.max(12, prev - 2))}
                  className="p-1.5 rounded bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  title="Decrease Font Size"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setFontSize(prev => Math.min(24, prev + 2))}
                  className="p-1.5 rounded bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  title="Increase Font Size"
                >
                  <Plus className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors ml-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ fontSize: `${fontSize}px` }}>
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    msg.role === 'user' 
                      ? 'bg-[#8cc63f] text-[#050505]' 
                      : 'bg-white/10 text-white'
                  }`}>
                    {renderMessageText(msg.text)}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl px-4 py-2 bg-white/10 text-gray-400 flex items-center gap-2">
                    <span className="animate-pulse">Typing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-white/5">
              <form onSubmit={handleSend} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-black/50 border border-white/10 rounded-full px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#8cc63f]/50 transition-colors"
                />
                <button 
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="w-10 h-10 rounded-full bg-[#8cc63f] text-[#050505] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#9ddb45] transition-colors shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <div className="text-center mt-3">
                <span className="text-[10px] text-gray-500 uppercase tracking-wider">Powered by Parki Limited, UK</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
