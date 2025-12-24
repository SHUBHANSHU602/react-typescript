import React, { useState } from "react";

const Form = () => {
  const [form, setform] = useState({
    email: "",
    password: "",
  });
  const [sh ,setsh]=useState(false);
  const [error,seterror]=useState('')
  const handle=(e)=>{
      setform({...form,[e.target.name]:e.target.value})
  }
  const sumbit = (e) => {
    e.preventDefault();
    if((!form.password)||(!form.email)){
        seterror('all fields are needed')
    }
    else{
        seterror('')
    }
  };
  return <>
  <form onSubmit={sumbit}>

<input type="text" name="email" value={form.email}  onChange={handle}  />
<input type={sh ? "text" : "password"} name="password" value={form.password}  onChange={handle}    /><br/>
<h2>{error}</h2>
<button type="button" onClick={()=>{
    setsh(!sh)
}}>{sh?"HIde":"SHOW"}</button>
<input type="submit" value="click me " />

  </form>
  
  
  </>;
};

export default Form;
