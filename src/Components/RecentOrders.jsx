import React from 'react';
import UserAvatar from './UserAvatar';

const RecentOrders = () => {
  const orders = [
    {
      customer: 'John Doe',
      orderNo: '12345',
      date: '2024-08-07',
      amount: '$150.00',
      status: 'Delivered',
    },
    {
      customer: 'John Doe',
      orderNo: '12345',
      date: '2024-08-07',
      amount: '$150.00',
      status: 'Cancelled',
    },
    {
      customer: 'John Doe',
      orderNo: '12345',
      date: '2024-08-07',
      amount: '$150.00',
      status: 'Delivered',
    },
    {
      customer: 'John Doe',
      orderNo: '12345',
      date: '2024-08-07',
      amount: '$150.00',
      status: 'Delivered',
    },
    {
      customer: 'John Doe',
      orderNo: '12345',
      date: '2024-08-07',
      amount: '$150.00',
      status: 'Cancelled',
    },
    {
      customer: 'John Doe',
      orderNo: '12345',
      date: '2024-08-07',
      amount: '$150.00',
      status: 'Delivered',
    },
    {
      customer: 'John Doe',
      orderNo: '12345',
      date: '2024-08-07',
      amount: '$150.00',
      status: 'Delivered',
    },
    {
      customer: 'John Doe',
      orderNo: '12345',
      date: '2024-08-07',
      amount: '$150.00',
      status: 'Cancelled', 
    }
  ];

  return (
    <div className='w-full pb-4 flex flex-1 md:block'>
      <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className='pb-4 text-xl font-bold text-white'>Recent Orders</h2>
      <table className="w-full">
        <thead>
          <tr className='border-b-2 border-gray-500'>
            <th className="pr-4 pb-2 md:pb-3 md:pr-3 text-left text-white">Customer</th>
            <th className="p-4 md:pb-3 text-left text-white">Order No.</th>
            <th className="p-4 md:pb-3 text-left text-white">Date</th>
            <th className="p-4 md:pb-3 text-left text-white">Amount</th>
            <th className="p-4 md:pb-3 text-left text-white">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderNo} className='font-semibold border-b-2 border-gray-500'>
              <td className="flex items-center gap-3 py-4 text-white">
                <UserAvatar/>
                <p>{order.customer}</p>
              </td>
              <td className="p-4 md:pb-3 text-left text-white">{order.orderNo}</td>
              <td className="p-4 md:pb-3 text-left text-white">{order.date}</td>
              <td className="p-4 md:pb-3 text-left text-white">{order.amount}</td>
              <td>
                <span
                  className={`font-semibold px-3 py-1 rounded-full ${
                    order.status === 'Delivered'
                      ? 'text-green-900 bg-green-300'
                      : 'text-red-900 bg-red-300'
                  }`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default RecentOrders;
