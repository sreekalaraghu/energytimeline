import React, { Component } from 'react'

export class Paragraphs extends Component {
  render() {
    const event = this.props.event;
    const year = this.props.year;

    console.log(event)
    console.log(year)
       
    return (
      <div>
        {event.filter(year => year==year).map(filteredevent =>
            (
                <li>
                    {filteredevent.paragraphs.text}
                </li>
            ))}
      </div>
    )
  }
}

export default Paragraphs
