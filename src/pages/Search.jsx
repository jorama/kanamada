import React, { useState } from 'react';
import { useAction, createSearch } from 'wasp/client/operations';
import { Link } from 'react-router-dom';

const SearchPage = () => {
  const createSearchFn = useAction(createSearch);
  const [location, setLocation] = useState('');

  const handleCreateSearch = () => {
    createSearchFn({ location });
    setLocation('');
  };

  return (
    <div className='p-4'>
      <input
        type='text'
        placeholder='Location'
        className='px-1 py-2 border rounded text-lg'
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        onClick={handleCreateSearch}
        className='bg-blue-500 hover:bg-blue-700 px-2 py-2 text-white font-bold rounded mt-2'
      >
        Search
      </button>
      <Link to='/dashboard' className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2'>Dashboard</Link>
    </div>
  );
}

export default SearchPage;