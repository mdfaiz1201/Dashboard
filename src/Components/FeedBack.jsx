import React from 'react';
import UserAvatar from './UserAvatar';
import StarRating from './StarRating';

const FeedBack = ()=> {


  const customers = [
    {
      name: 'Jenny Wilson',
      feedbackText: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
      stars: 4
    },
    {
      name: 'Jenny Wilson',
      feedbackText: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
      stars: 5
    },
    {
      name: 'Jenny Wilson',
      feedbackText: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
      stars: 4
    },
]

  return (
    <div className='w-full bg-gray-800 rounded-lg'>
      <div className="p-4 rounded-lg">
        <h2 className='pb-4 text-xl font-bold text-white'>Customer's Feedback</h2>
        {customers.map((item, index)=>{
            return(
            <div className='text-white pb-4 border-b-2 border-gray-400 '>
              <div key={index} className="pt-4 flex items-center gap-3 text-white">
                  <UserAvatar/>
                  <p className="text-xl font-semibold text-center">{item.name}</p>
              </div>
              <StarRating rating={item.stars} />
              <p>{item.feedbackText}</p>
            </div>
            )
          })}
      </div>
    </div>
  );
};

export default FeedBack;
