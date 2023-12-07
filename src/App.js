import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert';
import About from './components/About'
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";

export default function App() {
  
  const [mode,setMode]=useState('light');

  const [btn,btnText]=useState('Enable Dark Mode')
  const [alert, setalert] = useState(null)

  const removeclasslist=()=>{
   document.body.classList.remove("bg-primary")
   document.body.classList.remove("bg-secondary")
   document.body.classList.remove("bg-success")
   document.body.classList.remove("bg-warning")
   document.body.classList.remove("bg-danger")
   document.body.classList.remove("bg-light")
   document.body.classList.remove("bg-dark")
 }

  const showAlert=(message,type)=>{
       setalert({
          msg:message,
          type:type
       })
       setTimeout(() => {
          setalert(null)
       }, 1500);
  }

  const toggleMode=(cls)=>{
   removeclasslist();
   document.body.classList.add("bg-"+cls)
     if(mode==='light'){
      setMode('dark')
      btnText("Enable Light Mode");
      document.body.style.backgroundColor='#042743'
      showAlert("Dark Mode has been Enabled","success");
      document.title="Textutils -- Dark-Mode"
     }else{
      setMode('light')
      btnText("Enable Dark Mode")
      document.body.style.backgroundColor='white'
      showAlert("Light Mode has been Enabled","success");
      document.title="Textutils -- Light-Mode"
     }
  }

  return (
    <>
      <Router>
       <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} btn={btn} />
       <Alert alert={alert} />
       <div className="container mt-3">
       <Switch>
          <Route exact path="/">
        <TextForm heading="Enter text to analyze below" mode={mode} showAlert={showAlert} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
       </div>
       </Router>
    </>
  )
}
