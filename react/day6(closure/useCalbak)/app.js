import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator() {
  const [password, setPassword] = useState("ABDUJMDKIEUUH");
  const [length, setLength] = useState(10);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeCharacter, setIncludeCharacter] = useState(false);

//   function generatepassword() {
//     let pass = ""; 
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     if (includeNumber) {
//       str += "0123456789";
//     }
//     if (includeCharacter) {
//       str += "!@#$%^&*{}";
//     }
//     for (let i = 0; i < length; i++) {
//       let char = Math.floor(Math.random() * str.length);
//       pass += str[char];
//     }
//     setPassword(pass);
//   }

  // ye tabhi create hoga jab dependency change hogi matlab 
  // function ka reference change hogi
  let generatepassword = useCallback(()=>{

    let pass = ""; 
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (includeNumber) {
      str += "0123456789";
    }
    if (includeCharacter) {
      str += "!@#$%^&*{}";
    }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str[char];
    }
    setPassword(pass);

  }, [length,includeNumber,includeCharacter])

  // tabhi change hoga jab dependency change hogi
//   useEffect(() => {
//     generatepassword()
//   },[length,includeNumber,includeCharacter])

    useEffect(() => {
        generatepassword()
    },[generatepassword])

  return (
    <>
      <h1>{password}</h1>
      <div>
        <input type="range" min={5} max={50} value={length} onChange={(e) => setLength(e.target.value)}></input>
        <label>length({length})</label>
        <input type="checkbox" defaultChecked = {includeNumber} onChange={(e) => setIncludeNumber(!includeNumber)}></input>
        <label>Number</label>
        <input type="checkbox" defaultChecked = {includeCharacter} onChange={(e) => setIncludeCharacter(!includeCharacter)}></input>
        <label>Character</label>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PasswordGenerator />);
