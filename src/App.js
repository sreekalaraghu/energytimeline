import './App.css';
import events from './data/timeline';
import { useState,useEffect } from 'react';
import {filteryear,getYear} from './StoryPanel';
import Popup from './Popup';


function App() {

 
  const [filteredevent,setFilteredevent] = useState(0);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [clickedText,setClickedText] = useState('')
  const year = [...new Set(events.map(item => item.year))]

  


  useEffect(() => {

    setFilteredevent(getYear());
  }, []);
  
  
   

  function handleyear(e) {
    
    let year = e.target.value;
    setFilteredevent(filteryear(year));
     
  }
  function handlePopup (event){
    setClickedText(event.target.innerText);
    console.log(event.target.innerText)
    setIsPopupVisible(!isPopupVisible)
    
  }

  function closePopup() {
    setIsPopupVisible(false);
  }

  const filterstate =(state) =>{
  
    setFilteredevent(events.filter((item => item.state === state)))
    

  }

  const filterstation =(station) =>{
    setFilteredevent(events.filter((item => item.station === station)))
  }


  
  

  return (
    <div className='body-head'>
      {events &&
        year.map((data, index) => (
          <>
              
                <button className='button' key={index} value={data} onClick={handleyear}>
                {data}
                </button>
              
          </>
        ))}
      <div className='state'>
        <div>
          <button onClick={() => filterstate("VIC")}>VIC</button>
          <button onClick={() => filterstate('QLD')}>QLD</button>
          <button onClick={() => filterstate('NSW')}>NSW</button>
          <button onClick={() => filterstate('SA')}>SA</button>
          <button onClick={() => filterstate('WA')}>WA</button>
          <button onClick={() => filterstate('TAS')}>TAS</button>
        </div>
      </div>
      <div className='facilities'>
        <button onClick={() => filterstation('coal')}>Coal</button>
          <button onClick={() => filterstation('hydro')}>Hydro</button>
          <button onClick={() => filterstation('small_scale_PV')}>Small Scale PV</button>
          <button onClick={() => filterstation('large_scale_PV')}>Large scale PV</button>
          <button onClick={() => filterstation('wind')}>Wind</button>
          <button onClick={() => filterstation('biomass')}>Biomass</button>
      </div>
      {filteredevent &&
        filteredevent.map((data,index) => (

          
          <div>
            {
              data.paragraphs.map((text,index) =>
              (
                <p ><span className='story-headings' onClick={handlePopup} >{text.text}

                </span>
                </p>
                
              ))
            }
            
           
            </div>
        ))}
        
        {isPopupVisible && <Popup closePopup={closePopup} isPopupVisible={isPopupVisible} clickedText={clickedText}/>}

        
        </div>
    
    
    );
  }
           


              
              

                
                  
                
                
                
                
          
           
        
        
        
        
        
       


           
           
           
           
          
          
       
        
        
        
       
    
    

export default App;
