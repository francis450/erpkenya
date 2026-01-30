import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, Send, User, Loader2 } from 'lucide-react';

export function AIChatSimulator() {
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Jambo! I am your ERP Co-Pilot. How can I assist you with your operations today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  const mockResponses = {
    'kra': "I can help with that. Based on your current sales, your VAT liability for this month is KES 450,000. Would you like me to prepare the P30 form?",
    'inventory': "Checking... The Nairobi warehouse is low on 'Cement Bags (50kg)'. Predicted stockout in 3 days. Shall I place an order with supplier 'Bamburi'?",
    'mpesa': "M-Pesa reconciliation complete. We matched 142 transactions totaling KES 1.2M. There are 3 flagged discrepancies requiring review.",
    'default': "That's a great question. In the full version, I would analyze your real-time data to answer that. For now, would you like to see a demo of our Predictive Analytics?"
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking delay
    setTimeout(() => {
      let aiResponse = mockResponses.default;
      const lowerInput = userMsg.toLowerCase();
      
      if (lowerInput.includes('kra') || lowerInput.includes('tax')) aiResponse = mockResponses.kra;
      else if (lowerInput.includes('stock') || lowerInput.includes('inventory')) aiResponse = mockResponses.inventory;
      else if (lowerInput.includes('mpesa') || lowerInput.includes('payment')) aiResponse = mockResponses.mpesa;

      setMessages(prev => [...prev, { role: 'ai', content: aiResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <Card className="w-full max-w-md mx-auto shadow-2xl border-primary/20 bg-white">
      <CardHeader className="bg-slate-950 text-white rounded-t-lg p-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-full">
                <Bot size={24} className="text-white" />
            </div>
            <div>
                <CardTitle className="text-lg">ERP Co-Pilot</CardTitle>
                <p className="text-xs text-slate-400">Powered by AI • Online</p>
            </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[400px] p-4 bg-slate-50" ref={scrollRef}>
          <div className="flex flex-col gap-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'ai' && (
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Bot size={16} className="text-primary" />
                  </div>
                )}
                <div
                  className={`rounded-lg p-3 max-w-[80%] text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-white text-slate-700 border border-slate-100'
                  }`}
                >
                  {msg.content}
                </div>
                {msg.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                    <User size={16} className="text-slate-500" />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
                <div className="flex gap-3 justify-start">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Bot size={16} className="text-primary" />
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm flex items-center">
                        <Loader2 className="h-4 w-4 animate-spin text-primary" />
                        <span className="text-xs text-slate-400 ml-2">Thinking...</span>
                    </div>
                </div>
            )}
            <div ref={scrollRef} />
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="p-3 bg-white border-t">
        <form 
            className="flex w-full gap-2"
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
        >
          <input
            className="flex-1 px-4 py-2 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 bg-slate-50"
            placeholder="Ask about inventory, KRA, or M-Pesa..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button type="submit" size="icon" className="rounded-full h-10 w-10 shrink-0">
            <Send size={18} />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
