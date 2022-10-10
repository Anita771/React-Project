import { useEffect, useState } from "react";

export default function Counter(props){
    const [count,setCount]= useState(0);
    useEffect(setTimer, [count]);
    function setTimer(){
        setTimeout(handleTick, 1000);
    }
    function handleTick(){
        setCount(count + 1);
    }
    return count;

}