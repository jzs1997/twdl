import React, { useEffect } from 'react';
import './App.css';
import ContentTab from './components/tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/video-react/dist/video-react.css";


const App = () => {
  const BASE_URL = 'https://api.twdl.online/api/v1'
  // const BASE_URL = "https://localhost:443/api/v1";
  useEffect(() => {
    const initialize = async() => {
      try{
          const response = await fetch(BASE_URL + '', {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if(!response.ok){
          console.error('Initialization failed');
        }

        const data = await response.json();
        console.log('Initialization successful', data);
      } catch(error){
        console.error("Initialization error", error);
      }
    };
    initialize();
  }, []);
  return(
    <div style={{ display: 'block' }}>
      <ContentTab />
    </div>
  )
}

export default App;
