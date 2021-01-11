import React from 'react';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <input
        type='checkbox'
        className='sidebar__checkbox'
        id='sidebar-toggle'
      ></input>
      <label htmlFor='sidebar-toggle' className='sidebar__btn'>
        <span className='sidebar__burger' />
      </label>
    </div>
  );
};

export default Sidebar;
