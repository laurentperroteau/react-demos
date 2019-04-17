import React, { useState } from 'react';

const NewRender: React.FC<{}> = () => {
  const [render, setRender] = useState(true);

  setTimeout(() => {
    setRender(false);
  }, 1000);

  return <span style={{color: 'red'}}>{render ? 'nouveau rendu...' : '...' }</span>;
};

export default NewRender;
