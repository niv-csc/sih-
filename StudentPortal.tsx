import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { AIChat } from '@/components/AIChat';
import { 
  BookOpen, 
  Calendar, 
  GraduationCap, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Bot,
  Home,
  User,
  FileText,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';

const StudentPortal = () => {
  const [showAI, setShowAI] = useState(false);

  const upcomingAssignments = [
    { id: 1, title: 'Math Homework - Chapter 12', subject: 'Mathematics', dueDate: '2025-01-28', status: 'pending' },
    { id: 2, title: 'History Essay - Civil War', subject: 'History', dueDate: '2025-01-30', status: 'in-progress' },
    { id: 3, title: 'Science Lab Report', subject: 'Chemistry', dueDate: '2025-02-02', status: 'pending' },
  ];

  const recentGrades = [
    { subject: 'Mathematics', grade: 'A-', score: 92 },
    { subject: 'English', grade: 'B+', score: 88 },
    { subject: 'Chemistry', grade: 'A', score: 95 },
    { subject: 'History', grade: 'B', score: 85 },
  ];

  const todaySchedule = [
    { time: '08:00', subject: 'Mathematics', room: 'Room 201', teacher: 'Ms. Johnson' },
    { time: '09:30', subject: 'English Literature', room: 'Room 105', teacher: 'Mr. Smith' },
    { time: '11:00', subject: 'Chemistry', room: 'Lab 3', teacher: 'Dr. Brown' },
    { time: '13:00', subject: 'History', room: 'Room 302', teacher: 'Mrs. Davis' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="bg-card/50 backdrop-blur-sm border-b border-border/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary">
              <Home className="h-5 w-5" />
              <span className="font-medium">EduManage</span>
            </Link>
            <div className="h-6 w-px bg-border"></div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold text-foreground">Student Portal</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              onClick={() => setShowAI(true)}
              className="bg-gradient-to-r from-primary to-accent hover:shadow-glow"
            >
              <Bot className="h-4 w-4 mr-2" />
              AI Study Assistant
            </Button>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              <span>John Doe</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Welcome back, John!</h2>
          <p className="text-muted-foreground">Here's your academic overview for today.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-gradient-to-br from-card to-muted/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">92%</div>
                  <div className="text-sm text-muted-foreground">Overall GPA</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-card to-muted/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-accent mb-1">3</div>
                  <div className="text-sm text-muted-foreground">Pending Assignments</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-card to-muted/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-orange-500 mb-1">95%</div>
                  <div className="text-sm text-muted-foreground">Attendance Rate</div>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Assignments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Upcoming Assignments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAssignments.map((assignment) => (
                    <div key={assignment.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{assignment.title}</h4>
                        <p className="text-sm text-muted-foreground">{assignment.subject}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <p className="text-sm font-medium">Due: {assignment.dueDate}</p>
                          <Badge variant={assignment.status === 'pending' ? 'destructive' : 'secondary'}>
                            {assignment.status === 'pending' ? 'Not Started' : 'In Progress'}
                          </Badge>
                        </div>
                        {assignment.status === 'pending' ? 
                          <AlertCircle className="h-5 w-5 text-destructive" /> : 
                          <Clock className="h-5 w-5 text-orange-500" />
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Grades */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Recent Grades
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentGrades.map((grade, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{grade.subject}</h4>
                        <Progress value={grade.score} className="w-full mt-1" />
                      </div>
                      <div className="ml-4 text-right">
                        <div className="text-lg font-bold text-foreground">{grade.grade}</div>
                        <div className="text-sm text-muted-foreground">{grade.score}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Today's Schedule */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Today's Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {todaySchedule.map((class_, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg">
                      <div className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                        {class_.time}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground text-sm">{class_.subject}</h4>
                        <p className="text-xs text-muted-foreground">{class_.room}</p>
                        <p className="text-xs text-muted-foreground">{class_.teacher}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI Assistant CTA */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-6 text-center">
                <Bot className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Need Study Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Ask your AI study assistant for homework help, exam prep tips, and learning strategies.
                </p>
                <Button
                  onClick={() => setShowAI(true)}
                  className="w-full bg-gradient-to-r from-primary to-accent"
                >
                  Chat with AI Assistant
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* AI Chat Modal */}
      {showAI && (
        <AIChat
          role="student"
          isOpen={true}
          onClose={() => setShowAI(false)}
        />
      )}
    </div>
  );
};

export default StudentPortal;