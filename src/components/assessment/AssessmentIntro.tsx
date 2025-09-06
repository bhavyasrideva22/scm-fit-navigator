import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Target, Users, Zap } from 'lucide-react';

interface AssessmentIntroProps {
  onStart: () => void;
}

export const AssessmentIntro = ({ onStart }: AssessmentIntroProps) => {
  return (
    <div className="min-h-screen bg-gradient-hero py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Should You Become an SCM Systems Integrator?
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            A comprehensive AI-ready assessment to evaluate your cognitive, technical, and psychological fit for Supply Chain Management Systems Integration roles.
          </p>
        </div>

        <Card className="bg-white/95 backdrop-blur-sm shadow-elevation mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center gap-2">
              <Target className="h-6 w-6" />
              What is SCM Systems Integration?
            </CardTitle>
            <CardDescription className="text-base">
              SCM Systems Integration involves connecting and aligning multiple supply chain software platforms (ERP, WMS, TMS, EDI, CRM) so that data flows smoothly across procurement, inventory, logistics, and planning systems.
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-white/95 backdrop-blur-sm shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center gap-2">
                <Users className="h-5 w-5" />
                Common Career Paths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  SCM Systems Integrator
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  ERP Functional Consultant (SAP, Oracle, NetSuite)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Supply Chain Solutions Architect
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  EDI/Interface Specialist
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Business Systems Analyst – SCM Domain
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Who Succeeds in SCM Integration?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  Systematic thinkers with technical aptitude
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  High tolerance for complexity
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  Detail-oriented professionals
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  Problem-solvers who enjoy technical architecture
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  Strong communication skills (bridge tech & business)
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/95 backdrop-blur-sm shadow-elevation">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-primary">Assessment Overview</CardTitle>
            <CardDescription className="text-center text-base">
              This comprehensive assessment evaluates your readiness across multiple dimensions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold text-primary mb-2">Psychometric Evaluation</h3>
                <p className="text-sm text-muted-foreground">Interest, motivation, personality, cognitive style</p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">2</span>
                </div>
                <h3 className="font-semibold text-primary mb-2">Technical Readiness</h3>
                <p className="text-sm text-muted-foreground">Aptitude, problem-solving, system understanding</p>
              </div>
              <div className="text-center">
                <div className="bg-success/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl font-bold text-success">3</span>
                </div>
                <h3 className="font-semibold text-primary mb-2">WISCAR Analysis</h3>
                <p className="text-sm text-muted-foreground">Will, Interest, Skill, Cognitive, Ability, Real-world alignment</p>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                onClick={onStart}
                size="lg"
                className="bg-gradient-primary hover:bg-gradient-primary/90 text-white px-8 py-4 text-lg font-semibold shadow-button transition-all duration-300 hover:scale-105"
              >
                Start Assessment
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Takes approximately 15-20 minutes • Get instant results
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};