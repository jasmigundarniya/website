import React from 'react';

const Card = ({ children, title }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-1 border border-[#30375033]">
      {title && <h2 className="text-[16px] font-bold uppercase">{title}</h2>}
      {children}
    </div>
  );
};

export default Card;