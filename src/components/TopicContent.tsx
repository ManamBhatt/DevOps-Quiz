import React from 'react';
import { topics } from '../data/topics';

interface TopicContentProps {
  section: string;
  topic: string;
}

const TopicContent: React.FC<TopicContentProps> = ({ section, topic }) => {
  const sectionTopics = topics[section] || [];
  const topicContent = sectionTopics.find(t => t.title === topic);

  if (!topicContent) {
    return <div>Topic not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">{topic}</h2>
      <div className="bg-white rounded-xl p-8 shadow-sm">
        <div className="prose max-w-none">
          {topicContent.content}
        </div>
      </div>
    </div>
  );
};

export default TopicContent;