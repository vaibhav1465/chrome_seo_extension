import React from 'react';
import './App.css';
 


function App() {
 return (
   <div className="App">
     <h1>digg extension</h1>
 <button onClick={()=>
  {
    chrome.tabs.create({
            url: 'https://mail.google.com',
            active: true
          })
         }
  
  }>Login/Signup</button>
    
   </div>
 );
}
 
export default App;