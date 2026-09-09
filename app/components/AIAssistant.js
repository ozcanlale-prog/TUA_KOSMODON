'use client';
import { useState } from 'react';
import { Bot, X, Send } from 'lucide-react';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Merhaba! Ben TUA AI Asistanıyım. Uzay programları, roketler ve veritabanı hakkında size nasıl yardımcı olabilirim?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    setInput('');

    // Yapay zeka yanıt simülasyonu (Dilersen buraya Gemini API entegrasyonu da bağlayabilirsin)
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        sender: 'ai', 
        text: 'TUA KOSMODON telemetri sistemleri ve millî uzay projeleri verilerine göre bu sorgu başarıyla işlendi.' 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-mono">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-950/50 border border-blue-400/40 transition-all hover:scale-105"
          aria-label="Yapay Zeka Asistanını Aç"
        >
          <Bot className="w-5 h-5 animate-pulse" />
          <span className="text-xs font-bold tracking-wider">TUA AI Asistan</span>
        </button>
      ) : (
        <div className="w-80 md:w-96 bg-[#030712] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[450px]">
          {/* Header */}
          <div className="bg-black px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2 text-white text-xs font-bold">
              <Bot className="w-4 h-4 text-blue-400" />
              <span>TUA AI • Uzay Asistanı</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-xl leading-relaxed ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-900 border border-slate-800 text-slate-200'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-black border-t border-slate-800 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Uzay programı hakkında bir şeyler sorun..."
              className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 font-mono"
            />
            <button type="submit" className="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-colors">
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
