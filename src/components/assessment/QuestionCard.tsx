import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Question } from '@/types/assessment';
import { useState } from 'react';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (value: number) => void;
  onNext: () => void;
  onPrevious?: () => void;
  selectedValue?: number;
}

export const QuestionCard = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  onNext,
  onPrevious,
  selectedValue
}: QuestionCardProps) => {
  const [currentValue, setCurrentValue] = useState<string>(selectedValue?.toString() || '');

  const handleValueChange = (value: string) => {
    setCurrentValue(value);
    onAnswer(parseInt(value));
  };

  const getSectionTitle = (section: string) => {
    switch (section) {
      case 'psychometric':
        return 'Psychometric Evaluation';
      case 'technical':
        return 'Technical Assessment';
      case 'wiscar':
        return 'WISCAR Framework';
      default:
        return 'Assessment';
    }
  };

  const getSectionColor = (section: string) => {
    switch (section) {
      case 'psychometric':
        return 'text-primary';
      case 'technical':
        return 'text-accent';
      case 'wiscar':
        return 'text-success';
      default:
        return 'text-primary';
    }
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Question {questionNumber} of {totalQuestions}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {Math.round((questionNumber / totalQuestions) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        <Card className="shadow-elevation">
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <span className={`text-sm font-semibold ${getSectionColor(question.section)} uppercase tracking-wide`}>
                {getSectionTitle(question.section)}
              </span>
            </div>
            <CardTitle className="text-xl md:text-2xl leading-relaxed">
              {question.text}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <RadioGroup 
              value={currentValue} 
              onValueChange={handleValueChange}
              className="space-y-4"
            >
              {question.options.map((option, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem 
                    value={option.value.toString()} 
                    id={`option-${index}`}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <Label htmlFor={`option-${index}`} className="text-base font-medium cursor-pointer">
                      {option.text}
                    </Label>
                    {option.description && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {option.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </RadioGroup>

            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={onPrevious}
                disabled={!onPrevious}
                className="px-6"
              >
                Previous
              </Button>
              <Button
                onClick={onNext}
                disabled={!currentValue}
                className="bg-gradient-primary hover:bg-gradient-primary/90 text-white px-8 shadow-button"
              >
                {questionNumber === totalQuestions ? 'Complete Assessment' : 'Next Question'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};