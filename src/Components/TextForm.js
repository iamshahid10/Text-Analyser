import React, {useState} from 'react'

export default function TextForm(props){
    const handleOnchange = (event)=>{
        setText(event.target.value)

    }

    const handleupClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success");
    }

    const handleLoClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to LowerCase", "success");
  }

  const handleClClick = ()=>{
    let newText ='';
    setText(newText)
    props.showAlert("Text Cleared", "success");
    }

  const handleCopy = ()=>{
   
    navigator.clipboard.writeText(text);

    props.showAlert("Copied to Clipboard", "success");
   }

  const handleExtraSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed", "success");
  }

    const [text,setText] = useState('') ;
  return (
    <>
   
    <div style={{color: props.mode==='dark'?'white':'dark'}}> 
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label" style={{color: props.mode==='dark'?'white':'black'}} ><strong>{props.heading}</strong></label>
        <textarea className="form-control" value= {text} style={{backgroundColor: props.mode==='dark'?'#212529':'white',color: props.mode==='dark'?'white':'black'}} onChange={handleOnchange} placeholder="Enter Text Here" id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-secondary mx-1 my-1" disabled={text.length===0} onClick={handleupClick} >Convert to Uppercase</button>
        <button className="btn btn-secondary mx-1 my-1" disabled={text.length===0} onClick={handleLoClick} >Convert to Lowercase</button>
        <button className="btn btn-secondary mx-1 my-1" disabled={text.length===0} onClick={handleExtraSpace} >Remove Extra Spaces</button>
        <button className="btn btn-secondary mx-1 my-1" disabled={text.length===0} onClick={handleCopy} >Copy Text</button>
        <button className="btn btn-secondary mx-1 my-1" disabled={text.length===0} onClick={handleClClick} >Clear Text</button>
      
    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
    <label className="form-label2"><b>{props.label1}</b></label>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters <br/>
       {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read
    </p>
    <label className="form-label3"><b>{props.label2}</b></label>
    <p> {text.length>0?text:"Nothing to Preview!"} </p>

    </div>
    
    </>
  )

}