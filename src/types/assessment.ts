export interface Question {
  id: string;
  text: string;
  options: Option[];
  section: AssessmentSection;
  weight?: number;
}

export interface Option {
  value: number;
  text: string;
  description?: string;
}

export interface AssessmentResponse {
  questionId: string;
  value: number;
}

export interface AssessmentResult {
  psychologicalFit: number;
  technicalReadiness: number;
  wiscar: WISCARScores;
  overallConfidenceScore: number;
  recommendation: 'Yes' | 'Maybe' | 'No';
  confidenceLevel: 'Green' | 'Yellow' | 'Red';
  nextSteps: string[];
  careerRoles: CareerRole[];
  alternateRoles: string[];
  learningPath: string[];
  insights: string;
}

export interface WISCARScores {
  will: number;
  interest: number;
  skill: number;
  cognitive: number;
  abilityToLearn: number;
  realWorldAlignment: number;
}

export interface CareerRole {
  title: string;
  description: string;
  skillMatch: number;
}

export type AssessmentSection = 
  | 'introduction'
  | 'psychometric'
  | 'technical'
  | 'wiscar'
  | 'results';

export interface AssessmentState {
  currentSection: AssessmentSection;
  currentQuestionIndex: number;
  responses: AssessmentResponse[];
  isComplete: boolean;
  result?: AssessmentResult;
}