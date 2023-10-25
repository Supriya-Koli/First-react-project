

import { useState } from "react"
import Data from "./Fetching/Data"
import "./Fetching/Data.css"
const App =() =>{
  const[data,setData]=useState(Data)
  

  return(
    <div >
      <section>
        <main>
          <p>Today Birthday {data.length} 😊</p>
          {
            data&& data.map((x)=>
            {
              return(
                <div className="cards" key={x.image}>
                  <img src={x.image} alt=""  height={'50px'} width={'50px'}></img>
                  <ruby><p>{x.age}</p><rt>{x.name}</rt></ruby>

                </div>
              )
            })
          }
          <button onClick={()=>setData([])}>Clear</button>
          
        </main>
      </section>
    </div>
  )
}
export default App


