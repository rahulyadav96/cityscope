import './App.css';
import {useState,useEffect, useContext} from "react"
import { Switch, Route, Redirect } from 'react-router-dom';
import {Home} from "./components/Home";
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { AuthContext } from './context/AuthContext';
function App() {
  const [data,setdata] = useState("");
  const {auth} = useContext(AuthContext);
  // useEffect(()=>{
  //   axios.get('/api')
  //   .then(res=>{
  //     setdata(res.data.message)
  //   }).catch(err=>console.log(err))
  // },[])
  return (
    <div className="App">
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/sign-up">
        <Signup />
      </Route>
      <Route path="/login">
        {
          auth?<Redirect to="/"/>:
        <Login />
        }
      </Route>
    </Switch>
  
    </div>
  );
}

export default App;
