import React, { useState } from 'react';
import { quizData } from '../data/quizData';
import { CheckCircle2, XCircle } from 'lucide-react';

interface QuizProps {
  topic: string;
}

const Quiz: React.FC<QuizProps> = ({ topic }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);

  const questions = quizData[topic] || [];
  const currentQuestionData = questions[currentQuestion];

  const handleAnswerSelect = (answer: string) => {
    if (answeredQuestions.includes(currentQuestion)) return;
    setSelectedAnswer(answer);
    setShowResult(true);
    
    if (answer === currentQuestionData.correctAnswer) {
      setScore(score + 1);
    }
    
    setAnsweredQuestions([...answeredQuestions, currentQuestion]);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    setCurrentQuestion(currentQuestion + 1);
  };

  if (!currentQuestionData) {
    return (
      <div className="max-w-3xl mx-auto text-center py-8">
        <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
        <p className="text-xl mb-4">Your score: {score} out of {questions.length}</p>
        <p className="text-gray-600">
          {score === questions.length ? 'Perfect score! Excellent work!' : 'Keep practicing to improve your knowledge!'}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-xl p-8 shadow-sm">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{topic}</h2>
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
          <p className="text-lg font-medium mb-4">{currentQuestionData.question}</p>
          <div className="space-y-3">
            {currentQuestionData.answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(answer)}
                disabled={answeredQuestions.includes(currentQuestion)}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                  selectedAnswer === answer
                    ? answer === currentQuestionData.correctAnswer
                      ? 'border-green-500 bg-green-50'
                      : 'border-red-500 bg-red-50'
                    : 'border-gray-200 hover:border-blue-500 hover:bg-blue-50'
                } ${answeredQuestions.includes(currentQuestion) ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <div className="flex items-center justify-between">
                  <span>{answer}</span>
                  {showResult && selectedAnswer === answer && (
                    answer === currentQuestionData.correctAnswer ? (
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