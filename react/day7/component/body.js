
import { useEffect, useState } from "react";

function Body(){

    const [Profile , setProfile] = useState([])
    const [count , setCount] = useState("")
    async function getData(count){
        const ran = Math.floor(Math.random() * 10000)
        const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${Number(count)}`)
        const data = await response.json()
        setProfile(data)
    }

    useEffect(() => {
        getData(10)
      }, [])


    return (
        <>
        <div id = 'search'>
            <input type="number" placeholder="enter your number" value={count} onChange={(e) => setCount(e.target.value)}></input>
            <button onClick={() => getData(count)}>Submit</button>
        </div>

        <div id = "but">
                {
                Profile.map((item) => {
                    return (
                        <div key={item.id} className="card">
                            <img src={item.avatar_url}></img>
                            <h1>{item.login}</h1>
                            <a href={item.html_url}>{item.html_url}</a>
                        </div>
                    
                    )
                })   
                }
        </div>
        </> 
    )


}

export default Body