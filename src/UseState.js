import { useState } from "react";

function UseState() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const handleChange = () => {
      console.log({
        name,
        email
      });
    }
    return (
      <div className="App" style={{padding:20}} >
        <input value={name} onChange={e=>setName(e.target.value)}/><br/>
        <input value={email} onChange={e=>setEmail(e.target.value)}/><br/>
        <button onClick={handleChange}>Register</button>
      </div>
    )
}
export default UseState;