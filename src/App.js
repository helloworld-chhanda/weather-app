
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  
  const [value,setValue] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
const handleSearch=(e)=>{
  setValue(e.target.value) 
}
useEffect(() => {
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=10&appid=9da2b0b83848d461537e697109a3e9ae`)
  .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          const data = result[0]
          const latitude = data.lat
          const longitude = data.lon
          fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=9da2b0b83848d461537e697109a3e9ae`)
        })
},[value])
console.log(value)

  // function increment()
  // {
  //   setValue(value+1)
  
  // }
  // function decrement()
  // { 
  //   setValue(value-1)
  // }
  const [search,setSearch] = useState("")

  return (
    <div className="Weather-app">
      <div>
        <input type="text" onChange={handleSearch} name="city" placeholder='Enter city name' value={value} />
        <button className="search" value="submit" >Search</button>
        {/*<button onClick={increment}>+</button>*/}
        <div className="temp">
            
        </div>
        {/*<button onClick={decrement}>-</button>*/}
      </div>
    </div>
  );
}

export default App;
