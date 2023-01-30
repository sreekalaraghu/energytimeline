import React, { Component } from 'react'
import events from './data/timeline'



// export class Storypanel extends Component {
//     constructor(props){
//         super(props);
//         this.handleClick = this.handleClick.bind(this)
//     }
//     handleClick(year){
        
//         console.log(year)
//     }
    
//   render() {
//     return (
//         <>
//         <div className='ul'>
//         {events && events.map((event,id)=>
//         <div key = {id} onClick={() => this.handleClick(event.year)}>
//             {event.year}
//         </div>)}
//         </div>
//         </>
//     )
//   }
// }
export function getYear() {
    const event = events;

    return event;
  }
export function filteryear(year){
    let filteredevent = getYear().filter(data => data.year == year);
    console.log(filteredevent)
  
    return filteredevent;
} 

