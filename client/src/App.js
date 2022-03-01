import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react"
import axios from "axios"

function App() {
  const [data,setdata] = useState("");
  useEffect(()=>{
    axios.get('/api')
    .then(res=>{
      setdata(res.data.message)
    }).catch(err=>console.log(err))
  },[])
  return (
    <div className="App">
      <header className="App-header">
        Hello
        {data}
      </header>
    </div>
  );
}

export default App;
