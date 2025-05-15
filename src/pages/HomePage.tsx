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

const HomePage: React.FC = () => {
  const location = useLocation();
  const [displayedIntegrations, setDisplayedIntegrations] = useState<Integration[]>(integrations);
  const [searchQuery, setSearchQuery] = useState('');
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
    async function fetchAwsUpdates() {
      const API_BASE = import.meta.env.VITE_API_BASE_URL || "";
      const idsToFetch = [
        "aws-app-runner",
        "aws-backup",
        "aws-athena",
        "aws-step-function",
        "aws-ec2",
        "aws-ecs",
        "aws-appflow",
        "aws-cloudformation",
        "aws-data-pipeline"
      ];
      const updates: Record<string, { lastUpdated: string; updateInfo: string }> = {};
      for (const id of idsToFetch) {
        let endpoint = "";
        if (id === "aws-app-runner") endpoint = `${API_BASE}/api/aws-app-runner/latest-update`;
        if (id === "aws-backup") endpoint = `${API_BASE}/api/aws-backup/latest-update`;
        if (id === "aws-athena") endpoint = `${API_BASE}/api/aws-athena/latest-update`;
        if (id === "aws-step-function") endpoint = `${API_BASE}/api/aws-step-functions/latest-update`;
        if (id === "aws-ec2") endpoint = `${API_BASE}/api/aws-ec2/latest-update`;
        if (id === "aws-ecs") endpoint = `${API_BASE}/api/aws-ecs/latest-update`;
        if (id === "aws-appflow") endpoint = `${API_BASE}/api/aws-appflow/latest-update`;
        if (id === "aws-cloudformation") endpoint = `${API_BASE}/api/aws-cloudformation/latest-update`;
        if (id === "aws-data-pipeline") endpoint = `${API_BASE}/api/aws-data-pipeline/latest-update`;
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
    }
    fetchAwsUpdates();
  }, []);
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
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