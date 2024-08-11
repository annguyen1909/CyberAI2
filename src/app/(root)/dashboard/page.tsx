import React from 'react'
import UserInfo from '@/components/ui/UserInfo';
import SavedReports from '@/components/ui/SavedReports';
import RecentSubmissions from '@/components/ui/RecentSubmissions';

const Dashboard = () => {
  return (
    <div>
      <h1 className='text-20 text-white-1 font-bold'>Dashboard</h1>
      <div className="min-h-screen flex">
      <div className="w-2/4 p-4 bg-indigo-200">
        <UserInfo />
        <SavedReports />
      </div>
      <div className="w-2/4 p-4">
        <RecentSubmissions />
      </div>
    </div>
    </div>
  )
}

export default Dashboard