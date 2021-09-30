import { useEffect,useRef } from "react";
// class LinkedList{
//     constructor(value){
//         this.value=value;
//         this.next=null;
//     }
// }

// const addnode = (value)=>{

//     var node = new LinkedList(value);

//     if(this.head == null){
//         this.head=node;
//     }else{
//         current = this.head;

//         while(current.next){
//             current=current.next;
//         }
//         current.next = node;
//     }
// }

// const makeSnakes = (board)=>{
//     const initialCells = [96,100,76,83,45,23];
//     const endCells = [65,69,58,32,6,4];;
        
// }

export function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
}