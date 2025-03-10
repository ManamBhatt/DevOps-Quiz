import React, { useState } from 'react';
import { Terminal, BookOpen, GraduationCap, Menu, X, Send, ArrowLeft } from 'lucide-react';
import StudyMaterials from './components/StudyMaterials';
import TopicList from './components/TopicList';
import TopicContent from './components/TopicContent';
import QuizTopics from './components/QuizTopics';
import Quiz from './components/Quiz';

type Message = {
  type: 'user' | 'assistant';
  content: string;
};

type StudyView = 'main' | 'topics' | 'content';
type QuizView = 'topics' | 'quiz';

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'assistant',
      content: 'Welcome to DevOps Learning Hub! How can I help you learn today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [activeTab, setActiveTab] = useState<'chat' | 'study' | 'quiz'>('chat');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [studyView, setStudyView] = useState<StudyView>('main');
  const [quizView, setQuizView] = useState<QuizView>('topics');
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, 
      { type: 'user', content: input },
      { type: 'assistant', content: 'This is a demo response. In a real application, this would be connected to a backend service.' }
    ]);
    setInput('');
  };

  const handleSectionClick = (section: string) => {
    setSelectedSection(section);
    setStudyView('topics');
  };

  const handleTopicClick = (topic: string) => {
    setSelectedTopic(topic);
    setStudyView('content');
  };

  const handleQuizTopicSelect = (topic: string) => {
    setSelectedTopic(topic);
    setQuizView('quiz');
  };

  const handleBack = () => {
    if (studyView === 'content') {
      setStudyView('topics');
    } else if (studyView === 'topics') {
      setStudyView('main');
    }
    if (quizView === 'quiz') {
      setQuizView('topics');
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-0'} bg-[#1a1f2c] transition-all duration-300 overflow-hidden`}>
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-8">
            <Terminal className="h-8 w-8 text-blue-400" />
            <h1 className="text-xl font-bold text-white">DevOps Hub</h1>
          </div>
          
          <nav className="space-y-2">
            <button
              onClick={() => {
                setActiveTab('chat');
                setStudyView('main');
              }}
              className={`w-full flex items-center space-x-2 px-4 py-2 rounded ${
                activeTab === 'chat' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Terminal className="h-5 w-5" />
              <span>Chat DevOPs Expert AI</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('study');
                setStudyView('main');
              }}
              className={`w-full flex items-center space-x-2 px-4 py-2 rounded ${
                activeTab === 'study' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <BookOpen className="h-5 w-5" />
              <span>Study Material</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('quiz');
                setQuizView('topics');
              }}
              className={`w-full flex items-center space-x-2 px-4 py-2 rounded ${
                activeTab === 'quiz' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <GraduationCap className="h-5 w-5" />
              <span>Quiz</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            {((studyView === 'topics' || studyView === 'content') || quizView === 'quiz') && (
              <button
                onClick={handleBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back</span>
              </button>
            )}
          </div>
          <div className="text-lg font-semibold">
            {activeTab === 'chat' && 'DevOps Assistant'}
            {activeTab === 'study' && 'Study Materials'}
            {activeTab === 'quiz' && 'Practice Quiz'}
          </div>
          <div className="w-8" /> {/* Spacer for alignment */}
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-4">
          {activeTab === 'chat' && (
            <div className="max-w-3xl mx-auto">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${
                    message.type === 'user' ? 'flex justify-end' : 'flex justify-start'
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg max-w-[80%] ${
                      message.type === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-white border border-gray-200'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'study' && (
            <>
              {studyView === 'main' && (
                <StudyMaterials onSectionClick={handleSectionClick} />
              )}
              {studyView === 'topics' && (
                <TopicList 
                  section={selectedSection} 
                  onTopicClick={handleTopicClick}
                />
              )}
              {studyView === 'content' && (
                <TopicContent 
                  section={selectedSection}
                  topic={selectedTopic}
                />
              )}
            </>
          )}

          {activeTab === 'quiz' && (
            <>
              {quizView === 'topics' && (
                <QuizTopics onTopicSelect={handleQuizTopicSelect} />
              )}
              {quizView === 'quiz' && (
                <Quiz topic={selectedTopic} />
              )}
            </>
          )}
        </div>

        {/* Input Area for Chat */}
        {activeTab === 'chat' && (
          <div className="border-t border-gray-200 p-4">
            <div className="max-w-3xl mx-auto flex space-x-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask anything about DevOps..."
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={handleSend}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;