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

function loadSearch() {
  return localStorage.getItem(SEARCH_STORAGE_KEY) || '';
}

function saveSearch(query: string) {
  localStorage.setItem(SEARCH_STORAGE_KEY, query);
}

const HomePage: React.FC = () => {
  const location = useLocation();
  const [displayedIntegrations, setDisplayedIntegrations] = useState<Integration[]>(integrations);
  const [searchQuery, setSearchQuery] = useState(() => loadSearch());
  const [selectedCategory, setSelectedCategory] = useState<IntegrationCategory | null>(
    location.state?.selectedCategory || null
  );
  const [categoryStats, setCategoryStats] = useState<CategoryCount[]>([]);
  
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
    
    setDisplayedIntegrations(filtered);
  }, [searchQuery, selectedCategory]);

  useEffect(() => {
    // Centralized AWS endpoints map for all supported AWS integrations
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
    const updates: Record<string, { lastUpdated: string; updateInfo: string }> = {};
    const awsIds = Object.keys(awsEndpoints);
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
      
      <div className="mb-8">
        <SearchBar onSearch={handleSearch} placeholder="Search integrations by name, category, or developer..." />
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