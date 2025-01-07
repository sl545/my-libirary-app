// src/pages/HomePage.js

// import React from 'react';

// const HomePage = () => {
//   return (
//     <div>
//       <h2>Home Page</h2>
//       {/* Add your home page content here */}
//     </div>
//   );
// }

// export default HomePage;

import React from "react";

const HomePage = ({ userName }) => {
  console.log("Home Page userName", userName);

  return (
    <div>
      <h2>
        {userName ? "Welcome, " + userName : "You are not Logged In"}
      </h2>
      {/* Add your home page content here */}
    </div>
  );
};

export default HomePage;
