import React from 'react';
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Index.css';

const UnderConstruction = () => {
  return (
    <div className="py-4 border-b-4 w-full min-h-full">
      <div className="container mx-auto px-4">
        <div className='under-construction'>
        <FontAwesomeIcon icon={faPersonDigging} size="3x" />
        <h2>Page under construction</h2>
        </div>
    </div>
    </div>
  );
};

export default UnderConstruction;
