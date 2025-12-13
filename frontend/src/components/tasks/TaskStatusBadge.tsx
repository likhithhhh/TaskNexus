import { cn } from '@/lib/utils';

interface TaskStatusBadgeProps {
  status: 'Pending' | 'In Progress' | 'Completed';
}

export function TaskStatusBadge({ status }: TaskStatusBadgeProps) {
  const styles = {
    Pending: 'bg-warning/10 text-warning border-warning/20',
    'In Progress': 'bg-info/10 text-info border-info/20',
    Completed: 'bg-success/10 text-success border-success/20',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
        styles[status]
      )}
    >
      {status}
    </span>
  );
}
