import React from 'react';
import { getUpdateStatus } from '../../utils/dateUtils';
import { Clock, CheckCircle, AlertTriangle } from 'lucide-react';

interface UpdateStatusBadgeProps {
  lastUpdated: string;
  size?: 'sm' | 'md' | 'lg';
}

const UpdateStatusBadge: React.FC<UpdateStatusBadgeProps> = ({ lastUpdated, size = 'md' }) => {
  const status = getUpdateStatus(lastUpdated);
  
  const config = {
    recent: {
      icon: CheckCircle,
      text: 'Updated Recently',
      color: 'bg-green-100 text-green-800 border-green-200',
      iconColor: 'text-green-600'
    },
    moderate: {
      icon: Clock,
      text: 'Moderately recent',
      color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      iconColor: 'text-yellow-600'
    },
    outdated: {
      icon: AlertTriangle,
      text: 'Updated a while ago',
      color: 'bg-red-100 text-red-800 border-red-200',
      iconColor: 'text-red-600'
    }
  };
  
  const { icon: Icon, text, color, iconColor } = config[status];
  
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-2'
  };
  
  const iconSizes = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };
  
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border ${color} ${sizeClasses[size]} font-medium`}>
      <Icon className={`${iconSizes[size]} ${iconColor}`} />
      {text}
    </span>
  );
};

export default UpdateStatusBadge;