import React from 'react';

const Realtors = ({ realtors }) => {
  const { text, staff } = realtors;

  return (
    <div className='realtors'>
      <h3 className='heading-3'>{text}</h3>
      <div className='realtors__top-3'>
        {staff.map((realtor, index) => (
          <div className='realtor'>
            <img
              src={realtor.image}
              alt={`Realtor ${index}`}
              className='realtor__img'
            />
            <div className='realtor__name'>{realtor.name}</div>
            <div className='realtor__sales'>{realtor.sales}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Realtors;
