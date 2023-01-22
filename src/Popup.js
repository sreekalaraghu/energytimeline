import React from 'react'

const textData =
    { 'Hazelwood power station closure the latest blow for coal' : 'Like a junction point in those intriguing domino constructions which sends tiles tumbling in all directions, the closure of Victoria national power grid and its customers'}
 

function Popup({closePopup,isPopupVisible,clickedText}) {
  return (
    <div className ={isPopupVisible ? "popup-box":"popup-hidden"}>
       <p className="popup-text">{textData[clickedText]}</p>
       <button className="popup-button" onClick={closePopup}>Close</button>
    </div>
  )
}


export default Popup




