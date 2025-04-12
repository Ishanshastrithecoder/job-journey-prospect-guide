
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, Bot, User, Clock, Trash, Download, Share2, Plus, RefreshCcw } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type MessageType = {
  id: string;
  sender: 'user' | 'bot';
  content: string;
  timestamp: Date;
};

type SuggestionType = {
  id: string;
  text: string;
};

const sampleResponses = [
  "Based on your background in Computer Science and experience in web development, I'd recommend exploring roles in Full-Stack Development or DevOps. The demand for these skills is growing at 22% annually, especially in markets like the US and Germany.",
  "For someone with your qualifications, I'd suggest focusing on cloud technologies like AWS, Azure, or GCP. The average salary for cloud engineers in the US is $125,000, compared to $92,000 in Germany and £78,000 in the UK.",
  "With 2 years of experience in software development, you should consider participating in hackathons like HackMIT or building projects using React and Node.js to strengthen your portfolio. This could increase your market value by approximately 15-20%.",
  "Looking at job market trends, the data science field is growing rapidly in India with a 40% increase in openings year over year. With your programming background, upskilling in Python and data analysis would position you well for this opportunity.",
  "For interview preparation, focus on system design concepts and data structures. Our analysis shows 70% of technical interviews for mid-level positions include these topics. Would you like me to provide some practice questions?"
];

const initialSuggestions = [
  { id: '1', text: 'What careers match my tech background?' },
  { id: '2', text: 'Compare software engineer salaries in US vs India' },
  { id: '3', text: 'How can I prepare for technical interviews?' },
  { id: '4', text: 'Recommend projects to build for my portfolio' },
  { id: '5', text: 'What skills should I develop in the next 6 months?' }
];

const Chatbot = () => {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: '0',
      sender: 'bot',
      content: 'Hello! I\'m your AI Career Guide. I can provide personalized career advice, resume suggestions, and job market insights based on your qualifications and interests. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<SuggestionType[]>(initialSuggestions);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: MessageType = {
      id: Date.now().toString(),
      sender: 'user',
      content: input,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate response
    setTimeout(() => {
      const randomResponse = sampleResponses[Math.floor(Math.random() * sampleResponses.length)];
      
      const botMessage: MessageType = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        content: randomResponse,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      
      // Generate new suggestions based on conversation context
      const newSuggestions = [
        { id: Date.now().toString(), text: 'Tell me more about job opportunities in this field' },
        { id: (Date.now() + 1).toString(), text: 'What skills should I develop for this role?' },
        { id: (Date.now() + 2).toString(), text: 'Compare these opportunities across different countries' },
        { id: (Date.now() + 3).toString(), text: 'Help me prepare for interviews in this area' }
      ];
      
      setSuggestions(newSuggestions);
    }, 1000 + Math.random() * 1000);
  };

  const handleSuggestionClick = (text: string) => {
    setInput(text);
  };

  const clearChat = () => {
    setMessages([{
      id: '0',
      sender: 'bot',
      content: 'Hello! I\'m your AI Career Guide. I can provide personalized career advice, resume suggestions, and job market insights based on your qualifications and interests. How can I help you today?',
      timestamp: new Date()
    }]);
    setSuggestions(initialSuggestions);
  };

  return (
    <div className="flex flex-col h-[700px] max-h-[80vh] overflow-hidden rounded-xl shadow-lg border">
      <CardHeader className="bg-blue-600 text-white py-4">
        <CardTitle className="flex items-center">
          <Bot className="mr-2 h-5 w-5" />
          AI Career Assistant
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow p-0 overflow-hidden flex flex-col">
        <div className="p-4 overflow-y-auto flex-grow">
          <div className="space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`flex gap-3 max-w-[80%] ${
                    message.sender === 'user' 
                      ? 'flex-row-reverse' 
                      : 'flex-row'
                  }`}
                >
                  <Avatar className={message.sender === 'user' ? 'bg-blue-100' : 'bg-blue-600'}>
                    <AvatarFallback>{message.sender === 'user' ? 'U' : 'AI'}</AvatarFallback>
                    {message.sender === 'user' ? (
                      <User className="h-5 w-5 text-blue-600" />
                    ) : (
                      <Bot className="h-5 w-5 text-white" />
                    )}
                  </Avatar>
                  
                  <div>
                    <div 
                      className={`rounded-2xl px-4 py-2 mb-1 text-sm ${
                        message.sender === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800'
                      }`}
                    >
                      {message.content}
                    </div>
                    <div 
                      className={`flex items-center text-xs text-muted-foreground ${
                        message.sender === 'user' ? 'justify-end' : ''
                      }`}
                    >
                      <Clock className="h-3 w-3 mr-1" />
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex gap-3 max-w-[80%]">
                  <Avatar className="bg-blue-600">
                    <AvatarFallback>AI</AvatarFallback>
                    <Bot className="h-5 w-5 text-white" />
                  </Avatar>
                  
                  <div className="rounded-2xl px-4 py-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="h-2 w-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '200ms' }}></div>
                      <div className="h-2 w-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '400ms' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </div>
        
        <div className="p-3 bg-background border-t">
          <div className="flex gap-1 mb-3 overflow-x-auto pb-2 scrollbar-none">
            {suggestions.map((suggestion) => (
              <Button
                key={suggestion.id}
                variant="secondary"
                className="whitespace-nowrap text-xs h-auto py-1"
                onClick={() => handleSuggestionClick(suggestion.text)}
              >
                {suggestion.text}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-3 pt-0">
        <form onSubmit={handleSendMessage} className="flex gap-2 w-full">
          <Button 
            type="button"
            size="icon" 
            variant="outline" 
            onClick={clearChat}
            title="Clear chat"
            className="shrink-0"
          >
            <Trash className="h-4 w-4" />
          </Button>
          
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question..."
            className="flex-grow"
          />
          
          <Button type="submit" className="shrink-0">
            <Send className="h-4 w-4 mr-2" /> Send
          </Button>
        </form>
      </CardFooter>
    </div>
  );
};

export default Chatbot;
