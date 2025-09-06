import { AssessmentResponse, AssessmentResult, WISCARScores, CareerRole } from '@/types/assessment';
import { assessmentQuestions } from '@/data/assessmentQuestions';

export const calculateAssessmentResult = (responses: AssessmentResponse[]): AssessmentResult => {
  // Create response map for easy lookup
  const responseMap = new Map(responses.map(r => [r.questionId, r.value]));
  
  // Calculate section scores
  const psychologicalFit = calculatePsychologicalFit(responseMap);
  const technicalReadiness = calculateTechnicalReadiness(responseMap);
  const wiscar = calculateWISCARScores(responseMap);
  
  // Calculate overall confidence score
  const overallConfidenceScore = Math.round(
    (psychologicalFit * 0.3 + technicalReadiness * 0.3 + getAverageWISCAR(wiscar) * 0.4)
  );
  
  // Determine recommendation and confidence level
  const { recommendation, confidenceLevel } = getRecommendation(overallConfidenceScore);
  
  // Generate insights and recommendations
  const insights = generateInsights(psychologicalFit, technicalReadiness, wiscar, recommendation);
  const nextSteps = generateNextSteps(recommendation, overallConfidenceScore);
  const careerRoles = generateCareerRoles(overallConfidenceScore);
  const alternateRoles = generateAlternateRoles(recommendation);
  const learningPath = generateLearningPath(recommendation, technicalReadiness);
  
  return {
    psychologicalFit,
    technicalReadiness,
    wiscar,
    overallConfidenceScore,
    recommendation,
    confidenceLevel,
    nextSteps,
    careerRoles,
    alternateRoles,
    learningPath,
    insights
  };
};

const calculatePsychologicalFit = (responseMap: Map<string, number>): number => {
  const psychQuestions = assessmentQuestions.filter(q => q.section === 'psychometric');
  let totalScore = 0;
  let totalWeight = 0;
  
  psychQuestions.forEach(question => {
    const response = responseMap.get(question.id);
    if (response !== undefined) {
      const weight = question.weight || 1;
      totalScore += response * weight;
      totalWeight += weight;
    }
  });
  
  return Math.round((totalScore / (totalWeight * 5)) * 100);
};

const calculateTechnicalReadiness = (responseMap: Map<string, number>): number => {
  const techQuestions = assessmentQuestions.filter(q => q.section === 'technical');
  let totalScore = 0;
  let totalWeight = 0;
  
  techQuestions.forEach(question => {
    const response = responseMap.get(question.id);
    if (response !== undefined) {
      const weight = question.weight || 1;
      // For technical questions, correct answers are typically option 2 or 3
      const normalizedScore = getNormalizedTechnicalScore(question.id, response);
      totalScore += normalizedScore * weight;
      totalWeight += weight;
    }
  });
  
  return Math.round((totalScore / totalWeight) * 100);
};

const getNormalizedTechnicalScore = (questionId: string, response: number): number => {
  // Define correct answers for technical questions
  const correctAnswers: Record<string, number> = {
    'tech_1': 3, // Middleware solution
    'tech_2': 2, // 5 orders
    'tech_3': 2, // Data accuracy
    'tech_4': 2, // API definition
    'tech_5': 2  // Analyze root cause
  };
  
  const correctAnswer = correctAnswers[questionId];
  if (!correctAnswer) return response / 5; // Default normalization
  
  return response === correctAnswer ? 1 : 0.2; // Full score for correct, partial for incorrect
};

const calculateWISCARScores = (responseMap: Map<string, number>): WISCARScores => {
  const calculateComponentScore = (prefix: string): number => {
    const questions = assessmentQuestions.filter(q => 
      q.section === 'wiscar' && q.id.includes(prefix)
    );
    
    let totalScore = 0;
    let totalWeight = 0;
    
    questions.forEach(question => {
      const response = responseMap.get(question.id);
      if (response !== undefined) {
        const weight = question.weight || 1;
        totalScore += response * weight;
        totalWeight += weight;
      }
    });
    
    return Math.round((totalScore / (totalWeight * 5)) * 100);
  };
  
  return {
    will: calculateComponentScore('will'),
    interest: calculateComponentScore('interest'),
    skill: calculateComponentScore('skill'),
    cognitive: calculateComponentScore('cognitive'),
    abilityToLearn: calculateComponentScore('learn'),
    realWorldAlignment: calculateComponentScore('realworld')
  };
};

const getAverageWISCAR = (wiscar: WISCARScores): number => {
  const scores = Object.values(wiscar);
  return scores.reduce((sum, score) => sum + score, 0) / scores.length;
};

const getRecommendation = (overallScore: number): { recommendation: 'Yes' | 'Maybe' | 'No', confidenceLevel: 'Green' | 'Yellow' | 'Red' } => {
  if (overallScore >= 85) {
    return { recommendation: 'Yes', confidenceLevel: 'Green' };
  } else if (overallScore >= 70) {
    return { recommendation: 'Maybe', confidenceLevel: 'Yellow' };
  } else {
    return { recommendation: 'No', confidenceLevel: 'Red' };
  }
};

const generateInsights = (psychFit: number, techReadiness: number, wiscar: WISCARScores, recommendation: string): string => {
  if (recommendation === 'Yes') {
    return "You demonstrate both the personality and technical readiness needed to thrive as an SCM Systems Integrator. You're well-suited for digital transformation roles in operations.";
  } else if (recommendation === 'Maybe') {
    return "You're interested and motivated, but may need to build core technical or systems knowledge. Start with integration basics, then re-assess.";
  } else {
    return "Your traits suggest a preference for less structured or less technical environments. Consider adjacent roles like Business Analyst, Data Analyst, or Project Coordinator.";
  }
};

const generateNextSteps = (recommendation: string, score: number): string[] => {
  if (recommendation === 'Yes') {
    return [
      'Start with ERP System Training (SAP, NetSuite)',
      'Learn EDI/API fundamentals',
      'Practice workflow mapping exercises',
      'Join SCM integration communities'
    ];
  } else if (recommendation === 'Maybe') {
    return [
      'Take "Intro to Supply Chain IT Systems" course',
      'Build Excel/SQL skills',
      'Practice basic system troubleshooting',
      'Retake assessment in 3-6 months'
    ];
  } else {
    return [
      'Take a broad career fit diagnostic',
      'Explore Business Operations roles',
      'Consider Project Management certification',
      'Focus on business analysis skills'
    ];
  }
};

const generateCareerRoles = (score: number): CareerRole[] => {
  const baseRoles: CareerRole[] = [
    {
      title: 'SCM Systems Integrator',
      description: 'Connect ERP + SCM tools',
      skillMatch: Math.min(score, 100)
    },
    {
      title: 'ERP Functional Consultant',
      description: 'Configure & deploy ERP systems',
      skillMatch: Math.min(score - 5, 100)
    },
    {
      title: 'Supply Chain Solutions Architect',
      description: 'Architect tech flows',
      skillMatch: Math.min(score - 10, 100)
    },
    {
      title: 'EDI/Integration Specialist',
      description: 'Interface between systems',
      skillMatch: Math.min(score - 8, 100)
    },
    {
      title: 'Business Systems Analyst – SCM',
      description: 'Translate ops needs to dev teams',
      skillMatch: Math.min(score - 12, 100)
    }
  ];
  
  return baseRoles.filter(role => role.skillMatch > 0);
};

const generateAlternateRoles = (recommendation: string): string[] => {
  if (recommendation === 'No') {
    return [
      'Business Analyst (Supply Chain)',
      'Operations Analyst',
      'Procurement System Coordinator',
      'Digital Supply Chain Project Manager'
    ];
  }
  return [];
};

const generateLearningPath = (recommendation: string, techScore: number): string[] => {
  if (recommendation === 'Yes') {
    return [
      'Advanced ERP Configuration',
      'Integration Design Patterns (SOA, REST, B2B)',
      'Middleware Tools (MuleSoft, Dell Boomi)',
      'System Testing & Deployment'
    ];
  } else if (recommendation === 'Maybe') {
    return [
      'Basics of Supply Chain Systems',
      'Excel & Data Cleaning',
      'Intro to ERP, TMS, WMS',
      'Workflow Mapping & Business Process Modelling'
    ];
  } else {
    return [
      'Business Analysis Fundamentals',
      'Project Management Basics',
      'Operations Management Principles',
      'Data Analysis with Excel/PowerBI'
    ];
  }
};