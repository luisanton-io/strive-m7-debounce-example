import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {


  const [value, setValue] = useState('')
  const [debouncedValue, setDebouncedValue] = useState('')


  const [countdown, setCountdown] = useState(null)


  useEffect(() => {
    if (countdown) {
      clearTimeout(countdown)
    }

    setCountdown(setTimeout(() => {
      setDebouncedValue(value)
    }, 300))

  }, [value])

  useEffect(() => {

    if (!debouncedValue) return

    console.log("Fetching data using value: ", debouncedValue);

    // here you are supposed to fetch

    (async () => {
      const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=${debouncedValue}&limit=10`)
      const data = await response.json()

      console.log(data)
    })()
  }, [debouncedValue])

  return (
    <div className="App">
      <input type="text" className="" value={value} onChange={e => setValue(e.target.value)} />

    </div>
  );
}

export default App;
