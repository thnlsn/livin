import React from 'react';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <input
        type='checkbox'
        class='sidebar__checkbox'
        id='sidebar-toggle'
      ></input>
      <label for='sidebar-toggle' className='sidebar__btn'>
        <span className='sidebar__burger' />
      </label>
    </div>
  );
};

export default Sidebar;
