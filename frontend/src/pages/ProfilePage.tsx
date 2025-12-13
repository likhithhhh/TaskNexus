import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Mail, User, Shield, Calendar } from 'lucide-react';

export default function ProfilePage() {
  const { user } = useAuth();

  const initials = user?.username
    ? user.username
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : 'U';

  return (
    <div className="flex justify-center">
      <div className="space-y-6 w-full max-w-2xl">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">Profile</h1>
          <p className="text-muted-foreground">Manage your account settings</p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarFallback className="gradient-primary text-primary-foreground text-2xl font-bold">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div className="text-center">
                <CardTitle className="text-xl">{user?.username}</CardTitle>
                <CardDescription className="flex items-center justify-center gap-2 mt-1">
                  <Badge variant="secondary" className="text-xs">
                    Active
                  </Badge>
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
            <CardDescription>Your personal details and account info</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
              <div className="p-2 rounded-lg bg-background">
                <User className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Username</p>
                <p className="font-medium">{user?.username}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
              <div className="p-2 rounded-lg bg-background">
                <Mail className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email Address</p>
                <p className="font-medium">{user?.email}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
              <div className="p-2 rounded-lg bg-background">
                <Shield className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Account ID</p>
                <p className="font-medium font-mono text-sm">{user?._id || user?.id}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
              <div className="p-2 rounded-lg bg-background">
                <Calendar className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Account Status</p>
                <p className="font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Active & Verified
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
