import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MainLayout from '../components/Layout/MainLayout';
import PageHeader from '../components/Layout/PageHeader';
import SearchBar from '../components/UI/SearchBar';
import IntegrationCard from '../components/UI/IntegrationCard';
import CategoryFilter from '../components/UI/CategoryFilter';
import EmptyState from '../components/UI/EmptyState';
import { Integration, IntegrationCategory, CategoryCount } from '../types';
import { searchIntegrations, getAllCategories, getCategoryCount, getIntegrationsByCategory, integrations } from '../data/integrations';
import { Grid3X3, FilterX } from 'lucide-react';

const SEARCH_STORAGE_KEY = 'integration_search_v1';
const AWS_UPDATES_CACHE_KEY = 'aws_updates_cache_v1';
const AWS_UPDATES_CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

function loadSearch() {
  return localStorage.getItem(SEARCH_STORAGE_KEY) || '';
}

function saveSearch(query: string) {
  localStorage.setItem(SEARCH_STORAGE_KEY, query);
}

function loadAwsUpdatesCache() {
  try {
    const raw = localStorage.getItem(AWS_UPDATES_CACHE_KEY);
    if (!raw) return null;
    const { timestamp, updates } = JSON.parse(raw);
    if (Date.now() - timestamp < AWS_UPDATES_CACHE_TTL) {
      return updates;
    }
    return null;
  } catch {
    return null;
  }
}

function saveAwsUpdatesCache(updates: Record<string, { lastUpdated: string; updateInfo: string }>) {
  localStorage.setItem(
    AWS_UPDATES_CACHE_KEY,
    JSON.stringify({ timestamp: Date.now(), updates })
  );
}

const HomePage: React.FC = () => {
  const location = useLocation();
  const [displayedIntegrations, setDisplayedIntegrations] = useState<Integration[]>(integrations);
  const [searchQuery, setSearchQuery] = useState(() => loadSearch());
  const [selectedCategory, setSelectedCategory] = useState<IntegrationCategory | null>(
    location.state?.selectedCategory || null
  );
  const [categoryStats, setCategoryStats] = useState<CategoryCount[]>([]);
  const [sortType, setSortType] = useState<'abc' | 'release' | 'popularity'>('abc');
  
  useEffect(() => {
    setCategoryStats(getCategoryCount());
  }, []);
  
  useEffect(() => {
    let filtered = integrations;
    // Apply search filter
    if (searchQuery) {
      filtered = searchIntegrations(searchQuery);
    }
    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    // Sort
    let sorted = [...filtered];
    if (sortType === 'abc') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === 'release') {
      sorted.sort((a, b) => (b.lastUpdated || '').localeCompare(a.lastUpdated || ''));
    } else if (sortType === 'popularity') {
      sorted.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
    }
    setDisplayedIntegrations(sorted);
  }, [searchQuery, selectedCategory, sortType]);

  useEffect(() => {
    const awsEndpoints: Record<string, string> = {
      "aws-app-runner": "/api/aws-app-runner/latest-update",
      "aws-backup": "/api/aws-backup/latest-update",
      "aws-athena": "/api/aws-athena/latest-update",
      "aws-step-function": "/api/aws-step-functions/latest-update",
      "aws-ec2": "/api/aws-ec2/latest-update",
      "aws-ecs": "/api/aws-ecs/latest-update",
      "aws-appflow": "/api/aws-appflow/latest-update",
      "aws-sns": "/api/aws-sns/latest-update",
      "aws-sqs": "/api/aws-sqs/latest-update",
      "aws-sagemaker": "/api/aws-sagemaker/latest-update",
      "aws-glue": "/api/aws-glue/latest-update",
      "aws-glue-databrew": "/api/aws-glue-databrew/latest-update",
      "aws-lambda": "/api/aws-lambda/latest-update",
      "aws-emr": "/api/aws-emr/latest-update",
      "aws-redshift": "/api/aws-redshift/latest-update",
      "aws-dynamodb": "/api/aws-dynamodb/latest-update",
      "aws-datasync": "/api/aws-datasync/latest-update",
      "aws-batch": "/api/aws-batch/latest-update",
      "aws-cloudformation": "/api/aws-cloudformation/latest-update",
      "aws-data-pipeline": "/api/aws-data-pipeline/latest-update",
      "aws-m2": "/api/aws-m2/latest-update",
      "aws-mwaa": "/api/aws-mwaa/latest-update",
      "aws-quicksight": "/api/aws-quicksight/latest-update"
    };
    const API_BASE = import.meta.env.VITE_API_BASE_URL || "";
    const awsIds = Object.keys(awsEndpoints);
    const cached = loadAwsUpdatesCache();
    if (cached) {
      setDisplayedIntegrations(prev => prev.map(intg =>
        cached[intg.id]
          ? { ...intg, lastUpdated: cached[intg.id].lastUpdated, updateInfo: cached[intg.id].updateInfo }
          : intg
      ));
      return;
    }
    const updates: Record<string, { lastUpdated: string; updateInfo: string }> = {};
    (async () => {
      for (const id of awsIds) {
        const endpoint = `${API_BASE}${awsEndpoints[id]}`;
        try {
          const res = await fetch(endpoint);
          if (res.ok) {
            const data = await res.json();
            updates[id] = { lastUpdated: data.lastUpdated, updateInfo: data.updateInfo };
          }
        } catch (e) {
          // ignore
        }
      }
      saveAwsUpdatesCache(updates);
      setDisplayedIntegrations(prev => prev.map(intg =>
        updates[intg.id]
          ? { ...intg, lastUpdated: updates[intg.id].lastUpdated, updateInfo: updates[intg.id].updateInfo }
          : intg
      ));
    })();
  }, []);
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    saveSearch(query);
  };
  
  const handleCategorySelect = (category: IntegrationCategory | null) => {
    setSelectedCategory(category);
  };
  
  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    setDisplayedIntegrations(integrations);
    localStorage.removeItem(SEARCH_STORAGE_KEY); // Remove search from storage
  };

  const handleUpdateNotes = (id: string, notes: string) => {
    const updatedIntegrations = displayedIntegrations.map(integration => 
      integration.id === id ? { ...integration, notes } : integration
    );
    setDisplayedIntegrations(updatedIntegrations);
  };
  
  const isFiltered = searchQuery || selectedCategory;
  
  useEffect(() => {
    // Keep search in sync with localStorage (e.g., if changed in another tab)
    const handleStorage = () => {
      setSearchQuery(loadSearch());
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);
  
  return (
    <MainLayout>
      <PageHeader 
        title="Control-M Integration Hub" 
        subtitle="Browse and manage all Control-M integrations with cloud services in one place"
      />
      
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <SearchBar onSearch={handleSearch} placeholder="Search integrations by name, category, or developer..." />
        <div className="flex items-center gap-2">
          <span className="mr-2 font-medium text-gray-700 dark:text-gray-200">Sort by:</span>
          <button
            type="button"
            className={`flex items-center px-3 py-1 rounded-l-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium transition-colors duration-150 ${sortType === 'abc' ? 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 border-blue-600 dark:border-blue-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
            onClick={() => setSortType('abc')}
            aria-label="Sort A-Z"
          >
            <svg className={`w-4 h-4 mr-1 ${sortType === 'abc' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-300'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 17v-6m0 0V7m0 4h-8m8 0H8m0 0v6m0-6V7" /></svg>
            <span className="hidden sm:inline">A-Z</span>
            {sortType === 'abc' && (
              <svg className="w-3 h-3 ml-1 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="M6 8l4 4 4-4" /></svg>
            )}
          </button>
          <button
            type="button"
            className={`flex items-center px-3 py-1 border-t border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium transition-colors duration-150 ${sortType === 'release' ? 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 border-blue-600 dark:border-blue-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
            onClick={() => setSortType('release')}
            aria-label="Sort by Release Date"
          >
            <svg className={`w-4 h-4 mr-1 ${sortType === 'release' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-300'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            <span className="hidden sm:inline">Release Date</span>
            {sortType === 'release' && (
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
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <CategoryFilter 
            categories={categoryStats} 
            selectedCategory={selectedCategory} 
            onSelectCategory={handleCategorySelect} 
          />
        </div>
        
        <div className="lg:col-span-3">
          {isFiltered && (
            <div className="mb-4 flex items-center justify-between bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
              <div className="text-sm text-blue-700 dark:text-blue-400">
                <span className="font-medium">{displayedIntegrations.length}</span> integration{displayedIntegrations.length !== 1 ? 's' : ''} found
                {searchQuery && <span> for "<strong>{searchQuery}</strong>"</span>}
                {selectedCategory && <span> in <strong>{selectedCategory}</strong></span>}
              </div>
              <button
                onClick={handleClearFilters}
                className="text-sm text-blue-700 dark:text-blue-400 flex items-center hover:underline"
              >
                <FilterX className="h-4 w-4 mr-1" />
                Clear filters
              </button>
            </div>
          )}
          
          {displayedIntegrations.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {displayedIntegrations.map(integration => (
                <IntegrationCard 
                  key={integration.id} 
                  integration={integration}
                  onUpdateNotes={handleUpdateNotes}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No integrations found"
              message="Try adjusting your search terms or filters to find what you're looking for."
              icon={<Grid3X3 className="h-12 w-12 text-gray-400" />}
              action={
                <button
                  onClick={handleClearFilters}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Clear all filters
                </button>
              }
            />
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;