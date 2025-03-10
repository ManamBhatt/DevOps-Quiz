import React, { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, Loader2 } from 'lucide-react';
import { generateQuizQuestions } from '../lib/openai';

interface QuizProps {
  topic: string;
}

interface Question {
  question: string;
  answers: string[];
  correctAnswer: string;
}

const Quiz: React.FC<QuizProps> = ({ topic }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [difficulty, setDifficulty] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (difficulty) {
      loadQuestions();
    }
  }, [difficulty]);

  const loadQuestions = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const generatedQuestions = await generateQuizQuestions(topic, difficulty);
      setQuestions(generatedQuestions);
    } catch (err) {
      setError('Failed to load questions. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDifficultySelect = (level: string) => {
    setDifficulty(level);
    setCurrentQuestion(0);
    setScore(0);
    setAnsweredQuestions([]);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const handleAnswerSelect = (answer: string) => {
    if (answeredQuestions.includes(currentQuestion)) return;
    setSelectedAnswer(answer);
    setShowResult(true);
    
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    setAnsweredQuestions([...answeredQuestions, currentQuestion]);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleRetry = () => {
    setDifficulty('');
    setCurrentQuestion(0);
    setScore(0);
    setAnsweredQuestions([]);
    setSelectedAnswer(null);
    setShowResult(false);
    setQuestions([]);
  };

  if (!difficulty) {
    return (
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Select Difficulty Level</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Beginner', 'Intermediate', 'Advanced', 'Expert'].map((level) => (
            <button
              key={level}
              onClick={() => handleDifficultySelect(level)}
              className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-500"
            >
              <h3 className="text-lg font-semibold text-gray-800">{level}</h3>
              {level === 'Expert' && (
                <p className="text-sm text-gray-600 mt-1">(DevOps God)</p>
              )}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
        <span className="ml-2 text-gray-600">Loading questions...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={handleRetry}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (currentQuestion >= questions.length) {
    return (
      <div className="max-w-3xl mx-auto text-center py-8">
        <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
        <p className="text-xl mb-4">Your score: {score} out of {questions.length}</p>
        <div className="mb-8">
          <p className="text-gray-600">
            {score === questions.length 
              ? 'Perfect score! You\'re a DevOps master!' 
              : score >= questions.length * 0.8 
              ? 'Great job! Keep up the good work!' 
              : 'Keep practicing to improve your knowledge!'}
          </p>
        </div>
        <button
          onClick={handleRetry}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Try Another Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-xl p-8 shadow-sm">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{topic}</h2>
              <p className="text-gray-600">{difficulty} Level</p>
            </div>
            <span className="text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div 
              className="h-2 bg-blue-500 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="mb-8">
          <p className="text-lg font-medium mb-4">{questions[currentQuestion].question}</p>
          <div className="space-y-3">
            {questions[currentQuestion].answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(answer)}
                disabled={answeredQuestions.includes(currentQuestion)}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                  selectedAnswer === answer
                    ? answer === questions[currentQuestion].correctAnswer
                      ? 'border-green-500 bg-green-50'
                      : 'border-red-500 bg-red-50'
                    : 'border-gray-200 hover:border-blue-500 hover:bg-blue-50'
                } ${answeredQuestions.includes(currentQuestion) ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <div className="flex items-center justify-between">
                  <span>{answer}</span>
                  {showResult && selectedAnswer === answer && (
                    answer === questions[currentQuestion].correctAnswer ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500" />
                    )
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {showResult && (
          <div className="flex justify-between items-center">
            <div className="text-gray-600">
              Score: {score} / {questions.length}
            </div>
            {currentQuestion < questions.length - 1 && (
              <button
                onClick={handleNextQuestion}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Next Question
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;