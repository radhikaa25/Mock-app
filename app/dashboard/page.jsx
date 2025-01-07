import { UserButton } from '@clerk/nextjs';
import React from 'react';
import AddNewInterview from './_components/AddNewInterview';
import Interviewlist from './_components/Interviewlist';

function Dashboard() {
  return (
    <div className="bg-black rounded-lg p-4 shadow-xl"> {/* Add padding to create space around content */}
      <div className="bg-white shadow-xl rounded-lg p-10"> {/* Add background color, shadow, and padding */}
        <h2 className='font-bold text-6xl text-white text-center'>Dashboard</h2>
        <h2 className='ont-medium text-white text-2xl pb-4'>Create and Start AI Mockup Interview</h2>

        <div className='grid grid-cols-1 md:grid-cols-3 my-2'>
          <AddNewInterview />
        </div>
        {/* Previous Interview list */}
        <Interviewlist />
      </div>
    </div>
  );
}

export default Dashboard;
