import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  Send,
  Volume2
} from 'lucide-react';
import { useHeritage } from '../context/HeritageContext';
import { AI_PERSONAS, type AIPersona, getSimulatedAIResponse } from '../data/aiKnowledgeBase';

interface Message {
  id: string;
  sender: 'user' | 'persona';
  text: string;
  timestamp: string;
}

export const AIStorytellerPage: React.FC = () => {
  const { addPoints, playSimulatedAudio } = useHeritage();

  const [selectedPersona, setSelectedPersona] = useState<AIPersona>(AI_PERSONAS[0]);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm1',
      sender: 'persona',
      text: AI_PERSONAS[0].intro,
      timestamp: 'Just now'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSelectPersona = (persona: AIPersona) => {
    setSelectedPersona(persona);
    setMessages([
      {
        id: 'welcome-' + Date.now(),
        sender: 'persona',
        text: persona.intro,
        timestamp: 'Just now'
      }
    ]);
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query || isTyping) return;

    const userMsg: Message = {
      id: 'user-' + Date.now(),
      sender: 'user',
      text: query,
      timestamp: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI reasoning delay
    setTimeout(() => {
      const aiReply = getSimulatedAIResponse(selectedPersona.id, query);
      const personaMsg: Message = {
        id: 'persona-' + Date.now(),
        sender: 'persona',
        text: aiReply,
        timestamp: 'Just now'
      };
      setMessages(prev => [...prev, personaMsg]);
      setIsTyping(false);
      addPoints(15, `Consulted ${selectedPersona.name}`);
    }, 1200);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-24">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#E5B842] text-xs font-semibold uppercase tracking-wider">
          <Bot className="w-4 h-4" />
          <span>Interactive Oral AI Simulation</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#FBF9F5]">
          Talk to Your Heritage
        </h1>
        <p className="text-xs sm:text-sm text-[#A3A8B8]">
          Converse with four simulated cultural custodians—ask about ancient techniques, kitchen alchemy, desert survival, and sacred architecture.
        </p>
      </div>

      {/* Persona Selection Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {AI_PERSONAS.map(persona => {
          const isSelected = selectedPersona.id === persona.id;
          return (
            <button
              key={persona.id}
              type="button"
              onClick={() => handleSelectPersona(persona)}
              className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                isSelected
                  ? 'bg-gradient-to-br from-[#181B2A] to-[#0C0D14] border-[#E5B842] shadow-lg shadow-[#D4AF37]/20 scale-[1.02]'
                  : 'bg-[#0F111A] border-white/10 hover:border-white/20'
              }`}
            >
              <img
                src={persona.avatar}
                alt={persona.name}
                className="w-11 h-11 rounded-xl object-cover border border-white/10 shrink-0"
              />
              <div className="overflow-hidden">
                <h4
                  className={`text-xs font-bold truncate ${
                    isSelected ? 'text-[#E5B842]' : 'text-[#FBF9F5]'
                  }`}
                >
                  {persona.name}
                </h4>
                <p className="text-[10px] text-[#A3A8B8] truncate">{persona.role}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Chat Container */}
      <div className="rounded-3xl bg-[#0F111A] border border-[#D4AF37]/30 shadow-2xl overflow-hidden flex flex-col h-[560px]">
        {/* Active Persona Header */}
        <div className="px-6 py-3.5 bg-[#0C0D14] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={selectedPersona.avatar}
              alt={selectedPersona.name}
              className="w-9 h-9 rounded-full object-cover border border-[#E5B842]"
            />
            <div>
              <div className="text-xs font-bold text-[#FBF9F5] flex items-center gap-2">
                <span>{selectedPersona.name}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-[10px] text-[#A3A8B8]">{selectedPersona.tone}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() =>
              playSimulatedAudio(
                `${selectedPersona.name} Voice Blessing`,
                selectedPersona.role,
                '1:45'
              )
            }
            className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#D4AF37]/20 text-xs font-bold text-[#E5B842] border border-white/10 flex items-center gap-1.5"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>Hear Voice</span>
          </button>
        </div>

        {/* Messages Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${
                msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              {msg.sender === 'persona' ? (
                <img
                  src={selectedPersona.avatar}
                  alt={selectedPersona.name}
                  className="w-8 h-8 rounded-full object-cover border border-[#E5B842] shrink-0 mt-1"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#C85A32] to-[#E5B842] flex items-center justify-center text-[#0C0D14] font-bold text-xs shrink-0 mt-1">
                  You
                </div>
              )}

              <div
                className={`max-w-xl p-4 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-lg ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-[#C85A32] to-[#B3431D] text-[#FBF9F5] rounded-tr-sm'
                    : 'bg-[#181B2A] text-[#C5C8D4] border border-[#D4AF37]/25 rounded-tl-sm font-sans'
                }`}
              >
                {msg.text}
                <div
                  className={`text-[9px] mt-2 font-mono text-right ${
                    msg.sender === 'user' ? 'text-white/70' : 'text-[#8E92A4]'
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-3">
              <img
                src={selectedPersona.avatar}
                alt="Typing"
                className="w-8 h-8 rounded-full object-cover border border-[#E5B842] shrink-0"
              />
              <div className="px-4 py-3 rounded-2xl bg-[#181B2A] border border-white/10 text-xs text-[#E5B842] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5B842] animate-bounce" />
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#E5B842] animate-bounce"
                  style={{ animationDelay: '0.2s' }}
                />
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#E5B842] animate-bounce"
                  style={{ animationDelay: '0.4s' }}
                />
                <span className="text-[11px] text-[#A3A8B8] ml-1">
                  reflecting on ancestral lore...
                </span>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Suggested Prompts Pills */}
        <div className="px-4 py-2 bg-[#0C0D14]/70 border-t border-white/5 flex items-center gap-2 overflow-x-auto">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#8E92A4] whitespace-nowrap">
            Prompt Ideas:
          </span>
          {selectedPersona.suggestedPrompts.map((prompt, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSendMessage(prompt)}
              className="px-3 py-1 rounded-full bg-white/5 hover:bg-[#D4AF37]/20 hover:text-[#E5B842] border border-white/5 text-xs text-[#C5C8D4] whitespace-nowrap transition-colors"
            >
              &ldquo;{prompt}&rdquo;
            </button>
          ))}
        </div>

        {/* Chat Input Bar */}
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="p-3 bg-[#0C0D14] border-t border-white/10 flex items-center gap-2"
        >
          <input
            type="text"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            placeholder={`Ask ${selectedPersona.name} a question...`}
            className="flex-1 px-4 py-2.5 rounded-xl bg-[#12141F] border border-white/10 text-xs sm:text-sm text-[#FBF9F5] focus:outline-none focus:border-[#E5B842]"
          />

          <button
            type="submit"
            disabled={!inputText.trim() || isTyping}
            className="px-4 py-2.5 rounded-xl bg-[#E5B842] hover:bg-[#F3C456] disabled:opacity-40 text-[#0C0D14] font-bold text-xs flex items-center gap-1.5 transition-all shadow-md active:scale-95"
          >
            <span>Ask</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
