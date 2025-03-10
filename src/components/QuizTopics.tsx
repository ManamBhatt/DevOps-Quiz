import React from 'react';
import { Brain, Container, Cloud, GitBranch, Server, Shield } from 'lucide-react';

interface QuizTopicsProps {
  onTopicSelect: (topic: string) => void;
}

const QuizTopics: React.FC<QuizTopicsProps> = ({ onTopicSelect }) => {
  const topics = [
    {
      title: 'DevOps Fundamentals',
      description: 'Test your knowledge of core DevOps concepts, principles, and methodologies',
      icon: Brain,
      color: 'blue'
    },
    {
      title: 'Docker & Containers',
      description: 'Questions about containerization, Docker commands, and best practices',
      icon: Container,
      color: 'cyan'
    },
    {
      title: 'Kubernetes',
      description: 'Challenge yourself with Kubernetes concepts, architecture, and deployment strategies',
      icon: Cloud,
      color: 'purple'
    },
    {
      title: 'Git & Version Control',
      description: 'Practice your Git workflow knowledge and branching strategies',
      icon: GitBranch,
      color: 'orange'
    },
    {
      title: 'CI/CD Pipelines',
      description: 'Test your understanding of continuous integration and deployment practices',
      icon: Server,
      color: 'green'
    },
    {
      title: 'Security & Compliance',
      description: 'Evaluate your DevSecOps knowledge and security best practices',
      icon: Shield,
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      cyan: 'bg-cyan-100 text-cyan-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      green: 'bg-green-100 text-green-600',
      red: 'bg-red-100 text-red-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Choose a Topic</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {topics.map((topic, index) => (
          <div
            key={index}
            onClick={() => onTopicSelect(topic.title)}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200 hover:border-blue-500"
          >
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-lg ${getColorClasses(topic.color)}`}>
                <topic.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{topic.title}</h3>
                <p className="text-gray-600">{topic.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizTopics;