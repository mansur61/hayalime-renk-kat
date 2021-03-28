import React from 'react';
import GirisimciKayit from './components/GirisimciKayit';
import DestekciKayit from './components/DestekciKayit';

import DestekciGirisYap from './components/DestekciGirisYap';
import GirisimciGirisYap from './components/GirisimciGirisYap';

function App() {
  return (
    <div className="container">
        <div className="row">
        
          <GirisimciKayit />

          <DestekciKayit />
         
          
        </div>
        <br />
        <br />
        <hr />
      <div className="row">
      <br />
        <GirisimciGirisYap />
        <DestekciGirisYap />
        
       </div>
       <br />
      <br />

    </div>
    
  );
}

export default App;
