import React from 'react';
import { formatDate } from '../../utils/dateUtils';
import { Calendar } from 'lucide-react';

interface UpdateStatusBadgeProps {
  lastUpdated: string;
  size?: 'sm' | 'md' | 'lg';
}

const UpdateStatusBadge: React.FC<UpdateStatusBadgeProps> = ({ lastUpdated, size = 'md' }) => {
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
    <span className={`inline-flex items-center gap-1.5 rounded-full border bg-blue-100 text-blue-800 border-blue-200 ${sizeClasses[size]} font-medium`}>
      <Calendar className={`${iconSizes[size]} text-blue-600`} />
      Released on {formatDate(lastUpdated)}
    </span>
  );
};

export default UpdateStatusBadge;