import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Shield, BarChart3, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ThemeToggle } from '@/components/ThemeToggle';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Manage your tasks with an interface built for speed and efficiency.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Your data is encrypted and protected with enterprise-grade security.',
  },
  {
    icon: BarChart3,
    title: 'Insightful Analytics',
    description: 'Track your productivity with beautiful charts and detailed reports.',
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-slate-100 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-slate-200/80 dark:border-border/50">
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg shadow-indigo-500/25">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">TaskNexus</span>
            </Link>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button asChild variant="ghost" className="hidden sm:flex text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-foreground dark:hover:bg-muted">
                <Link to="/login">Sign In</Link>
              </Button>
              <Button asChild className="gradient-primary hover:opacity-90 transition-all btn-tactile text-white shadow-lg shadow-indigo-500/25">
                <Link to="/login">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-200/30 dark:bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-violet-200/20 dark:bg-violet-600/15 rounded-full blur-3xl" />
        
        <div className="hidden dark:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200/50 dark:border-indigo-500/20 mb-8 animate-fade-in-up"
              style={{ animationDelay: '0s' }}
            >
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium text-indigo-700 dark:text-indigo-400">Enterprise Task Management</span>
            </div>
            
            <h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 text-slate-900 dark:text-foreground animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              Manage Tasks with{' '}
              <span className="gradient-text">Precision</span>
            </h1>
            
            <p 
              className="text-lg sm:text-xl text-slate-600 dark:text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" 
              style={{ animationDelay: '0.2s' }}
            >
              A powerful, enterprise-grade CRM solution designed to help teams track, organize, and complete tasks with unprecedented efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button asChild size="lg" className="gradient-primary text-white transition-all shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 text-lg px-8 btn-tactile">
                <Link to="/register">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:border-border dark:text-foreground dark:hover:bg-muted dark:hover:text-foreground btn-tactile">
                <Link to="/login">
                  Sign In
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative bg-gradient-to-b from-transparent via-slate-50/50 to-white dark:from-transparent dark:via-slate-900/50 dark:to-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 dark:text-foreground">
              Built for Enterprise Teams
            </h2>
            <p className="text-slate-600 dark:text-muted-foreground text-lg max-w-2xl mx-auto">
              Powerful features to help you manage your work and boost productivity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="group border-slate-200/80 dark:border-border/50 bg-white/80 dark:bg-card/50 backdrop-blur-sm shadow-lg shadow-slate-200/50 dark:shadow-none hover:shadow-xl hover:shadow-slate-300/50 dark:hover:shadow-none transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/25 group-hover:shadow-xl group-hover:shadow-indigo-500/30 transition-all">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl text-slate-900 dark:text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-600 dark:text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-100/50 dark:bg-purple-900/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <Card className="max-w-3xl mx-auto border-slate-200/80 dark:border-indigo-500/20 bg-white/90 dark:bg-card/50 backdrop-blur-sm shadow-xl shadow-slate-200/50 dark:shadow-none">
            <CardContent className="p-10 text-center">
              <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-foreground">
                Ready to Get Started?
              </h2>
              <p className="text-slate-600 dark:text-muted-foreground text-lg mb-8">
                Join thousands of teams who are already managing their tasks efficiently with{' '}
                <span className="gradient-text font-semibold">TaskNexus</span>.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="gradient-primary hover:opacity-90 shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 text-white btn-tactile">
                  <Link to="/register">
                    Create Free Account
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="flex items-center justify-center gap-6 mt-8 text-sm text-slate-500 dark:text-muted-foreground">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  Free forever
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  No credit card
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200/80 dark:border-border/50 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center shadow-md shadow-indigo-500/25">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold gradient-text">TaskNexus</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-muted-foreground">
              © {new Date().getFullYear()} TaskNexus. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
