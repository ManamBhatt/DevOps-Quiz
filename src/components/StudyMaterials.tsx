import React from 'react';
import { Terminal, GitBranch, Cloud } from 'lucide-react';

interface StudyMaterialsProps {
  onSectionClick: (section: string) => void;
}

const StudyMaterials: React.FC<StudyMaterialsProps> = ({ onSectionClick }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">DevOps Learning Path</h2>
      <div className="grid md:grid-cols-1 gap-6">
        {/* Introduction to DevOps */}
        <div 
          onClick={() => onSectionClick('Introduction to DevOps')}
          className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200 hover:border-blue-500"
        >
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Terminal className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Introduction to DevOps</h3>
              <p className="text-gray-600 mb-4">
                Master the foundational concepts of DevOps methodology, including its principles, practices, and cultural aspects.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-gray-600">• DevOps Culture and Principles</div>
                <div className="text-sm text-gray-600">• Agile Development</div>
                <div className="text-sm text-gray-600">• Infrastructure as Code</div>
                <div className="text-sm text-gray-600">• Monitoring and Logging</div>
              </div>
            </div>
          </div>
        </div>

        {/* Continuous Integration */}
        <div 
          onClick={() => onSectionClick('Continuous Integration')}
          className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200 hover:border-blue-500"
        >
          <div className="flex items-start space-x-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <GitBranch className="h-6 w-6 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Continuous Integration</h3>
              <p className="text-gray-600 mb-4">
                Learn about tools and practices for automating the integration of code changes and ensuring code quality.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-gray-600">• Build Tools (Maven, npm)</div>
                <div className="text-sm text-gray-600">• Containerization (Docker)</div>
                <div className="text-sm text-gray-600">• Code Quality (SonarQube)</div>
                <div className="text-sm text-gray-600">• Security Scanning (Trivy)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Continuous Deployment */}
        <div 
          onClick={() => onSectionClick('Continuous Deployment')}
          className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200 hover:border-blue-500"
        >
          <div className="flex items-start space-x-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Cloud className="h-6 w-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Continuous Deployment</h3>
              <p className="text-gray-600 mb-4">
                Explore container orchestration and deployment automation techniques for reliable software delivery.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-gray-600">• Kubernetes Fundamentals</div>
                <div className="text-sm text-gray-600">• Helm Package Manager</div>
                <div className="text-sm text-gray-600">• YAML Configuration</div>
                <div className="text-sm text-gray-600">• Service Mesh</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyMaterials;