import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'

import { BrowserRouter,Route,Routes
} from "react-router-dom";

 function App() {

  const [mode, setMode] = useState ('light')
  const [alert, setAlert] = useState(null)
  
  
  const [aboutMode, setAboutMode] = useState ({
    color: 'black',
    backgroundColor: 'white',
    border:'1px solid',
    borderColor: mode ==='dark'?'white':'dark',

})

  const showAlert = (message, type)=>{
    setAlert(
      {
        msg: message,
        type: type
      }
    )
      setTimeout( ()=>{
            setAlert(null)
      } ,2000);


  }

  const removeBodyClass = ()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')

  }

  const toggleMode = (cls)=>{
    removeBodyClass();
    document.body.classList.add('bg-'+cls)
    if(mode==='light' ){
      setMode('dark');
      showAlert("Dark Mode Enabled", "success");
      
      setAboutMode ({
        color: 'white',
        backgroundColor: 'rgb(57 57 57)',
        border:'1px solid',
        borderColor: mode ==='dark'?'white':'',
       
    })

    // This is example of how to set interval 

      // setInterval(()=>{
      //   document.title = 'TextUtils is Amazing'
      // },2000)
      // setInterval(()=>{
      //   document.title = 'Install TextUtils Now'
      // },1500)
      // 

    }
    else{
      setMode('dark');
    }
  }

  const toggleMode2 = (cls)=>{
    removeBodyClass();
    document.body.classList.add('bg-'+cls)
    if(mode==='dark' ){
      setMode('light');
      showAlert("Light Mode Enabled", "success");
      
      setAboutMode ({
        color: 'black',
        backgroundColor: 'white',
        border:'1px solid',
        borderColor: mode ==='light'?'dark':'',
       
    })
    }
    else{
      setMode('light');
    }
  }

  return (
    <>
    <BrowserRouter>
     <Navbar title="Text-io" AboutText="About TextUtils" mode={mode} toggleMode={toggleMode} toggleMode2={toggleMode2} />
     {/* blueMode={blueMode} */}
     <Alert alert={alert} />
     <div className="container my-3">
      <Routes>
        <Route exact path="/about" element={<About aboutMode={aboutMode} mode={mode} />}>
        </Route>
        <Route exact path="/" element={<TextForm heading="Enter Text To Analyze" showAlert={showAlert} label1= "Your Text Summary" label2="Preview" mode={mode} />}>
        </Route>
      </Routes>
     </div> /
     </BrowserRouter>
    </> 
  
  );
}

export default App;
