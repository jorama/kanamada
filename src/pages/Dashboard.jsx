import React from 'react';
import { useQuery, useAction, Link, getSearches, getRecommendations, createSearch, generateRecommendation } from 'wasp/client/operations';

const DashboardPage = () => {
  const { data: searches, isLoading: searchesLoading, error: searchesError } = useQuery(getSearches);
  const { data: recommendations, isLoading: recommendationsLoading, error: recommendationsError } = useQuery(getRecommendations);
  const createSearchFn = useAction(createSearch);
  const generateRecommendationFn = useAction(generateRecommendation);

  if (searchesLoading || recommendationsLoading) return 'Loading...';
  if (searchesError || recommendationsError) return 'Error: ' + (searchesError || recommendationsError);

  return (
    <div className='p-4'>
      <div className='mb-4'>
        <h1 className='text-2xl font-bold mb-2'>Search History</h1>
        {searches.map((search) => (
          <div key={search.id} className='bg-gray-100 p-4 mb-4 rounded-lg'>
            <div>{search.location}</div>
            <div>User ID: {search.userId}</div>
          </div>
        ))}
      </div>
      <div>
        <h1 className='text-2xl font-bold mb-2'>Recommendations</h1>
        {recommendations.map((recommendation) => (
          <div key={recommendation.id} className='bg-gray-100 p-4 mb-4 rounded-lg'>
            <div>{recommendation.foodItem}</div>
            <div>User ID: {recommendation.userId}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;