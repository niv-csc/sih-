import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AIChat } from '@/components/AIChat';
import { 
  BookOpen, 
  Users, 
  Calendar, 
  FileText, 
  Clock,
  Bot,
  Home,
  User,
  GraduationCap,
  CheckCircle,
  AlertTriangle,
  PlusCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const TeacherDashboard = () => {
  const [showAI, setShowAI] = useState(false);

  const classes = [
    { id: 1, name: 'Mathematics 101', students: 28, period: '1st Period', room: 'Room 201' },
    { id: 2, name: 'Algebra II', students: 24, period: '3rd Period', room: 'Room 201' },
    { id: 3, name: 'Pre-Calculus', students: 22, period: '5th Period', room: 'Room 201' },
  ];

  const pendingTasks = [
    { id: 1, task: 'Grade Chapter 12 Tests', class: 'Mathematics 101', priority: 'high', dueDate: '2025-01-26' },
    { id: 2, task: 'Prepare Lesson Plan - Quadratic Equations', class: 'Algebra II', priority: 'medium', dueDate: '2025-01-28' },
    { id: 3, task: 'Parent Conference - Sarah Johnson', class: 'Pre-Calculus', priority: 'high', dueDate: '2025-01-27' },
    { id: 4, task: 'Submit Progress Reports', class: 'All Classes', priority: 'medium', dueDate: '2025-01-30' },
  ];

  const todaySchedule = [
    { time: '08:00-08:45', class: 'Mathematics 101', room: 'Room 201', activity: 'Chapter 12 Review' },
    { time: '09:00-09:45', class: 'Free Period', room: '', activity: 'Office Hours' },
    { time: '10:00-10:45', class: 'Algebra II', room: 'Room 201', activity: 'Quadratic Functions' },
    { time: '13:00-13:45', class: 'Pre-Calculus', room: 'Room 201', activity: 'Limits Introduction' },
  ];

  const recentActivity = [
    { type: 'grade', message: '28 tests graded for Mathematics 101', time: '2 hours ago' },
    { type: 'assignment', message: 'New assignment posted to Algebra II', time: '1 day ago' },
    { type: 'message', message: '3 new parent messages received', time: '2 days ago' },
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
              <BookOpen className="h-6 w-6 text-green-500" />
              <h1 className="text-xl font-bold text-foreground">Teacher Dashboard</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              onClick={() => setShowAI(true)}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:shadow-glow"
            >
              <Bot className="h-4 w-4 mr-2" />
              AI Teaching Assistant
            </Button>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              <span>Ms. Johnson</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Good morning, Ms. Johnson!</h2>
          <p className="text-muted-foreground">Here's your teaching dashboard for today.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-br from-card to-muted/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-500 mb-1">74</div>
                  <div className="text-sm text-muted-foreground">Total Students</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-card to-muted/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-500 mb-1">3</div>
                  <div className="text-sm text-muted-foreground">Active Classes</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-card to-muted/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-orange-500 mb-1">12</div>
                  <div className="text-sm text-muted-foreground">Pending Tasks</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-card to-muted/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-purple-500 mb-1">28</div>
                  <div className="text-sm text-muted-foreground">Tests to Grade</div>
                </CardContent>
              </Card>
            </div>

            {/* Classes Overview */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  My Classes
                </CardTitle>
                <Button size="sm" className="bg-green-500 hover:bg-green-600">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  New Class
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {classes.map((class_) => (
                    <div key={class_.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{class_.name}</h4>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {class_.students} students
                          </span>
                          <Badge variant="outline">{class_.period}</Badge>
                          <span className="text-sm text-muted-foreground">{class_.room}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Manage
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Pending Tasks */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Pending Tasks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {pendingTasks.map((task) => (
                    <div key={task.id} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{task.task}</h4>
                        <p className="text-sm text-muted-foreground">{task.class}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant={task.priority === 'high' ? 'destructive' : 'secondary'}>
                          {task.priority === 'high' ? <AlertTriangle className="h-3 w-3 mr-1" /> : null}
                          {task.priority}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{task.dueDate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Schedule & Activity */}
          <div className="space-y-6">
            {/* Today's Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Today's Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {todaySchedule.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg">
                      <div className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded">
                        {item.time}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground text-sm">{item.class}</h4>
                        {item.room && <p className="text-xs text-muted-foreground">{item.room}</p>}
                        <p className="text-xs text-muted-foreground">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm text-foreground">{activity.message}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI Assistant CTA */}
            <Card className="bg-gradient-to-br from-green-500/10 to-green-600/10 border-green-500/20">
              <CardContent className="p-6 text-center">
                <Bot className="h-12 w-12 text-green-500 mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Teaching Assistant</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get help with lesson planning, classroom management, and educational strategies.
                </p>
                <Button
                  onClick={() => setShowAI(true)}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600"
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
          role="teacher"
          isOpen={true}
          onClose={() => setShowAI(false)}
        />
      )}
    </div>
  );
};

export default TeacherDashboard;