import { useQuery } from '@tanstack/react-query';
import { CheckCircle, Clock, Loader, ListTodo, TrendingUp } from 'lucide-react';
import { api, Task } from '@/lib/api';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export default function DashboardPage() {
  const { data: tasks = [], isLoading } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => api.getTasks(),
  });

  const stats = {
    total: tasks.length,
    pending: tasks.filter((t) => t.status === 'Pending').length,
    inProgress: tasks.filter((t) => t.status === 'In Progress').length,
    completed: tasks.filter((t) => t.status === 'Completed').length,
  };

  const chartData = [
    { name: 'Pending', value: stats.pending, color: 'hsl(var(--chart-pending))' },
    { name: 'In Progress', value: stats.inProgress, color: 'hsl(var(--chart-progress))' },
    { name: 'Completed', value: stats.completed, color: 'hsl(var(--chart-completed))' },
  ].filter((d) => d.value > 0);

  const completionRate = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

  const statCards = [
    { title: 'Total Tasks', value: stats.total, icon: ListTodo, gradient: 'from-indigo-600 to-violet-600' },
    { title: 'Pending', value: stats.pending, icon: Clock, gradient: 'from-amber-500 to-orange-500' },
    { title: 'In Progress', value: stats.inProgress, icon: Loader, gradient: 'from-blue-500 to-cyan-500' },
    { title: 'Completed', value: stats.completed, icon: CheckCircle, gradient: 'from-emerald-500 to-green-500' },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader className="h-8 w-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your task management</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat) => (
          <Card key={stat.title} className="hover-lift border-border/50 overflow-hidden card-glow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <Card className="border-border/50 card-glow">
          <CardHeader>
            <CardTitle>Task Distribution</CardTitle>
            <CardDescription>Breakdown by status</CardDescription>
          </CardHeader>
          <CardContent>
            {chartData.length > 0 ? (
              <ResponsiveContainer width="100%" height={320}>
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="40%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={0}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      color: '#1e293b',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                    itemStyle={{ color: '#1e293b' }}
                    labelStyle={{ color: '#1e293b', fontWeight: 600 }}
                  />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36}
                    wrapperStyle={{ paddingTop: '20px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
                <ListTodo className="h-12 w-12 mb-2 opacity-50" />
                <p>No tasks yet. Create your first task!</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Completion Rate */}
        <Card className="border-border/50 card-glow">
          <CardHeader>
            <CardTitle>Completion Rate</CardTitle>
            <CardDescription>Your productivity score</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center h-[280px]">
            <div className="relative">
              <svg className="w-40 h-40 transform -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="hsl(var(--muted))"
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="url(#gradient)"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${completionRate * 4.4} 440`}
                  className="transition-all duration-1000 ease-out"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4f46e5" />
                    <stop offset="100%" stopColor="#7c3aed" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-foreground">{completionRate}%</span>
                <span className="text-sm text-muted-foreground">Complete</span>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4 text-muted-foreground">
              <TrendingUp className="h-4 w-4 text-emerald-500" />
              <span className="text-sm">
                {stats.completed} of {stats.total} tasks completed
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
