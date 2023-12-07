import React, {useState} from 'react'

function TextForm(props) {

    const [text, settext] = useState('Enter text here')

    const changeHandler=(e)=>{
        settext(e.target.value)
    }

    const handleUpperCase=()=>{
        let newtext=text.toUpperCase();
        settext(newtext)
        props.showAlert("text convert to uppercase","success");
    }

    const handleLowerCase=()=>{
        let newtext=text.toLowerCase();
        settext(newtext)
        props.showAlert("text convert to lowercase","success");
    }

    const handleCapitlize=()=>{
        let newwarr=[];
        let arr=text.split(" ");
        arr.forEach((element)=>{
          newwarr.push(element.charAt(0).toUpperCase() + element.slice(1));
          return newwarr;
        })
        let finallist=newwarr.join(" ");
        settext(finallist)
    }

    const cleatText=()=>{
        let newtext=" ";
        settext(newtext);
    }

    const CopyText=()=>{
        navigator.clipboard.writeText(text);
        alert("Copied text successFully")
    }

    const removeExtraSpaces=()=>{
        let newtext=text.split(/[ ]+/);
        settext(newtext.join(" "));
    }

  return (
    <div className={`text-${props.mode==='light'?'balck':'white'}
    `}>
<div className="mb-3">
  <h2>{props.heading}</h2>
  <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} onChange={changeHandler} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<div className="container mt-3">
    <button className={`btn btn-primary mx-1`} onClick={handleUpperCase}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLowerCase}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleCapitlize}>CapitLize Text</button>
    <button className="btn btn-primary mx-1" onClick={cleatText}>Clear Text</button>
    <button className="btn btn-primary mx-1" onClick={CopyText}>Copy Text</button>
    <button className="btn btn-primary mx-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
    <h2>Text Summary</h2>
    <p>{text.split(" ").length} words {text.length} charecters</p>
    <p>{0.008*text.split(" ").length}</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
    </div>
  )
}

export default TextForm