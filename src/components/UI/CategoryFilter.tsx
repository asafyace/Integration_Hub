import React from 'react';
import { IntegrationCategory, CategoryCount } from '../../types';
import { Check } from 'lucide-react';

interface CategoryFilterProps {
  categories: CategoryCount[];
  selectedCategory: IntegrationCategory | null;
  onSelectCategory: (category: IntegrationCategory | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  selectedCategory, 
  onSelectCategory 
}) => {
  // Sort categories by count (descending)
  const sortedCategories = [...categories].sort((a, b) => b.count - a.count);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-4">
      <h3 className="font-medium text-gray-900 dark:text-white mb-3">Categories</h3>
      
      <ul className="space-y-2">
        <li>
          <button
            onClick={() => onSelectCategory(null)}
            className={`w-full text-left px-3 py-2 rounded-md text-sm flex justify-between items-center transition-colors duration-200
              ${!selectedCategory 
                ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 font-medium' 
                : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/50'
              }`}
          >
            <span className="flex items-center">
              All Integrations
            </span>
            <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full px-2 py-0.5">
              {categories.reduce((sum, cat) => sum + cat.count, 0)}
            </span>
          </button>
        </li>
        
        {sortedCategories.map(({ category, count }) => (
          <li key={category}>
            <button
              onClick={() => onSelectCategory(category)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm flex justify-between items-center transition-colors duration-200
                ${selectedCategory === category 
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 font-medium' 
                  : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/50'
                }`}
            >
              <span className="flex items-center">
                {selectedCategory === category && (
                  <Check className="h-4 w-4 mr-1.5 text-blue-600 dark:text-blue-400" />
                )}
                {category}
              </span>
              <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full px-2 py-0.5">
                {count}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;