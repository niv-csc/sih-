import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { AIChat } from '@/components/AIChat';
import { 
  Users, 
  Calendar, 
  MessageSquare, 
  FileText, 
  Clock,
  Bot,
  Home,
  User,
  GraduationCap,
  CheckCircle,
  AlertCircle,
  Bell,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ParentPortal = () => {
  const [showAI, setShowAI] = useState(false);

  const children = [
    { 
      id: 1, 
      name: 'Emma Johnson', 
      grade: '10th Grade', 
      gpa: 3.8, 
      attendance: 96,
      recentGrade: 'A-',
      subject: 'Mathematics'
    },
    { 
      id: 2, 
      name: 'Michael Johnson', 
      grade: '7th Grade', 
      gpa: 3.2, 
      attendance: 92,
      recentGrade: 'B+',
      subject: 'English'
    },
  ];

  const upcomingEvents = [
    { id: 1, title: 'Parent-Teacher Conference', date: '2025-01-28', time: '3:00 PM', child: 'Emma Johnson' },
    { id: 2, title: 'Science Fair', date: '2025-02-05', time: '10:00 AM', child: 'Both Children' },
    { id: 3, title: 'Mid-term Reports', date: '2025-02-10', time: 'All Day', child: 'Both Children' },
  ];

  const recentMessages = [
    { id: 1, from: 'Ms. Davis - Mathematics', subject: 'Emma\'s Progress Update', date: '2025-01-24', read: false },
    { id: 2, from: 'Mr. Thompson - English', subject: 'Michael\'s Reading Assignment', date: '2025-01-23', read: true },
    { id: 3, from: 'School Administration', subject: 'Upcoming Events Notice', date: '2025-01-22', read: true },
  ];

  const assignments = [
    { child: 'Emma', subject: 'Mathematics', assignment: 'Chapter 12 Test', dueDate: '2025-01-28', status: 'pending' },
    { child: 'Emma', subject: 'History', assignment: 'Civil War Essay', dueDate: '2025-01-30', status: 'submitted' },
    { child: 'Michael', subject: 'Science', assignment: 'Solar System Project', dueDate: '2025-02-02', status: 'in-progress' },
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
              <Users className="h-6 w-6 text-purple-500" />
              <h1 className="text-xl font-bold text-foreground">Parent Portal</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              onClick={() => setShowAI(true)}
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:shadow-glow"
            >
              <Bot className="h-4 w-4 mr-2" />
              AI Parent Assistant
            </Button>
            <Button variant="outline" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-2 w-2 bg-destructive rounded-full"></span>
            </Button>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              <span>Sarah Johnson</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Welcome back, Sarah!</h2>
          <p className="text-muted-foreground">Monitor your children's academic progress and stay connected with their education.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Children Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  My Children
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {children.map((child) => (
                    <div key={child.id} className="p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-foreground">{child.name}</h3>
                        <Badge variant="outline">{child.grade}</Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">GPA</span>
                          <span className="font-medium">{child.gpa}/4.0</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Attendance</span>
                          <span className="font-medium">{child.attendance}%</span>
                        </div>
                        
                        <div className="pt-2 border-t border-border/50">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Latest Grade</span>
                            <div className="text-right">
                              <div className="font-bold text-primary">{child.recentGrade}</div>
                              <div className="text-xs text-muted-foreground">{child.subject}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Messages */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Recent Messages
                </CardTitle>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentMessages.map((message) => (
                    <div key={message.id} className={`flex items-center justify-between p-3 rounded-lg ${
                      message.read ? 'bg-muted/20' : 'bg-primary/10 border border-primary/20'
                    }`}>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium text-foreground">{message.subject}</h4>
                          {!message.read && <div className="h-2 w-2 bg-primary rounded-full"></div>}
                        </div>
                        <p className="text-sm text-muted-foreground">{message.from}</p>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {message.date}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Assignments Tracker */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Assignment Tracker
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {assignments.map((assignment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{assignment.assignment}</h4>
                        <p className="text-sm text-muted-foreground">
                          {assignment.child} - {assignment.subject}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <p className="text-sm font-medium">Due: {assignment.dueDate}</p>
                          <Badge variant={
                            assignment.status === 'submitted' ? 'default' : 
                            assignment.status === 'in-progress' ? 'secondary' : 'destructive'
                          }>
                            {assignment.status === 'submitted' ? 'Submitted' : 
                             assignment.status === 'in-progress' ? 'In Progress' : 'Not Started'}
                          </Badge>
                        </div>
                        {assignment.status === 'submitted' ? 
                          <CheckCircle className="h-5 w-5 text-green-500" /> : 
                          <AlertCircle className="h-5 w-5 text-orange-500" />
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Events & Support */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="p-3 bg-muted/20 rounded-lg">
                      <h4 className="font-medium text-foreground text-sm">{event.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{event.child}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="text-xs font-bold text-purple-500 bg-purple-500/10 px-2 py-1 rounded">
                          {event.date}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {event.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Quick Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-3 bg-green-500/10 rounded-lg">
                    <div className="text-2xl font-bold text-green-500">94%</div>
                    <div className="text-sm text-muted-foreground">Average Attendance</div>
                  </div>
                  <div className="text-center p-3 bg-blue-500/10 rounded-lg">
                    <div className="text-2xl font-bold text-blue-500">3.5</div>
                    <div className="text-sm text-muted-foreground">Average GPA</div>
                  </div>
                  <div className="text-center p-3 bg-orange-500/10 rounded-lg">
                    <div className="text-2xl font-bold text-orange-500">2</div>
                    <div className="text-sm text-muted-foreground">Unread Messages</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Assistant CTA */}
            <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border-purple-500/20">
              <CardContent className="p-6 text-center">
                <Bot className="h-12 w-12 text-purple-500 mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Parenting Support</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get guidance on supporting your child's education, communicating with teachers, and more.
                </p>
                <Button
                  onClick={() => setShowAI(true)}
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600"
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
          role="parent"
          isOpen={true}
          onClose={() => setShowAI(false)}
        />
      )}
    </div>
  );
};

export default ParentPortal;