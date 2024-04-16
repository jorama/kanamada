import React from 'react';
import { useQuery } from 'wasp/client/operations';
import { Link } from 'react-router-dom';
import { getRecommendations } from 'wasp/client/operations';

const RecommendationPage = () => {
  const { data: recommendations, isLoading, error } = useQuery(getRecommendations);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div className='p-4'>
      {recommendations.map((recommendation) => (
        <div key={recommendation.id} className='bg-white p-4 mb-4 rounded-lg shadow-md'>
          <p className='text-lg font-bold'>{recommendation.foodItem}</p>
        </div>
      ))}
    </div>
  );
}

export default RecommendationPage;