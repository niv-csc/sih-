import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AIChat } from '@/components/AIChat';
import { 
  Settings, 
  Users, 
  BookOpen, 
  BarChart3, 
  AlertTriangle,
  Bot,
  Home,
  User,
  TrendingUp,
  Calendar,
  FileText,
  Shield,
  DollarSign,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  const [showAI, setShowAI] = useState(false);

  const systemStats = [
    { label: 'Total Students', value: '1,247', change: '+12', trend: 'up' },
    { label: 'Active Teachers', value: '89', change: '+3', trend: 'up' },
    { label: 'Total Classes', value: '156', change: '0', trend: 'neutral' },
    { label: 'System Uptime', value: '99.8%', change: '+0.1%', trend: 'up' },
  ];

  const recentAlerts = [
    { id: 1, type: 'warning', message: 'Server maintenance scheduled for tonight', priority: 'medium', time: '2 hours ago' },
    { id: 2, type: 'info', message: 'New parent accounts pending approval', priority: 'low', time: '4 hours ago' },
    { id: 3, type: 'error', message: 'Grade submission system offline briefly', priority: 'high', time: '1 day ago' },
  ];

  const pendingTasks = [
    { id: 1, task: 'Review and approve new teacher applications', department: 'HR', priority: 'high', dueDate: '2025-01-28' },
    { id: 2, task: 'Budget review for Q2 2025', department: 'Finance', priority: 'high', dueDate: '2025-01-30' },
    { id: 3, task: 'Update security policies', department: 'IT', priority: 'medium', dueDate: '2025-02-05' },
    { id: 4, task: 'Plan parent-teacher conference schedule', department: 'Academic', priority: 'medium', dueDate: '2025-02-10' },
  ];

  const departmentOverview = [
    { name: 'Academic Affairs', staff: 45, budget: '$450K', status: 'Good' },
    { name: 'Student Services', staff: 12, budget: '$120K', status: 'Excellent' },
    { name: 'IT & Technology', staff: 8, budget: '$200K', status: 'Needs Attention' },
    { name: 'Administration', staff: 15, budget: '$180K', status: 'Good' },
  ];

  const quickActions = [
    { icon: Users, label: 'Manage Users', description: 'Add/remove students, teachers, and staff' },
    { icon: BookOpen, label: 'Course Management', description: 'Oversee curriculum and class schedules' },
    { icon: BarChart3, label: 'Analytics', description: 'View school performance metrics' },
    { icon: Shield, label: 'Security Settings', description: 'Manage system security and permissions' },
    { icon: DollarSign, label: 'Budget Overview', description: 'Monitor financial operations' },
    { icon: FileText, label: 'Reports', description: 'Generate administrative reports' },
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
              <Settings className="h-6 w-6 text-orange-500" />
              <h1 className="text-xl font-bold text-foreground">Administrator Panel</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              onClick={() => setShowAI(true)}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-glow"
            >
              <Bot className="h-4 w-4 mr-2" />
              AI Admin Assistant
            </Button>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              <span>Dr. Smith</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Good morning, Dr. Smith!</h2>
          <p className="text-muted-foreground">Your administrative dashboard with system overview and management tools.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Column - System Stats & Alerts */}
          <div className="lg:col-span-3 space-y-6">
            {/* System Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {systemStats.map((stat, index) => (
                <Card key={index} className="bg-gradient-to-br from-card to-muted/20">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                      <TrendingUp className={`h-4 w-4 ${
                        stat.trend === 'up' ? 'text-green-500' : 
                        stat.trend === 'down' ? 'text-red-500' : 'text-muted-foreground'
                      }`} />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className={`text-xs ${
                      stat.trend === 'up' ? 'text-green-500' : 
                      stat.trend === 'down' ? 'text-red-500' : 'text-muted-foreground'
                    }`}>
                      {stat.change}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Department Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Department Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {departmentOverview.map((dept, index) => (
                    <div key={index} className="p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-foreground">{dept.name}</h3>
                        <Badge variant={
                          dept.status === 'Excellent' ? 'default' :
                          dept.status === 'Good' ? 'secondary' : 'destructive'
                        }>
                          {dept.status}
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Staff:</span>
                          <span className="font-medium">{dept.staff}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Budget:</span>
                          <span className="font-medium">{dept.budget}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {quickActions.map((action, index) => {
                    const IconComponent = action.icon;
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        className="h-auto p-4 flex flex-col items-start gap-2 hover:bg-muted/50"
                      >
                        <div className="flex items-center gap-2 w-full">
                          <IconComponent className="h-5 w-5 text-primary" />
                          <span className="font-medium">{action.label}</span>
                        </div>
                        <p className="text-xs text-muted-foreground text-left">
                          {action.description}
                        </p>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Pending Administrative Tasks */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Pending Administrative Tasks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {pendingTasks.map((task) => (
                    <div key={task.id} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{task.task}</h4>
                        <p className="text-sm text-muted-foreground">{task.department}</p>
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

          {/* Right Column - Alerts & Assistant */}
          <div className="space-y-6">
            {/* System Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  System Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentAlerts.map((alert) => (
                    <div key={alert.id} className={`p-3 rounded-lg border ${
                      alert.type === 'error' ? 'bg-red-500/10 border-red-500/20' :
                      alert.type === 'warning' ? 'bg-orange-500/10 border-orange-500/20' :
                      'bg-blue-500/10 border-blue-500/20'
                    }`}>
                      <div className="flex items-start gap-2">
                        <AlertTriangle className={`h-4 w-4 mt-0.5 ${
                          alert.type === 'error' ? 'text-red-500' :
                          alert.type === 'warning' ? 'text-orange-500' :
                          'text-blue-500'
                        }`} />
                        <div className="flex-1">
                          <p className="text-sm text-foreground">{alert.message}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {alert.priority}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{alert.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  System Health
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-3 bg-green-500/10 rounded-lg">
                    <div className="text-lg font-bold text-green-500">Operational</div>
                    <div className="text-sm text-muted-foreground">All systems running</div>
                  </div>
                  <div className="text-center p-3 bg-blue-500/10 rounded-lg">
                    <div className="text-lg font-bold text-blue-500">156</div>
                    <div className="text-sm text-muted-foreground">Active Sessions</div>
                  </div>
                  <div className="text-center p-3 bg-purple-500/10 rounded-lg">
                    <div className="text-lg font-bold text-purple-500">2.3GB</div>
                    <div className="text-sm text-muted-foreground">Data Usage Today</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Assistant CTA */}
            <Card className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border-orange-500/20">
              <CardContent className="p-6 text-center">
                <Bot className="h-12 w-12 text-orange-500 mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Admin Assistant</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get help with school management, policy decisions, and administrative strategies.
                </p>
                <Button
                  onClick={() => setShowAI(true)}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600"
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
          role="admin"
          isOpen={true}
          onClose={() => setShowAI(false)}
        />
      )}
    </div>
  );
};

export default AdminPanel;