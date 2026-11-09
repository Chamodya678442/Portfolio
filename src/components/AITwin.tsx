import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  Send,
  Trash2,
  Sparkles,
  Key,
  ShieldCheck,
  Check,
  Copy,
  Info,
  CornerDownLeft,
  RefreshCw,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { askAITwin } from '../utils/aiTwinEngine';
import { ChatMessage } from '../types/portfolio';

const STARTER_PROMPTS = [
  'Tell me about your technical background.',
  'What projects have you developed?',
  'What is your experience with React and Python?',
  'Tell me about your robotics project.',
  'What leadership roles have you held?',
  'What opportunities are you interested in?',
];

export const AITwinSection: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'assistant',
      content: `Hello! I am **Janodi Chamodya's AI Digital Twin**.\n\nI can answer questions regarding my Computer Engineering studies at USJ, my software engineering work at Flexaro, my 5 featured projects (from the 5-DOF robotic arm to AI platforms), technical skills, and leadership activities.\n\n*Note: I am an AI representation programmed to truthfully reflect Janodi's verified portfolio information.* What would you like to explore?`,
      timestamp: new Date(),
      suggestedQuestions: [
        'Tell me about your technical background.',
        'What projects have you developed?',
        'Tell me about your robotics project.',
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [apiKeyModalOpen, setApiKeyModalOpen] = useState(false);
  const [userCustomKey, setUserCustomKey] = useState<string>(() => {
    return localStorage.getItem('janodi_ai_twin_key') || '';
  });
  const [tempKeyInput, setTempKeyInput] = useState('');
  const [engineMode, setEngineMode] = useState<'openai' | 'knowledge-engine'>('knowledge-engine');

  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (messages.length <= 1 && !isLoading) {
      return;
    }

    const messagesContainer = messagesContainerRef.current;
    if (messagesContainer) {
      messagesContainer.scrollTo({
        top: messagesContainer.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const history = messages.map((m) => ({
        role: m.sender as 'user' | 'assistant',
        content: m.content,
      }));

      const response = await askAITwin(text, history, userCustomKey);
      setEngineMode(response.mode);

      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        content: response.text,
        timestamp: new Date(),
        suggestedQuestions: response.followUps,
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          sender: 'assistant',
          content: "I encountered an unexpected issue while retrieving that information. Please feel free to ask another question or contact Janodi directly!",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'assistant',
        content: `Conversation reset. I am ready to answer any questions about Janodi's engineering background, projects, or experience!`,
        timestamp: new Date(),
        suggestedQuestions: STARTER_PROMPTS.slice(0, 3),
      },
    ]);
  };

  const handleCopyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSaveApiKey = () => {
    if (tempKeyInput.trim()) {
      localStorage.setItem('janodi_ai_twin_key', tempKeyInput.trim());
      setUserCustomKey(tempKeyInput.trim());
    } else {
      localStorage.removeItem('janodi_ai_twin_key');
      setUserCustomKey('');
    }
    setApiKeyModalOpen(false);
  };

  return (
    <section id="ai-twin" aria-label="AI Digital Twin" className="py-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 dark:text-cyan-400 text-xs font-mono font-medium mb-3">
            <Bot size={14} className="text-cyan-400" />
            <span>INTERACTIVE AI COMPANION</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            Have a Conversation With My Digital Twin
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Curious about my experience, projects, skills, or ideas? Ask my AI-powered digital twin.
          </p>
        </div>

        {/* Chat Card Container */}
        <div className="glass-card rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col h-[650px] relative">
          {/* Chat Window Header Bar */}
          <div className="p-4 sm:px-6 bg-slate-100/80 dark:bg-slate-950/70 border-b border-slate-200/80 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Abstract AI Assistant Icon / Monogram - Clearly distinguished from human photo */}
              <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[1.5px] shadow-glow-sm">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                  <Bot size={20} className="text-cyan-400 animate-pulse" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-950" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white">
                    Janodi AI Twin
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    {userCustomKey ? 'Live OpenAI Mode' : 'Portfolio Knowledge Engine'}
                  </span>
                </div>

              </div>
            </div>

            {/* Header Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setTempKeyInput(userCustomKey);
                  setApiKeyModalOpen(true);
                }}
                title="Configure OpenAI API Key"
                className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-cyan-500 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
                aria-label="API Settings"
              >
                <Key size={16} />
              </button>
              <button
                onClick={handleClearChat}
                title="Reset Conversation"
                className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-rose-400 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
                aria-label="Clear chat"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>

          {/* Conversation Messages Container */}
          <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {messages.map((message) => {
              const isAssistant = message.sender === 'assistant';
              return (
                <div
                  key={message.id}
                  className={`flex flex-col ${isAssistant ? 'items-start' : 'items-end'}`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[78%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed relative group ${isAssistant
                      ? 'bg-slate-100 dark:bg-slate-900/90 text-slate-800 dark:text-slate-100 border border-slate-200/80 dark:border-white/10 rounded-tl-sm'
                      : 'bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white rounded-tr-sm shadow-md shadow-cyan-500/20'
                      }`}
                  >
                    {/* Message Content */}
                    <div className="whitespace-pre-wrap font-sans">
                      {message.content}
                    </div>

                    {/* Message Timestamp & Copy button */}
                    <div
                      className={`mt-2 flex items-center justify-between text-[10px] ${isAssistant ? 'text-slate-400 dark:text-slate-400' : 'text-cyan-100'
                        }`}
                    >
                      <span>
                        {new Date(message.timestamp).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>

                      {isAssistant && (
                        <button
                          onClick={() => handleCopyText(message.id, message.content)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:text-cyan-400"
                          title="Copy response"
                        >
                          {copiedId === message.id ? <Check size={12} /> : <Copy size={12} />}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Contextual Suggested Questions Chips */}
                  {isAssistant && message.suggestedQuestions && message.suggestedQuestions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[85%]">
                      {message.suggestedQuestions.map((q, i) => (
                        <button
                          key={i}
                          onClick={() => handleSendMessage(q)}
                          disabled={isLoading}
                          className="text-[11px] font-mono px-3 py-1 rounded-full bg-slate-200/80 dark:bg-slate-900/80 hover:bg-cyan-500/20 dark:hover:bg-cyan-500/20 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 border border-slate-300/80 dark:border-white/10 transition-colors text-left"
                        >
                          &gt; {q}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 p-2">
                <div className="w-7 h-7 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                  <Bot size={15} className="animate-spin" />
                </div>
                <div className="flex items-center gap-1">
                  <span>Synthesizing response</span>
                  <span className="animate-bounce">.</span>
                  <span className="animate-bounce [animation-delay:0.2s]">.</span>
                  <span className="animate-bounce [animation-delay:0.4s]">.</span>
                </div>
              </div>
            )}

          </div>

          {/* Suggested Starter Chips if message count is low */}
          {messages.length <= 2 && (
            <div className="px-4 sm:px-6 py-2 bg-slate-50 dark:bg-slate-950/40 border-t border-slate-200 dark:border-white/5 overflow-x-auto">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="text-[10px] font-mono uppercase text-slate-400">Suggestions:</span>
                {STARTER_PROMPTS.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(prompt)}
                    disabled={isLoading}
                    className="text-xs px-3 py-1 rounded-full bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-cyan-500/50 border border-slate-200 dark:border-white/10 transition-all shrink-0"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Chat Input Bar */}
          <div className="p-3 sm:p-4 bg-slate-100/90 dark:bg-slate-950/90 border-t border-slate-200/80 dark:border-white/10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                placeholder="Ask about my projects, Flexaro experience, robotics, or engineering skills..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isLoading}
                className="flex-1 px-4 py-3 rounded-2xl text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="p-3 sm:px-5 sm:py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-md shadow-cyan-500/20 shrink-0"
                aria-label="Send message"
              >
                <span>Send</span>
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* API Key Configuration Modal */}
      {apiKeyModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setApiKeyModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md bg-white dark:bg-[#0f1118] border border-slate-200 dark:border-white/10 rounded-3xl p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-2">
              AI Twin Integration Settings
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              By default, the AI Twin runs on our zero-latency <strong>Verified Knowledge Base Engine</strong> with zero hallucination. If you wish to connect directly to OpenAI's <code>gpt-4o-mini</code> model, paste your personal API key below (stored safely only in your browser session):
            </p>

            <div className="space-y-3 mb-5">
              <label className="text-xs font-mono text-slate-400 block uppercase">
                OpenAI API Key (Optional)
              </label>
              <input
                type="password"
                placeholder="sk-..."
                value={tempKeyInput}
                onChange={(e) => setTempKeyInput(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl text-xs bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-mono focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div className="flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setApiKeyModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveApiKey}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-cyan-500 hover:bg-cyan-400 transition-colors"
              >
                Save Preference
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
