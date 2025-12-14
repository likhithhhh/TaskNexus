import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, CheckSquare, User, Sparkles, LogOut, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

const navItems = [
  { title: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { title: 'My Tasks', path: '/tasks', icon: CheckSquare },
  { title: 'Profile', path: '/profile', icon: User },
];

interface SidebarContentProps {
  onLogout: () => void;
  onNavClick?: () => void;
}

function SidebarContent({ onLogout, onNavClick }: SidebarContentProps) {
  const location = useLocation();

  return (
    <>
      {/* Logo */}
      <div className="h-16 flex items-center px-4 border-b border-border/30">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center glow-primary">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
            TaskNexus
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={onNavClick}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200',
                    'hover:bg-indigo-500/10',
                    isActive
                      ? 'bg-gradient-to-r from-indigo-500/20 to-violet-500/10 text-indigo-600 dark:text-indigo-400 border-l-2 border-indigo-500'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  <item.icon className={cn('w-5 h-5 flex-shrink-0', isActive && 'text-indigo-600 dark:text-indigo-400')} />
                  <span className="font-medium">{item.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-3 border-t border-border/30">
        <Button
          variant="ghost"
          size="sm"
          onClick={onLogout}
          className="w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/10"
        >
          <LogOut className="w-4 h-4 mr-2" />
          <span>Logout</span>
        </Button>
      </div>
    </>
  );
}

// Desktop Sidebar
export function AppSidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <aside className="hidden lg:flex w-64 flex-col bg-background border-r border-border/30">
      <SidebarContent onLogout={handleLogout} />
    </aside>
  );
}

export function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-64 bg-background border-r border-border/30">
        <SidebarContent onLogout={handleLogout} onNavClick={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  );
}
