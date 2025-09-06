import { Question } from '@/types/assessment';

export const assessmentQuestions: Question[] = [
  // Psychometric Section
  {
    id: 'psych_1',
    section: 'psychometric',
    text: 'I enjoy solving complex configuration issues in systems.',
    options: [
      { value: 1, text: 'Strongly Disagree' },
      { value: 2, text: 'Disagree' },
      { value: 3, text: 'Neutral' },
      { value: 4, text: 'Agree' },
      { value: 5, text: 'Strongly Agree' }
    ],
    weight: 1.2
  },
  {
    id: 'psych_2',
    section: 'psychometric',
    text: 'I like building processes that help large systems talk to each other.',
    options: [
      { value: 1, text: 'Strongly Disagree' },
      { value: 2, text: 'Disagree' },
      { value: 3, text: 'Neutral' },
      { value: 4, text: 'Agree' },
      { value: 5, text: 'Strongly Agree' }
    ],
    weight: 1.3
  },
  {
    id: 'psych_3',
    section: 'psychometric',
    text: 'I am good at handling both user needs and system limitations.',
    options: [
      { value: 1, text: 'Strongly Disagree' },
      { value: 2, text: 'Disagree' },
      { value: 3, text: 'Neutral' },
      { value: 4, text: 'Agree' },
      { value: 5, text: 'Strongly Agree' }
    ],
    weight: 1.1
  },
  {
    id: 'psych_4',
    section: 'psychometric',
    text: 'I like troubleshooting system workflows and data pipelines.',
    options: [
      { value: 1, text: 'Strongly Disagree' },
      { value: 2, text: 'Disagree' },
      { value: 3, text: 'Neutral' },
      { value: 4, text: 'Agree' },
      { value: 5, text: 'Strongly Agree' }
    ],
    weight: 1.2
  },
  {
    id: 'psych_5',
    section: 'psychometric',
    text: 'I prefer structured, systematic approaches to problem-solving.',
    options: [
      { value: 1, text: 'Strongly Disagree' },
      { value: 2, text: 'Disagree' },
      { value: 3, text: 'Neutral' },
      { value: 4, text: 'Agree' },
      { value: 5, text: 'Strongly Agree' }
    ],
    weight: 1.0
  },

  // Technical Section
  {
    id: 'tech_1',
    section: 'technical',
    text: 'A manufacturing company needs to connect their ERP system to their warehouse management system. The ERP sends orders in XML format, but the WMS only accepts JSON. What is the best solution?',
    options: [
      { value: 1, text: 'Manually convert each order', description: 'Not scalable' },
      { value: 2, text: 'Ask the vendor to change their system', description: 'Usually not feasible' },
      { value: 3, text: 'Use a middleware/integration platform to transform data', description: 'Correct approach' },
      { value: 4, text: 'Build a custom database to store both formats', description: 'Overcomplicated' }
    ],
    weight: 1.5
  },
  {
    id: 'tech_2',
    section: 'technical',
    text: 'If a system processes 1000 orders per day with 99.5% accuracy, how many orders have errors?',
    options: [
      { value: 1, text: '50 orders', description: 'Incorrect calculation' },
      { value: 2, text: '5 orders', description: 'Correct: 0.5% of 1000' },
      { value: 3, text: '10 orders', description: 'Incorrect calculation' },
      { value: 4, text: '25 orders', description: 'Incorrect calculation' }
    ],
    weight: 1.0
  },
  {
    id: 'tech_3',
    section: 'technical',
    text: 'Which of these is most important when designing system integrations?',
    options: [
      { value: 1, text: 'Making it work as fast as possible', description: 'Speed is important but not primary' },
      { value: 2, text: 'Ensuring data accuracy and consistency', description: 'Correct - data integrity is crucial' },
      { value: 3, text: 'Using the newest technology available', description: 'Not necessarily better' },
      { value: 4, text: 'Minimizing the number of systems involved', description: 'Sometimes unavoidable' }
    ],
    weight: 1.3
  },
  {
    id: 'tech_4',
    section: 'technical',
    text: 'What does API stand for in the context of system integration?',
    options: [
      { value: 1, text: 'Advanced Programming Interface', description: 'Incorrect' },
      { value: 2, text: 'Application Programming Interface', description: 'Correct' },
      { value: 3, text: 'Automated Process Integration', description: 'Incorrect' },
      { value: 4, text: 'Application Process Indicator', description: 'Incorrect' }
    ],
    weight: 1.0
  },
  {
    id: 'tech_5',
    section: 'technical',
    text: 'A system integration project has failed testing three times. What should be your first priority?',
    options: [
      { value: 1, text: 'Start over with a different approach', description: 'Premature - investigate first' },
      { value: 2, text: 'Analyze the root cause of failures', description: 'Correct - systematic diagnosis' },
      { value: 3, text: 'Add more resources to the project', description: 'May not solve the underlying issue' },
      { value: 4, text: 'Extend the timeline', description: 'Doesn\'t address the problem' }
    ],
    weight: 1.2
  },

  // WISCAR Framework Section
  {
    id: 'wiscar_will_1',
    section: 'wiscar',
    text: 'When a system integration fails, I push through errors until I find a solution.',
    options: [
      { value: 1, text: 'Never' },
      { value: 2, text: 'Rarely' },
      { value: 3, text: 'Sometimes' },
      { value: 4, text: 'Often' },
      { value: 5, text: 'Always' }
    ],
    weight: 1.1
  },
  {
    id: 'wiscar_will_2',
    section: 'wiscar',
    text: 'I am willing to work on complex, long-term projects that may take months to complete.',
    options: [
      { value: 1, text: 'Strongly Disagree' },
      { value: 2, text: 'Disagree' },
      { value: 3, text: 'Neutral' },
      { value: 4, text: 'Agree' },
      { value: 5, text: 'Strongly Agree' }
    ],
    weight: 1.2
  },
  {
    id: 'wiscar_interest_1',
    section: 'wiscar',
    text: 'How interested are you in digital transformation in supply chains?',
    options: [
      { value: 1, text: 'Not interested at all' },
      { value: 2, text: 'Slightly interested' },
      { value: 3, text: 'Moderately interested' },
      { value: 4, text: 'Very interested' },
      { value: 5, text: 'Extremely interested' }
    ],
    weight: 1.3
  },
  {
    id: 'wiscar_interest_2',
    section: 'wiscar',
    text: 'I find supply chain and logistics processes fascinating.',
    options: [
      { value: 1, text: 'Strongly Disagree' },
      { value: 2, text: 'Disagree' },
      { value: 3, text: 'Neutral' },
      { value: 4, text: 'Agree' },
      { value: 5, text: 'Strongly Agree' }
    ],
    weight: 1.1
  },
  {
    id: 'wiscar_skill_1',
    section: 'wiscar',
    text: 'Rate your current understanding of ERP systems (like SAP, Oracle, or NetSuite).',
    options: [
      { value: 1, text: 'No knowledge' },
      { value: 2, text: 'Basic awareness' },
      { value: 3, text: 'Some experience' },
      { value: 4, text: 'Good understanding' },
      { value: 5, text: 'Expert level' }
    ],
    weight: 1.2
  },
  {
    id: 'wiscar_skill_2',
    section: 'wiscar',
    text: 'How comfortable are you with data analysis and working with spreadsheets?',
    options: [
      { value: 1, text: 'Very uncomfortable' },
      { value: 2, text: 'Uncomfortable' },
      { value: 3, text: 'Neutral' },
      { value: 4, text: 'Comfortable' },
      { value: 5, text: 'Very comfortable' }
    ],
    weight: 1.0
  },
  {
    id: 'wiscar_cognitive_1',
    section: 'wiscar',
    text: 'I can quickly identify patterns and relationships in complex data.',
    options: [
      { value: 1, text: 'Strongly Disagree' },
      { value: 2, text: 'Disagree' },
      { value: 3, text: 'Neutral' },
      { value: 4, text: 'Agree' },
      { value: 5, text: 'Strongly Agree' }
    ],
    weight: 1.1
  },
  {
    id: 'wiscar_cognitive_2',
    section: 'wiscar',
    text: 'I enjoy working with logical, step-by-step processes.',
    options: [
      { value: 1, text: 'Strongly Disagree' },
      { value: 2, text: 'Disagree' },
      { value: 3, text: 'Neutral' },
      { value: 4, text: 'Agree' },
      { value: 5, text: 'Strongly Agree' }
    ],
    weight: 1.0
  },
  {
    id: 'wiscar_learn_1',
    section: 'wiscar',
    text: 'I learn quickly from failed deployments and system errors.',
    options: [
      { value: 1, text: 'Strongly Disagree' },
      { value: 2, text: 'Disagree' },
      { value: 3, text: 'Neutral' },
      { value: 4, text: 'Agree' },
      { value: 5, text: 'Strongly Agree' }
    ],
    weight: 1.2
  },
  {
    id: 'wiscar_learn_2',
    section: 'wiscar',
    text: 'I actively seek out new technologies and methods in my field.',
    options: [
      { value: 1, text: 'Never' },
      { value: 2, text: 'Rarely' },
      { value: 3, text: 'Sometimes' },
      { value: 4, text: 'Often' },
      { value: 5, text: 'Always' }
    ],
    weight: 1.1
  },
  {
    id: 'wiscar_realworld_1',
    section: 'wiscar',
    text: 'I am comfortable working across both technical and operations teams.',
    options: [
      { value: 1, text: 'Very uncomfortable' },
      { value: 2, text: 'Uncomfortable' },
      { value: 3, text: 'Neutral' },
      { value: 4, text: 'Comfortable' },
      { value: 5, text: 'Very comfortable' }
    ],
    weight: 1.2
  },
  {
    id: 'wiscar_realworld_2',
    section: 'wiscar',
    text: 'I prefer work environments that involve both technology and business strategy.',
    options: [
      { value: 1, text: 'Strongly Disagree' },
      { value: 2, text: 'Disagree' },
      { value: 3, text: 'Neutral' },
      { value: 4, text: 'Agree' },
      { value: 5, text: 'Strongly Agree' }
    ],
    weight: 1.1
  }
];

export const getSectionQuestions = (section: string) => {
  return assessmentQuestions.filter(q => q.section === section);
};

export const getTotalQuestions = () => assessmentQuestions.length;