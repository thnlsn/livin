import React from 'react';

const Realtors = ({ realtors }) => {
  const { text, staff } = realtors;

  return (
    <div className='realtors'>
      <h3 className='heading-3'>{text}</h3>
      <div className='realtors__list'>
        {staff.map((realtor, index) => (
          <div className='realtor'>
            <img
              src={realtor.image}
              alt={`Realtor ${index}`}
              className='realtor__img'
            />
            <div className='realtor__details'>
              <h4 className='heading-4 heading-4--light'>{realtor.name}</h4>
              <div className='realtor__sales'>{realtor.sales} houses sold</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Realtors;
