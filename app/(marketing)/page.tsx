import { Medal } from 'lucide-react';
import React from 'react';

const MarketingPage = () => {
  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='flex items-center justify-center flex-col'></div>
      <div className='mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase'>
        <Medal className='h-6 w-6 mr-r' />
        No 1 Task management
      </div>
    </div>
  );
};

export default MarketingPage;
