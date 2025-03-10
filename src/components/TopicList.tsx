import React from 'react';
import { topics } from '../data/topics';

interface TopicListProps {
  section: string;
  onTopicClick: (topic: string) => void;
}

const TopicList: React.FC<TopicListProps> = ({ section, onTopicClick }) => {
  const sectionTopics = topics[section] || [];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">{section}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {sectionTopics.map((topic, index) => (
          <div
            key={index}
            onClick={() => onTopicClick(topic.title)}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200 hover:border-blue-500"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{topic.title}</h3>
            <p className="text-gray-600">{topic.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicList;