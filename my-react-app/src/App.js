import './App.css';
import {useState} from 'react'
import Title from './components/Title'


function App() {
const [showEvents, setShowEvents] = useState(true)
 const [events, setEvents] = useState([
  {title: "Mario's Birthday Bash", id: 1},
  {title: "Bowser's Live Stream", id:2},
  {title: "Race on Moo Moo Farm", id: 3}
 ])

 console.log(showEvents)

 const handleClick = (id) => {
  setEvents(prevEvents => {
    return prevEvents.filter(event => id !== event.id)
  })
}
const subtitle ="All the latest events in Marioland"

return (
  <div className="App">
    < Title title="Events in Your Area" subtitle={subtitle}/>
    {showEvents && (
      <div>
        <button onClick={()=> setShowEvents(false)}>Hide Events</button>
      </div>
    )}
   
      {!showEvents && (
         <div>
      <button onClick={()=> setShowEvents(true)}>Show Events</button>
    </div>
      )}
    {showEvents && events.map((event, index) => (
      <div key={event.id}>
        <h2>{index} - {event.title}</h2>
        <button onClick={() => handleClick(event.id)}>Delete Event</button>
      </div>
    ))}
  </div>
);
}

export default App;
