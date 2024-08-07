import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgress = ({ value }) => {
  return (
    <div className='w-full py-4'>
      <div className='p-4 flex items-start justify-between bg-secondary rounded-lg'>
        <div className='text-gray-300 font-semibold flex flex-col'>
          <h3>Net Profit</h3>
          <p className='py-3 font-bold text-3xl'>$ 6759.25</p>
          <p className='text-green-400'>&#9650; 3%</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 md:w-16">
            <CircularProgressbar
              value={value}
              strokeWidth={13}
              text={`${value}%`}
              styles={buildStyles({
                pathColor: `#3b82f6`, 
                textColor: '#ffffff', 
                trailColor: '#1f2937', 
                backgroundColor: '#1f2937',
                text:'center'
              })}
            />
          </div>
          <div className="mt-2 text-white text-sm">
            Goal Completed
          </div>
          <div className="text-gray-400 text-xs">
            *The values here has been rounded off.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
