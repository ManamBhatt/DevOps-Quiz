interface Question {
  question: string;
  answers: string[];
  correctAnswer: string;
}

interface QuizData {
  [key: string]: Question[];
}

export const quizData: QuizData = {
  'DevOps Fundamentals': [
    {
      question: 'What is the main goal of DevOps?',
      answers: [
        'To increase deployment frequency and time to market',
        'To reduce development costs',
        'To eliminate the need for operations teams',
        'To replace traditional development methodologies'
      ],
      correctAnswer: 'To increase deployment frequency and time to market'
    },
    {
      question: 'Which of the following is a key principle of DevOps?',
      answers: [
        'Continuous Integration',
        'Waterfall Development',
        'Isolated Teams',
        'Manual Testing'
      ],
      correctAnswer: 'Continuous Integration'
    },
    {
      question: 'What is meant by "Infrastructure as Code"?',
      answers: [
        'Managing and provisioning infrastructure through code and automation',
        'Writing code that only runs on specific infrastructure',
        'Using infrastructure to store code',
        'Converting infrastructure into programming languages'
      ],
      correctAnswer: 'Managing and provisioning infrastructure through code and automation'
    }
  ],
  'Docker & Containers': [
    {
      question: 'What is a Docker container?',
      answers: [
        'A standalone executable package that includes everything needed to run an application',
        'A virtual machine running Linux',
        'A physical server in a data center',
        'A backup of application code'
      ],
      correctAnswer: 'A standalone executable package that includes everything needed to run an application'
    },
    {
      question: 'Which command is used to list all running containers?',
      answers: [
        'docker ps',
        'docker list',
        'docker containers',
        'docker show'
      ],
      correctAnswer: 'docker ps'
    },
    {
      question: 'What is a Dockerfile used for?',
      answers: [
        'To define how a Docker image should be built',
        'To store Docker container logs',
        'To manage Docker networks',
        'To backup Docker volumes'
      ],
      correctAnswer: 'To define how a Docker image should be built'
    }
  ],
  'Kubernetes': [
    {
      question: 'What is a Kubernetes Pod?',
      answers: [
        'The smallest deployable unit in Kubernetes that can contain one or more containers',
        'A storage volume in Kubernetes',
        'A networking plugin for Kubernetes',
        'A Kubernetes management tool'
      ],
      correctAnswer: 'The smallest deployable unit in Kubernetes that can contain one or more containers'
    },
    {
      question: 'What is the purpose of a Kubernetes Service?',
      answers: [
        'To provide a stable endpoint to access pods',
        'To store configuration data',
        'To manage container images',
        'To schedule pods on nodes'
      ],
      correctAnswer: 'To provide a stable endpoint to access pods'
    },
    {
      question: 'Which component is responsible for maintaining the desired state in a Kubernetes cluster?',
      answers: [
        'Controller Manager',
        'etcd',
        'kubelet',
        'kube-proxy'
      ],
      correctAnswer: 'Controller Manager'
    }
  ],
  'Git & Version Control': [
    {
      question: 'What is a Git repository?',
      answers: [
        'A storage location for a project that contains all its files and version history',
        'A backup server for code',
        'A type of programming language',
        'A code editor'
      ],
      correctAnswer: 'A storage location for a project that contains all its files and version history'
    },
    {
      question: 'What does the git commit command do?',
      answers: [
        'Records changes to the repository',
        'Downloads changes from a remote repository',
        'Creates a new branch',
        'Merges two branches'
      ],
      correctAnswer: 'Records changes to the repository'
    },
    {
      question: 'What is a Git branch?',
      answers: [
        'A separate line of development',
        'A type of Git repository',
        'A backup of the main repository',
        'A Git error message'
      ],
      correctAnswer: 'A separate line of development'
    }
  ],
  'CI/CD Pipelines': [
    {
      question: 'What is Continuous Integration?',
      answers: [
        'Automatically building and testing code changes',
        'Manually deploying code to production',
        'Writing documentation',
        'Managing server infrastructure'
      ],
      correctAnswer: 'Automatically building and testing code changes'
    },
    {
      question: 'What is the purpose of a CI/CD pipeline?',
      answers: [
        'To automate the software delivery process',
        'To replace development teams',
        'To reduce the need for testing',
        'To store application logs'
      ],
      correctAnswer: 'To automate the software delivery process'
    },
    {
      question: 'Which of the following is a common CI/CD tool?',
      answers: [
        'Jenkins',
        'Notepad',
        'File Explorer',
        'Calculator'
      ],
      correctAnswer: 'Jenkins'
    }
  ],
  'Security & Compliance': [
    {
      question: 'What is DevSecOps?',
      answers: [
        'Integrating security practices within the DevOps process',
        'A type of encryption algorithm',
        'A security monitoring tool',
        'A compliance framework'
      ],
      correctAnswer: 'Integrating security practices within the DevOps process'
    },
    {
      question: 'What is the purpose of vulnerability scanning?',
      answers: [
        'To identify security weaknesses in applications and infrastructure',
        'To improve application performance',
        'To manage user permissions',
        'To backup sensitive data'
      ],
      correctAnswer: 'To identify security weaknesses in applications and infrastructure'
    },
    {
      question: 'Which of the following is a security best practice in DevOps?',
      answers: [
        'Implementing automated security testing in the CI/CD pipeline',
        'Disabling all security features for faster deployment',
        'Sharing credentials in plain text',
        'Using default passwords'
      ],
      correctAnswer: 'Implementing automated security testing in the CI/CD pipeline'
    }
  ]
};