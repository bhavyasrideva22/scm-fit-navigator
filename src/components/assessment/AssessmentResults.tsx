import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { AssessmentResult } from '@/types/assessment';
import { CheckCircle, AlertCircle, XCircle, Target, Brain, Cog, TrendingUp, BookOpen, Users } from 'lucide-react';

interface AssessmentResultsProps {
  result: AssessmentResult;
  onRestart: () => void;
}

export const AssessmentResults = ({ result, onRestart }: AssessmentResultsProps) => {
  const getRecommendationIcon = () => {
    switch (result.recommendation) {
      case 'Yes':
        return <CheckCircle className="h-8 w-8 text-success" />;
      case 'Maybe':
        return <AlertCircle className="h-8 w-8 text-warning" />;
      case 'No':
        return <XCircle className="h-8 w-8 text-destructive" />;
    }
  };

  const getRecommendationColor = () => {
    switch (result.confidenceLevel) {
      case 'Green':
        return 'bg-success text-success-foreground';
      case 'Yellow':
        return 'bg-warning text-warning-foreground';
      case 'Red':
        return 'bg-destructive text-destructive-foreground';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-success';
    if (score >= 60) return 'text-warning';
    return 'text-destructive';
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Your Assessment Results
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Based on your responses, here's your comprehensive evaluation for becoming an SCM Systems Integrator.
          </p>
        </div>

        {/* Overall Result Card */}
        <Card className="shadow-elevation mb-8 bg-gradient-card">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-4">
              {getRecommendationIcon()}
            </div>
            <CardTitle className="text-2xl mb-2">
              Recommendation: <span className={result.confidenceLevel === 'Green' ? 'text-success' : result.confidenceLevel === 'Yellow' ? 'text-warning' : 'text-destructive'}>{result.recommendation}</span>
            </CardTitle>
            <div className="flex justify-center mb-4">
              <Badge className={`${getRecommendationColor()} px-4 py-2 text-base font-semibold`}>
                {result.confidenceLevel} Confidence Level
              </Badge>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                {result.overallConfidenceScore}%
              </div>
              <p className="text-muted-foreground">Overall Confidence Score</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-center text-lg leading-relaxed text-foreground">
              {result.insights}
            </p>
          </CardContent>
        </Card>

        {/* Detailed Scores */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                Psychological Fit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-primary">{result.psychologicalFit}%</span>
                <span className={`font-semibold ${getScoreColor(result.psychologicalFit)}`}>
                  {result.psychologicalFit >= 80 ? 'Excellent' : result.psychologicalFit >= 60 ? 'Good' : 'Needs Development'}
                </span>
              </div>
              <Progress value={result.psychologicalFit} className="h-3" />
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cog className="h-5 w-5 text-accent" />
                Technical Readiness
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-accent">{result.technicalReadiness}%</span>
                <span className={`font-semibold ${getScoreColor(result.technicalReadiness)}`}>
                  {result.technicalReadiness >= 80 ? 'Excellent' : result.technicalReadiness >= 60 ? 'Good' : 'Needs Development'}
                </span>
              </div>
              <Progress value={result.technicalReadiness} className="h-3" />
            </CardContent>
          </Card>
        </div>

        {/* WISCAR Breakdown */}
        <Card className="shadow-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-success" />
              WISCAR Framework Analysis
            </CardTitle>
            <CardDescription>
              Detailed breakdown of your readiness across six key dimensions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(result.wiscar).map(([key, value]) => (
                <div key={key} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium capitalize">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </span>
                    <span className={`font-bold ${getScoreColor(value)}`}>{value}%</span>
                  </div>
                  <Progress value={value} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Next Steps and Recommendations */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Next Steps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {result.nextSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-1 flex-shrink-0" />
                    <span className="text-sm">{step}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-accent" />
                Learning Path
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {result.learningPath.map((path, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="bg-accent/10 text-accent rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-sm">{path}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Career Roles */}
        <Card className="shadow-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-success" />
              Recommended Career Roles
            </CardTitle>
            <CardDescription>
              Roles that align with your assessment results
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {result.careerRoles.map((role, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-primary">{role.title}</h4>
                    <p className="text-sm text-muted-foreground">{role.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`font-bold ${getScoreColor(role.skillMatch)}`}>
                      {role.skillMatch}%
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 rounded-full ${
                            i < Math.round(role.skillMatch / 20) ? 'bg-success' : 'bg-muted'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Alternative Roles (if applicable) */}
        {result.alternateRoles.length > 0 && (
          <Card className="shadow-card mb-8">
            <CardHeader>
              <CardTitle className="text-primary">Alternative Career Paths</CardTitle>
              <CardDescription>
                These roles might be a better fit based on your assessment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-3">
                {result.alternateRoles.map((role, index) => (
                  <div key={index} className="p-3 bg-muted/30 rounded-lg">
                    <span className="font-medium">{role}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="text-center">
          <Button
            onClick={onRestart}
            size="lg"
            variant="outline"
            className="px-8 py-4 text-lg"
          >
            Take Assessment Again
          </Button>
        </div>
      </div>
    </div>
  );
};