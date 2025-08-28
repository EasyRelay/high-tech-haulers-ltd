import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <img src="/images/logo-1.png" alt="logo" className='h-10 bg-white w-28'/>
      </div>
      <div>
        <h1 className="font-heading text-xl font-bold text-blue-700 leading-tight">HIGH-TECH HAULERS LTD</h1>
        {/* <p className="text-sm text-gray-600 font-medium">LTD</p> */}
      </div>
    </div>
  );
};

export default Logo;