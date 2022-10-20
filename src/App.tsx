import React from 'react';
import './App.css';
 


function App() {
 return (
   <div className="App">
     <h1>digg extension</h1>
 <button onClick={()=>
  {
    chrome.tabs.create({
            url: 'https://test.digg.ai/insights/cmo/dashboard',
            active: true
          })
         }
  
  }>Login/Signup</button>
    
   </div>
 );
}
 
export default App;