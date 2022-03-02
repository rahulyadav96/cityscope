import './App.css';
import {useState,useEffect} from "react"
import axios from "axios"
import {Home} from "./components/Home";
function App() {
  const [data,setdata] = useState("");
  // useEffect(()=>{
  //   axios.get('/api')
  //   .then(res=>{
  //     setdata(res.data.message)
  //   }).catch(err=>console.log(err))
  // },[])
  return (
    <div className="App">
      <Home />
  
    </div>
  );
}

export default App;
