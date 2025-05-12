import React, { useState, useEffect } from 'react';
import MainLayout from '../components/Layout/MainLayout';
import PageHeader from '../components/Layout/PageHeader';
import { IntegrationCategory, CategoryCount, Integration } from '../types';
import { getCategoryCount, getIntegrationsByCategory } from '../data/integrations';
import { Layers, ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categoryIcons: Record<string, keyof typeof Icons> = {
  [IntegrationCategory.AWS]: 'Cloud',
  [IntegrationCategory.AZURE]: 'Cloud',
  [IntegrationCategory.GCP]: 'Cloud',
  [IntegrationCategory.DATA_INTEGRATION]: 'Database',
  [IntegrationCategory.WORKFLOW_AUTOMATION]: 'GitBranch',
  [IntegrationCategory.ANALYTICS]: 'BarChart',
  [IntegrationCategory.COMMUNICATION]: 'MessageSquare',
  [IntegrationCategory.INFRASTRUCTURE]: 'Server',
  [IntegrationCategory.OCI]: 'Cloud',
  [IntegrationCategory.MISC]: 'Box',
};

const categoryColors: Record<string, { bg: string, border: string, text: string, darkBg: string, darkBorder: string, darkText: string }> = {
  [IntegrationCategory.AWS]: { 
    bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700',
    darkBg: 'dark:bg-orange-900/20', darkBorder: 'dark:border-orange-800', darkText: 'dark:text-orange-400'
  },
  [IntegrationCategory.AZURE]: { 
    bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700',
    darkBg: 'dark:bg-blue-900/20', darkBorder: 'dark:border-blue-800', darkText: 'dark:text-blue-400'
  },
  [IntegrationCategory.GCP]: { 
    bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700',
    darkBg: 'dark:bg-red-900/20', darkBorder: 'dark:border-red-800', darkText: 'dark:text-red-400'
  },
  [IntegrationCategory.DATA_INTEGRATION]: { 
    bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700',
    darkBg: 'dark:bg-purple-900/20', darkBorder: 'dark:border-purple-800', darkText: 'dark:text-purple-400'
  },
  [IntegrationCategory.WORKFLOW_AUTOMATION]: { 
    bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700',
    darkBg: 'dark:bg-green-900/20', darkBorder: 'dark:border-green-800', darkText: 'dark:text-green-400'
  },
  [IntegrationCategory.ANALYTICS]: { 
    bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700',
    darkBg: 'dark:bg-yellow-900/20', darkBorder: 'dark:border-yellow-800', darkText: 'dark:text-yellow-400'
  },
  [IntegrationCategory.COMMUNICATION]: { 
    bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700',
    darkBg: 'dark:bg-indigo-900/20', darkBorder: 'dark:border-indigo-800', darkText: 'dark:text-indigo-400'
  },
  [IntegrationCategory.INFRASTRUCTURE]: { 
    bg: 'bg-gray-50', border: 'border-gray-200', text: 'text-gray-700',
    darkBg: 'dark:bg-gray-700/30', darkBorder: 'dark:border-gray-600', darkText: 'dark:text-gray-300'
  },
  [IntegrationCategory.OCI]: { 
    bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700',
    darkBg: 'dark:bg-red-900/20', darkBorder: 'dark:border-red-800', darkText: 'dark:text-red-400'
  },
  [IntegrationCategory.MISC]: { 
    bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-700',
    darkBg: 'dark:bg-teal-900/20', darkBorder: 'dark:border-teal-800', darkText: 'dark:text-teal-400'
  },
};

interface CategoryCardProps {
  category: string;
  count: number;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, count, onClick }) => {
  const IconComponent = Icons[categoryIcons[category] || 'Box'];
  const colors = categoryColors[category] || categoryColors[IntegrationCategory.MISC];
  
  return (
    <button 
      className={`block w-full p-6 rounded-lg border ${colors.border} ${colors.darkBorder} ${colors.bg} ${colors.darkBg} transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500`}
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-lg bg-white dark:bg-gray-800 ${colors.text} ${colors.darkText}`}>
          <IconComponent className="h-6 w-6" />
        </div>
        <span className="bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
          {count} integration{count !== 1 ? 's' : ''}
        </span>
      </div>
      <h3 className={`text-lg font-semibold ${colors.text} ${colors.darkText}`}>{category}</h3>
      <div className="mt-4 flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
        View integrations
        <ArrowRight className="h-4 w-4 ml-1" />
      </div>
    </button>
  );
};

const CategoriesPage: React.FC = () => {
  const [categories, setCategories] = useState<CategoryCount[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<IntegrationCategory | null>(null);
  const [categoryIntegrations, setCategoryIntegrations] = useState<Integration[]>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Get all categories with their counts
    setCategories(getCategoryCount());
  }, []);
  
  useEffect(() => {
    if (selectedCategory) {
      setCategoryIntegrations(getIntegrationsByCategory(selectedCategory));
    }
  }, [selectedCategory]);
  
  const handleCategoryClick = (category: IntegrationCategory) => {
    navigate('/', { state: { selectedCategory: category } });
  };
  
  return (
    <MainLayout>
      <PageHeader 
        title="Integration Categories" 
        subtitle="Browse integrations by category to find what you need"
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(({ category, count }) => (
          <CategoryCard 
            key={category} 
            category={category} 
            count={count} 
            onClick={() => handleCategoryClick(category)} 
          />
        ))}
      </div>
    </MainLayout>
  );
};

export default CategoriesPage;