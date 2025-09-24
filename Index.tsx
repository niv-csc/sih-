import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { UserRole } from '@/lib/ai';
import { Bot, GraduationCap, Users, BookOpen, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const portals = [
    {
      role: 'student' as UserRole,
      title: 'Student Portal',
      description: 'Access your grades, assignments, and schedule',
      icon: GraduationCap,
      gradient: 'from-blue-500 to-blue-600',
      aiDescription: 'Get help with homework, study tips, and learning strategies'
    },
    {
      role: 'teacher' as UserRole,
      title: 'Teacher Dashboard',
      description: 'Manage classes, grades, and curriculum',
      icon: BookOpen,
      gradient: 'from-green-500 to-green-600',
      aiDescription: 'AI assistance for lesson planning and classroom management'
    },
    {
      role: 'parent' as UserRole,
      title: 'Parent Portal',
      description: "Monitor your child's academic progress",
      icon: Users,
      gradient: 'from-purple-500 to-purple-600',
      aiDescription: 'Support your child\'s education with AI guidance'
    },
    {
      role: 'admin' as UserRole,
      title: 'Administrator',
      description: 'System management and oversight',
      icon: Settings,
      gradient: 'from-orange-500 to-orange-600',
      aiDescription: 'AI-powered school administration and policy assistance'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary via-primary-glow to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Bot className="h-12 w-12 text-white animate-pulse" />
            <h1 className="text-5xl font-bold text-white">EduManage AI</h1>
          </div>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Comprehensive School Management System powered by Artificial Intelligence
          </p>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white/90">
            <Bot className="h-4 w-4" />
            <span className="text-sm font-medium">AI-Enhanced Learning Experience</span>
          </div>
        </div>
      </div>

      {/* Portal Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Choose Your Portal
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access your personalized dashboard with AI-powered assistance for every educational role
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portals.map((portal) => {
            const IconComponent = portal.icon;
            return (
              <Card 
                key={portal.role}
                className="relative overflow-hidden bg-gradient-to-br from-card to-muted/20 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 group"
              >
                <div className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${portal.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {portal.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm">
                    {portal.description}
                  </p>

                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                      <Bot className="h-3 w-3" />
                      <span>AI Assistant</span>
                    </div>
                    <p className="text-xs text-foreground">
                      {portal.aiDescription}
                    </p>
                  </div>
                  
                  <Button 
                    className={`w-full bg-gradient-to-r ${portal.gradient} hover:shadow-lg hover:shadow-primary/20 text-white font-medium group`}
                    asChild
                  >
                    <Link to={`/${portal.role}`}>
                      <GraduationCap className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                      Enter {portal.title}
                    </Link>
                  </Button>
                </div>

                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            AI-Powered Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-card to-muted/20 rounded-lg p-6 border border-border/50">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Smart Assistance</h3>
              <p className="text-muted-foreground text-sm">
                Get personalized help based on your role and educational needs
              </p>
            </div>
            <div className="bg-gradient-to-br from-card to-muted/20 rounded-lg p-6 border border-border/50">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Educational Focus</h3>
              <p className="text-muted-foreground text-sm">
                Specialized AI trained on educational best practices and pedagogy
              </p>
            </div>
            <div className="bg-gradient-to-br from-card to-muted/20 rounded-lg p-6 border border-border/50">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Real-time Support</h3>
              <p className="text-muted-foreground text-sm">
                Instant responses to help you succeed in your educational journey
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card/50 border-t border-border/50 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 EduManage AI. All rights reserved. Powered by artificial intelligence.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;