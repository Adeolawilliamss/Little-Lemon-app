// import React from 'react';

//     function Header(){
//     return(

//         <header>
//           <h1>Little Lemon</h1>
//           <h2>Chicago</h2>
//           <p style={{marginRight:'270px'}}>We are a family-owned</p>
//           <p style={{marginRight:'320px'}}>mediterreanean</p>
//           <p style={{marginRight:'160px'}}>resturant focused on traditional recipies</p>
//           <img style={{ width: '20%', maxWidth: '500px', height: 'auto'}} src='Mainpicture.jpg' alt='Main Picture'/>
//         </header>
//     )
// }

// export default Header;

// Header.js
// Header.js

import React from 'react';

function Header() {
  return (
    <header style={{ position: 'relative' }}>
      <img
        src='Mainpicture.jpg'
        alt='Main'
        style={{ position: 'absolute', top: 0, left: 0, width: '29%', zIndex: 1 , borderRadius : '8%' , marginLeft: '430px' , marginTop: '70px'}}
      />
      <div style={{ backgroundColor: '#495E57', color: 'white', textAlign: 'center', padding: '20px' }}>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p style={{ marginRight: '270px' }}>We are a family-owned</p>
        <p style={{ marginRight: '320px' }}>Mediterranean</p>
        <p style={{ marginRight: '160px' }}>restaurant focused on traditional recipes</p>
      </div>
    </header>
  );
}

export default Header;

