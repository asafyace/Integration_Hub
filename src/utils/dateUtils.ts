/**
 * Calculates how long ago a date was from now
 * @param dateString ISO date string
 * @returns String representing time ago (e.g., "2 days ago")
 */
export const timeAgo = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  let interval = Math.floor(seconds / 31536000); // years
  if (interval >= 1) {
    return interval === 1 ? `${interval} year ago` : `${interval} years ago`;
  }
  
  interval = Math.floor(seconds / 2592000); // months
  if (interval >= 1) {
    return interval === 1 ? `${interval} month ago` : `${interval} months ago`;
  }
  
  interval = Math.floor(seconds / 86400); // days
  if (interval >= 1) {
    return interval === 1 ? `${interval} day ago` : `${interval} days ago`;
  }
  
  interval = Math.floor(seconds / 3600); // hours
  if (interval >= 1) {
    return interval === 1 ? `${interval} hour ago` : `${interval} hours ago`;
  }
  
  interval = Math.floor(seconds / 60); // minutes
  if (interval >= 1) {
    return interval === 1 ? `${interval} minute ago` : `${interval} minutes ago`;
  }
  
  return 'just now';
};

/**
 * Formats a date to a friendly string
 * @param dateString ISO date string
 * @returns Formatted date string (e.g., "Jan 1, 2023")
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

/**
 * Determines if a date is recent (within the last 7 days)
 * @param dateString ISO date string
 * @returns Boolean indicating if the date is recent
 */
export const isRecent = (dateString: string): boolean => {
  const date = new Date(dateString);
  const now = new Date();
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  return date >= sevenDaysAgo;
};

/**
 * Categorizes a date as recent, moderate, or outdated
 * @param dateString ISO date string
 * @returns "recent" (< 7 days), "moderate" (< 30 days), or "outdated" (>= 30 days)
 */
export const getUpdateStatus = (dateString: string): 'recent' | 'moderate' | 'outdated' => {
  const date = new Date(dateString);
  const now = new Date();
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  
  if (date >= sevenDaysAgo) {
    return 'recent';
  } else if (date >= thirtyDaysAgo) {
    return 'moderate';
  } else {
    return 'outdated';
  }
};