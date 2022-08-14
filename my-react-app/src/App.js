
import './App.css';
// all react hooks start with use
import { useState } from 'react'

function App() {
 const [name, setName] = useState('Mario')
 const [events, setEvents] = useState([
  {title: "Mario's Birthday Bash", id: 1},
  {title: "Bowser's Live Stream", id:2},
  {title: "Race on Moo Moo Farm", id: 3}
 ])

  const handleClick= ()=> {
    setName('Luigi')
    console.log(name)
  }
  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick ={handleClick}>Change name</button>
      {events.map((event, index) => (
        <div key={events.id}>
          <h2>{index} - {event.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
