import { useState } from "react"
import React  from 'react'



function TextForm(props){
    const UpperCase = () => {
        // console.log("Uppercase was clicked");
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        SetText(newText)
    }
    const handleOnChange = (event) => {
        console.log("On change");
        SetText(event.target.value);
    }
    const [text, SetText] = useState("Enter Your Text Here");
    return(
        <>
        <h1>
            {props.heading}
            </h1>
  <div className="form-floating">
  <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Leave a comment here" rows ="8" id="floatingTextarea"></textarea>
  {/* <label for="floatingTextarea">Comments</label> */}
  <button type="button" className="btn btn-primary my-3" onClick={UpperCase} >Change To UpperCase</button>
</div>
        </>
    )
}
export default TextForm ;