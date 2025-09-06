import { useState, useCallback } from 'react';
import { AssessmentIntro } from './AssessmentIntro';
import { QuestionCard } from './QuestionCard';
import { AssessmentResults } from './AssessmentResults';
import { AssessmentState, AssessmentResponse, AssessmentSection } from '@/types/assessment';
import { assessmentQuestions } from '@/data/assessmentQuestions';
import { calculateAssessmentResult } from '@/utils/assessmentCalculations';
import { useToast } from '@/hooks/use-toast';

export const AssessmentFlow = () => {
  const { toast } = useToast();
  const [assessmentState, setAssessmentState] = useState<AssessmentState>({
    currentSection: 'introduction',
    currentQuestionIndex: 0,
    responses: [],
    isComplete: false
  });

  const handleStartAssessment = useCallback(() => {
    setAssessmentState(prev => ({
      ...prev,
      currentSection: 'psychometric',
      currentQuestionIndex: 0
    }));
    toast({
      title: "Assessment Started",
      description: "Answer each question honestly for the most accurate results.",
    });
  }, [toast]);

  const handleAnswer = useCallback((questionId: string, value: number) => {
    setAssessmentState(prev => {
      const existingResponseIndex = prev.responses.findIndex(r => r.questionId === questionId);
      const newResponses = [...prev.responses];
      
      if (existingResponseIndex >= 0) {
        newResponses[existingResponseIndex] = { questionId, value };
      } else {
        newResponses.push({ questionId, value });
      }
      
      return {
        ...prev,
        responses: newResponses
      };
    });
  }, []);

  const handleNext = useCallback(() => {
    setAssessmentState(prev => {
      const nextIndex = prev.currentQuestionIndex + 1;
      
      if (nextIndex >= assessmentQuestions.length) {
        // Assessment complete
        const result = calculateAssessmentResult(prev.responses);
        toast({
          title: "Assessment Complete!",
          description: "Your results have been calculated. Review your personalized recommendations below.",
        });
        return {
          ...prev,
          isComplete: true,
          result
        };
      }
      
      return {
        ...prev,
        currentQuestionIndex: nextIndex
      };
    });
  }, [toast]);

  const handlePrevious = useCallback(() => {
    setAssessmentState(prev => ({
      ...prev,
      currentQuestionIndex: Math.max(0, prev.currentQuestionIndex - 1)
    }));
  }, []);

  const handleRestart = useCallback(() => {
    setAssessmentState({
      currentSection: 'introduction',
      currentQuestionIndex: 0,
      responses: [],
      isComplete: false
    });
    toast({
      title: "Assessment Reset",
      description: "Starting fresh assessment. Take your time with each question.",
    });
  }, [toast]);

  // Show introduction
  if (assessmentState.currentSection === 'introduction') {
    return <AssessmentIntro onStart={handleStartAssessment} />;
  }

  // Show results
  if (assessmentState.isComplete && assessmentState.result) {
    return <AssessmentResults result={assessmentState.result} onRestart={handleRestart} />;
  }

  // Show current question
  const currentQuestion = assessmentQuestions[assessmentState.currentQuestionIndex];
  const currentResponse = assessmentState.responses.find(r => r.questionId === currentQuestion.id);

  return (
    <QuestionCard
      question={currentQuestion}
      questionNumber={assessmentState.currentQuestionIndex + 1}
      totalQuestions={assessmentQuestions.length}
      onAnswer={(value) => handleAnswer(currentQuestion.id, value)}
      onNext={handleNext}
      onPrevious={assessmentState.currentQuestionIndex > 0 ? handlePrevious : undefined}
      selectedValue={currentResponse?.value}
    />
  );
};