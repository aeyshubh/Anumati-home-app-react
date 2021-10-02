import React from 'react';
import '../src/App.css';
import {useState} from 'react';
function App(){
  const [data,setData] = useState(null);
  //const api_url = 'http://localhost:3000/getConsentHandle/'+data;  <a href={api_url} ></a>
  const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';
  var url_main_page = ' ';
  function getData(val){
    setData(val.target.value)
    if(val.length === 10){
      getConsentId();

    }
  }
  async function getConsentId(){
      const response = await fetch(api_url);
      const consent_json = await response.json();
      const consent_id = (consent_json.id);
      console.log("Hello");
      console.log(consent_id);
      url_main_page='https://anumati.setu.co/'+consent_id+'?redirect_url=http://localhost:3000/';
      console.log(url_main_page);
      window.location.href=url_main_page;
  }
  return(
    <div className="App">
      <h3>Setu home page</h3>
      {
      //  print?<h2>{data}</h2>:null 
      }
  
      <input type="text" minLength = {10} maxLength={10} onChange={getData} ></input>
      
      <button onClick={()=>getConsentId()}>Login</button>
      
    </div>
  )
}

export default App;

