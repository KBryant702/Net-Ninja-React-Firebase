import {useState} from 'react'

import './App.css';


function App() {
 const [events, setEvents] = useState([
  {title: "Mario's Birthday Bash", id: 1},
  {title: "Bowser's Live Stream", id:2},
  {title: "Race on Moo Moo Farm", id: 3}
 ])

 const handleClick = (id) => {
  setEvents(prevEvents => {
    return prevEvents.filter(event => id !== event.id)
  })
}

return (
  <div className="App">
    {events.map((event, index) => (
      <div key={event.id}>
        <h2>{index} - {event.title}</h2>
        <button onClick={() => handleClick(event.id)}>delete event</button>
      </div>
    ))}
  </div>
);
}

export default App;
