import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          let label = context.dataset.label || '';
          if (label) {
            label += ': ';
          }
          if (context.parsed.y !== null) {
            label += new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(context.parsed.y);
          }
          return label;
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#6b7280', 
      },
    },
    y: {
      grid: {
        borderDash: [8, 4], 
        color: '#374151', 
      },
      ticks: {
        color: '#6b7280', 
        callback: function (value) {
          return `${value}k`; 
        },
      },
    },
  },
};

const data = {
  labels: Array.from({ length: 23 }, (_, i) => 5 + i * 2), 
  datasets: [
    {
      label: 'Activity',
      data: [4, 5, 6, 5, 7, 8, 5, 9, 10, 8, 7, 6, 8, 10, 9, 8, 7, 10, 11, 9, 8, 7, 6],
      backgroundColor: '#3b82f6', 
      borderRadius: 5,
      barThickness: 20, 
    },
  ],
};

const ActivityChart = () => {
  return (
    <div className='w-full pb-4'>
        <div className="bg-gray-800 p-4 rounded-lg">
        <div className='flex justify-between items-center'>
        <h2 className=' self-start pb-4 text-xl font-bold text-white'>Activity</h2>
        <div className="top-4 right-4">
          <select className="bg-gray-700 text-white p-2 rounded">
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
        </div>
        </div>
        <div className="relative h-64">
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  );
};

export default ActivityChart;
