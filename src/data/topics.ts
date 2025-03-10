interface Topic {
  title: string;
  description: string;
  content: string;
}

interface TopicsData {
  [key: string]: Topic[];
}

export const topics: TopicsData = {
  'Introduction to DevOps': [
    {
      title: 'DevOps Culture and Principles',
      description: 'Understanding the fundamental principles and cultural aspects of DevOps',
      content: `
        <h3>What is DevOps Culture?</h3>
        <p>DevOps culture emphasizes collaboration between development and operations teams, promoting shared responsibility and continuous improvement.</p>
        
        <h3>Key Principles</h3>
        <ul>
          <li>Continuous Integration and Delivery</li>
          <li>Automation</li>
          <li>Infrastructure as Code</li>
          <li>Monitoring and Feedback</li>
        </ul>
      `
    },
    {
      title: 'Agile Development',
      description: 'Learn about Agile methodologies and their integration with DevOps practices',
      content: 'Detailed content about Agile Development...'
    },
    {
      title: 'Infrastructure as Code',
      description: 'Managing infrastructure using code and automation',
      content: 'Detailed content about Infrastructure as Code...'
    },
    {
      title: 'Monitoring and Logging',
      description: 'Best practices for system monitoring and log management',
      content: 'Detailed content about Monitoring and Logging...'
    }
  ],
  'Continuous Integration': [
    {
      title: 'Maven',
      description: 'Popular build automation tool used primarily for Java projects',
      content: 'Detailed content about Maven...'
    },
    {
      title: 'npm and Node.js',
      description: 'Package management and runtime environment for JavaScript',
      content: 'Detailed content about npm and Node.js...'
    },
    {
      title: 'Docker',
      description: 'Container platform for building, shipping, and running applications',
      content: 'Detailed content about Docker...'
    },
    {
      title: 'SonarQube',
      description: 'Code quality and security analysis platform',
      content: 'Detailed content about SonarQube...'
    },
    {
      title: 'Trivy',
      description: 'Comprehensive security scanner for containers and applications',
      content: 'Detailed content about Trivy...'
    }
  ],
  'Continuous Deployment': [
    {
      title: 'Kubernetes Fundamentals',
      description: 'Container orchestration platform for automated deployment and scaling',
      content: 'Detailed content about Kubernetes...'
    },
    {
      title: 'Helm',
      description: 'Package manager for Kubernetes applications',
      content: 'Detailed content about Helm...'
    },
    {
      title: 'YAML Configuration',
      description: 'Writing and managing Kubernetes manifests using YAML',
      content: 'Detailed content about YAML Configuration...'
    },
    {
      title: 'Service Mesh',
      description: 'Managing service-to-service communication in Kubernetes',
      content: 'Detailed content about Service Mesh...'
    }
  ]
};