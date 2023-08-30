import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
  const nav=useNavigate();
function navigateToProduct(){
  nav('/products')
}
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={navigateToProduct}>Go to Product Page</button>
    </div>
  );
}

export default Home;

