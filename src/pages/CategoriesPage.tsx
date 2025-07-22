import React, { useState, useEffect } from 'react';
import MainLayout from '../components/Layout/MainLayout';
import PageHeader from '../components/Layout/PageHeader';
import { IntegrationCategory, CategoryCount, Integration } from '../types';
import { getCategoryCount, getIntegrationsByCategory } from '../data/integrations';
import { Layers, ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { getCategoryLogo } from '../utils/categoryLogoMap';
import { useNavigate } from 'react-router-dom';



interface CategoryCardProps {
  category: IntegrationCategory;
  count: number;
  onClick: () => void;
}

const categoryColors: Record<IntegrationCategory, { bg: string, border: string, text: string, darkBg: string, darkBorder: string, darkText: string }> = {
  [IntegrationCategory.APPLICATION_WORKFLOWS]: {
    bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700',
    darkBg: 'dark:bg-orange-900/20', darkBorder: 'dark:border-orange-800', darkText: 'dark:text-orange-400'
  },
  [IntegrationCategory.BUSINESS_INTELLIGENCE_AND_ANALYTICS]: {
    bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700',
    darkBg: 'dark:bg-yellow-900/20', darkBorder: 'dark:border-yellow-800', darkText: 'dark:text-yellow-400'
  },
  [IntegrationCategory.BACKUP_AND_RECOVERY]: {
    bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700',
    darkBg: 'dark:bg-blue-900/20', darkBorder: 'dark:border-blue-800', darkText: 'dark:text-blue-400'
  },
  [IntegrationCategory.CI_CD]: {
    bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700',
    darkBg: 'dark:bg-green-900/20', darkBorder: 'dark:border-green-800', darkText: 'dark:text-green-400'
  },
  [IntegrationCategory.CLOUD_COMPUTING]: {
    bg: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-700',
    darkBg: 'dark:bg-cyan-900/20', darkBorder: 'dark:border-cyan-800', darkText: 'dark:text-cyan-400'
  },
  [IntegrationCategory.CONTAINER_ORCHESTRATION]: {
    bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700',
    darkBg: 'dark:bg-purple-900/20', darkBorder: 'dark:border-purple-800', darkText: 'dark:text-purple-400'
  },
  [IntegrationCategory.DATA_PROCESSING_AND_ANALYTICS]: {
    bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-700',
    darkBg: 'dark:bg-pink-900/20', darkBorder: 'dark:border-pink-800', darkText: 'dark:text-pink-400'
  },
  [IntegrationCategory.DATA_INTEGRATION]: {
    bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700',
    darkBg: 'dark:bg-indigo-900/20', darkBorder: 'dark:border-indigo-800', darkText: 'dark:text-indigo-400'
  },
  [IntegrationCategory.DATABASE_MANAGEMENT]: {
    bg: 'bg-gray-50', border: 'border-gray-200', text: 'text-gray-700',
    darkBg: 'dark:bg-gray-700/30', darkBorder: 'dark:border-gray-600', darkText: 'dark:text-gray-300'
  },
  [IntegrationCategory.ENTERPRISE_RESOURCE_PLANNING]: {
    bg: 'bg-lime-50', border: 'border-lime-200', text: 'text-lime-700',
    darkBg: 'dark:bg-lime-900/20', darkBorder: 'dark:border-lime-800', darkText: 'dark:text-lime-400'
  },
  [IntegrationCategory.FILE_TRANSFER]: {
    bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-700',
    darkBg: 'dark:bg-teal-900/20', darkBorder: 'dark:border-teal-800', darkText: 'dark:text-teal-400'
  },
  [IntegrationCategory.INFRASTRUCTURE_AS_CODE]: {
    bg: 'bg-fuchsia-50', border: 'border-fuchsia-200', text: 'text-fuchsia-700',
    darkBg: 'dark:bg-fuchsia-900/20', darkBorder: 'dark:border-fuchsia-800', darkText: 'dark:text-fuchsia-400'
  },
  [IntegrationCategory.MACHINE_LEARNING]: {
    bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700',
    darkBg: 'dark:bg-emerald-900/20', darkBorder: 'dark:border-emerald-800', darkText: 'dark:text-emerald-400'
  },
  [IntegrationCategory.MAINFRAME_MODERNIZATION]: {
    bg: 'bg-slate-50', border: 'border-slate-200', text: 'text-slate-700',
    darkBg: 'dark:bg-slate-900/20', darkBorder: 'dark:border-slate-800', darkText: 'dark:text-slate-400'
  },
  [IntegrationCategory.MESSAGING_AND_COMMUNICATION]: {
    bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-700',
    darkBg: 'dark:bg-rose-900/20', darkBorder: 'dark:border-rose-800', darkText: 'dark:text-rose-400'
  },
  [IntegrationCategory.MESSAGING_AND_QUEUING]: {
    bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-700',
    darkBg: 'dark:bg-violet-900/20', darkBorder: 'dark:border-violet-800', darkText: 'dark:text-violet-400'
  },
  [IntegrationCategory.ROBOTIC_PROCESS_AUTOMATION]: {
    bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700',
    darkBg: 'dark:bg-yellow-900/20', darkBorder: 'dark:border-yellow-800', darkText: 'dark:text-yellow-400'
  },
  [IntegrationCategory.WEB_SERVICES_JAVA_AND_MESSAGING]: {
    bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700',
    darkBg: 'dark:bg-orange-900/20', darkBorder: 'dark:border-orange-800', darkText: 'dark:text-orange-400'
  }
};


const CategoryCard: React.FC<CategoryCardProps> = ({ category, count, onClick }) => {
  const logoKey = getCategoryLogo(category);
  const IconComponent = ((Icons as unknown) as Record<string, React.ElementType>)[logoKey] || Icons.Box;
  const colors = categoryColors[category];
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
  const [sortType, setSortType] = useState<'popularity' | 'abc'>('popularity');
  const navigate = useNavigate();

  useEffect(() => {
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

  // Sort categories based on sortType
  const sortedCategories = [...categories].sort((a, b) => {
    if (sortType === 'popularity') {
      return b.count - a.count;
    } else {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <MainLayout>
      <PageHeader 
        title="Integration Categories" 
        subtitle="Browse integrations by category to find what you need"
      />
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-2 ml-auto">
          <span className="mr-2 font-medium text-gray-700 dark:text-gray-200">Sort by:</span>
          <button
            type="button"
            className={`flex items-center px-3 py-1 rounded-l-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium transition-colors duration-150 ${sortType === 'abc' ? 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 border-blue-600 dark:border-blue-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
            onClick={() => setSortType('abc')}
            aria-label="Sort A-Z"
          >
            <svg className={`w-4 h-4 mr-1 ${sortType === 'abc' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-300'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="M6 8l4 4 4-4" /></svg>
            <span className="hidden sm:inline">A-Z</span>
            {sortType === 'abc' && (
              <svg className="w-3 h-3 ml-1 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="M6 8l4 4 4-4" /></svg>
            )}
          </button>
          <button
            type="button"
            className={`flex items-center px-3 py-1 rounded-r-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium transition-colors duration-150 ${sortType === 'popularity' ? 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 border-blue-600 dark:border-blue-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
            onClick={() => setSortType('popularity')}
            aria-label="Sort by Popularity"
          >
            <svg className={`w-4 h-4 mr-1 ${sortType === 'popularity' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-300'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 17.75l-6.172 3.245 1.179-6.873L2 9.505l6.908-1.004L12 2.25l3.092 6.251L22 9.505l-5.007 4.617 1.179 6.873z"/></svg>
            <span className="hidden sm:inline">Popularity</span>
            {sortType === 'popularity' && (
              <svg className="w-3 h-3 ml-1 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="M6 8l4 4 4-4" /></svg>
            )}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedCategories.map(({ category, count }) => (
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