import React, { useState,useEffect } from "react";

export default function Counterr(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`You clicked ${count} times`);
      },[count]);
    


    return(
        <div>
            <h1>
                you clicked {count} times
            </h1>
            <button onClick={ () => setCount(count + 1)}>click me</button>

        </div>
    )
}