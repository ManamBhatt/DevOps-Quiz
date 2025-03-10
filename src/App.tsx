import React, { useState } from 'react';
import { Terminal, BookOpen, GraduationCap, Menu, X } from 'lucide-react';
import StudyMaterials from './components/StudyMaterials';
import TopicList from './components/TopicList';
import TopicContent from './components/TopicContent';
import QuizTopics from './components/QuizTopics';
import Quiz from './components/Quiz';
import Chat from './components/Chat';

type StudyView = 'main' | 'topics' | 'content';
type QuizView = 'topics' | 'quiz';

function App() {
  const [activeTab, setActiveTab] = useState<'chat' | 'study' | 'quiz'>('chat');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [studyView, setStudyView] = useState<StudyView>('main');
  const [quizView, setQuizView] = useState<QuizView>('topics');
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');

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
              <span>Chat</span>
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
        <div className="flex-1 overflow-auto">
          {activeTab === 'chat' && <Chat />}

          {activeTab === 'study' && (
            <div className="p-4">
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
            </div>
          )}

          {activeTab === 'quiz' && (
            <div className="p-4">
              {quizView === 'topics' && (
                <QuizTopics onTopicSelect={handleQuizTopicSelect} />
              )}
              {quizView === 'quiz' && (
                <Quiz topic={selectedTopic} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;