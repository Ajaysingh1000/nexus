import React, {useState} from "react";
import ReactDOM from "react-dom/client"
import Card from "./component/Card";
import Footer from "./component/Footer";
import Header from "./component/Header";
import arr from "./utils/dummy"
import {greet as goa, meet as roa} from "./utils/dummy"


function App(){

    const [lst, setLst] = useState(arr)
    const [myarr , setMyarr] = useState(arr)


  // function sort()
  // {
  //   lst.sort((a,b)=>{
  //     return a.price - b.price
  // })
  //   setLst([...lst])
  // }

  function func(){

    let x = myarr.filter((value)=>{
      return value.price%2 === 0
    })
    setMyarr(x)
  }
  return(<>
    <Header/>
    {/* <button onClick={sort}>Sort</button> */}
    <button onClick={func}>Filter</button>
    <div className="middle" style={{display:"flex", gap:"10px" , flexWrap:"wrap"}}>
        {
          arr.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.Offer} price={value.price}/>)   
        }
       
    </div>
    <Footer/>
    </>
  )
}




const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);
