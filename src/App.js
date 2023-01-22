import './App.css';
import events from './data/timeline';
import { useState,useEffect } from 'react';
import {filteryear,getYear} from './StoryPanel';
import Popup from './Popup';


function App() {
  const [filteredevent,setFilteredevent] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [clickedText,setClickedText] = useState('')



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

  
  

  return (
    <div className='body-head'>
     {events &&
        events.map((data, index) => (
          <>
              
                <button className='button' key={index} value={data.year} onClick={handleyear}>
                {data.year}
                </button>
              
          </>
        ))}

        

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
