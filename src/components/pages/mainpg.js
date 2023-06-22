import React from 'react';
import Navbar from './components/Navbar'; // Assuming the Navbar component file is in the same directory

const homecontent = () => {
  const currentPage = 1; // Replace with your logic to determine the current page number

  return (
    <div>
      <Navbar currentPage={currentPage} />
      {
        <p>hello</p>
      }
    </div>
  );
};

export default homecontent;
