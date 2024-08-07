import React from 'react';
import Cards from './Cards';
import CircularProgress from './CircularProgress';
import ActivityChart from './ActivityChart';
import MenuList from './MenuList';
import RecentOrders from './RecentOrders';
import FeedBack from './FeedBack';

const MainContent = () => (
  <main className='p-4 bg-black'>
    <h2 className='text-2xl text-gray-300 font-bold'>Dashboard </h2>
    <div className="flex justify-between flex-wrap">
      <section className='w-full md:w-[69%] flex-wrap md:py-4 md:flex justify-between gap-4'>
        <Cards name="Total Order" value="75" increase={3} color="bg-blue-700"/>
        <Cards name="Total Delivered" value="70" decrease={3} color="bg-green-400"/>
        <Cards name="Total Cancelled" value="05"increase={3} color="bg-red-500"/>
        <Cards name="Total Revenue" value="$12k" decrease={3} color="bg-pink-400"/>
      </section>
      <section className='w-full md:w-[29%] bg-text-gray-400'>
        <CircularProgress value={70}/>
      </section>
    </div>
    <div className="flex justify-between flex-wrap">
      <section className='md:bg-gray-800 md:rounded-lg w-full md:w-[69%] md:my-4'>
        <ActivityChart/>    
      </section>
      <section className='md:bg-gray-800 md:rounded-lg w-full md:w-[29%] md:my-4'>
        <MenuList/>
      </section>
    </div>
    <div className="flex justify-between flex-wrap">
      <section className='md:bg-gray-800 md:rounded-lg w-full md:w-[69%] md:my-4'>
        <RecentOrders/>    
      </section>
      <section className='md:bg-gray-800 md:rounded-lg w-full md:w-[29%] md:my-4'>
        <FeedBack/>
      </section>
    </div>
  </main>
);

export default MainContent;
