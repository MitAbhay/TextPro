import React , {useState} from 'react'



export default function TextForm(props) {
    const handleupclick = ()=>{
        // console.log("Uppercase clicked");
        let newtext =text.toUpperCase();
        settext(newtext);
    }

    const handleloclick = ()=>{
        // console.log("Uppercase clicked");
        let newtext =text.toLowerCase();
        settext(newtext);
    }


    const handleOnChange = (event)=>{
        // console.log("Uppercase clicked");
        settext(event.target.value);
    }
    const handleCopy = () => {
        var text = document.getElementById("textarea");
        text.select();
        navigator.clipboard.writeText(text.value);
        }

        const handleExtraSpaces = () => {
            let newText = text.split(/[ ]+/);
            settext(newText.join(" "))
            }
            
        



    const [text, settext] = useState("Enter your text here.....");   // useState Hook
    // text ="text changed"; // Wrong
    // settext = "text changed";//Right


   


return (
    <>
<div className="mx-auto mx-4" style={{backgroundColor: props.mode==="dark"?"#413f3f": "white"}}>
    <h1 className={`text-center fs-1 text-success bg-${props.mode}-400`}>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control fs-4" id="textarea" style={{backgroundColor: props.mode==="dark"?"#413f3f": "white", color: props.mode=== "dark"?"white":"black"}} value={text} onChange={handleOnChange} rows="10" ></textarea>
    </div>
    <div className="mx-auto">
    <button type="button" class="btn btn-success btn-lg mx-2" onClick={handleupclick} >Convert into UPPERCASE</button>
    <button type="button" class="btn btn-success btn-lg .translate-middle-x mx-2" onClick={handleloclick}>Convert into lowercase</button>
    <button type="button" class="btn btn-success btn-lg .translate-middle-x mx-2" onClick={handleCopy}>Copy Text</button>
    <button type="button" class="btn btn-success btn-lg .translate-middle-x mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
</div>
<div className="card border-success mb-3 my-2" style={{backgroundColor: props.mode==="dark"?"#312f2f": "white"}} >
  <div className="card-header bg-transparent border-success mx-2">Details</div>
  <div className="card-body text-success">
    <h5 className="card-title text-center fs-2">Preview</h5>
    <p className="card-text ">{text}</p>
  </div>
  <div className="card-footer bg-transparent border-success">{text.split(" ").filter((element)=>{return element.length!==0})} Words and {text.length} Charachters</div>
</div>


</>
)
}