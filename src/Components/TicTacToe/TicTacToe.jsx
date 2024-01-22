import React, { useRef, useState } from 'react'
import "./TicTacToe.css"
import CircleIcon from "../Assets/circle.png"
import CrossIcon from "../Assets/cross.png"

// This variable acts as a storage for the game
let data= ["", "", "", "", "", "", "", "", ""]

export const TicTacToe = () => {

    let [count, setCount] = useState(0)
    let [lock, setLock] = useState(false)
    let titleRef =useRef(null)

// Whenever we click on the boxes this function will be executed
    const toggle = (e, num) => {
        //if log is true then we return 0
        //Whenever the user wins  we will set the lock true then our toggle function will not execute
        if (lock) {
            return 0;
        }
        //If the remainder when "count" is divided by 2 is zero, then the condition is true. 
        //then in the element we will insert an image tag using innerHTML.
        if (count%2===0) 
        {
         e.target.innerHTML =`<img src='${CrossIcon}' alt='Cross image'>`;
         data[num]= 'x'; // we will mark the data wit 'x'
         setCount(++count);  // we will increase the count by 1 

        }
        // And if the count is odd:
        else {
            e.target.innerHTML =`<img src='${CircleIcon}' alt='Circle image'>`;
         data[num]= 'o'; // we will mark it with  a 'o'
         setCount(++count);  //we will increase the count by 1  and chnage the img by CircleIcon 
        }
        checkWin()

    }
    // THE LOGIC IS VERY REPETITIVE. TOO MESSY. THINK ABOUT SOMETHING ELSE
    const checkWin = () => {
        if(data[0]===data[1] && data[1]===data[2] && data[2]!=="")
        {
        // Call the "won" function here whenever a player wins
        won(data[2]);

        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!=="")
        {
        won(data[5]);
        }
        else if(data[6]===data[7] && data[7]===data[8] && data[8]!=="")
        {
        won(data[8]);
        }
        else if(data[0]===data[3] && data[3]===data[6] && data[6]!=="")
        {
        won(data[6]);
        }
        else if(data[1]===data[4] && data[4]===data[7] && data[7]!=="")
        {
        won(data[7]);
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!=="")
        {
        won(data[8]);
        }
        else if(data[0]===data[4] && data[4]===data[8] && data[8]!=="")
        {
        won(data[8]);
        }
        else if(data[0]===data[1] && data[1]===data[2] && data[2]!=="")
        {
        won(data[2]);
        }
        else if(data[2]===data[4] && data[4]===data[6] && data[6]!=="")
        {
        won(data[6]);
        }



    }

    //This function will be executed when any palyer wins
    const won = (winner) => {
        setLock(true); // set to "true" so the data cannot be modify
        if(winner==="x")
        {
          titleRef.current.innerHTML = `Congratulations: <img src=${CrossIcon}> wins`;
        }
        else
        {
          titleRef.current.innerHTML = `Congratulations: <img src=${CircleIcon}> wins`
        }
    }

  return (
    <div className="containe">
        <h1 className="title" ref={titleRef}>Tic Tac Toe Game In <span>React</span></h1>
        <div className="board">
          <div className="row1">
            {/*Here we call the toggle function nand we will pass the element and the index number. 
            It will help us to mark the data in our data varable*/}
            <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
            <div className="boxes" onClick={(e)=>{toggle(e,1)}}></div>
            <div className="boxes" onClick={(e)=>{toggle(e,2)}}></div>
            </div>  
          <div className="row2">
            <div className="boxes" onClick={(e)=>{toggle(e,3)}}></div>
            <div className="boxes" onClick={(e)=>{toggle(e,4)}}></div>
            <div className="boxes" onClick={(e)=>{toggle(e,5)}}></div>
            </div>  
          <div className="row3">
            <div className="boxes" onClick={(e)=>{toggle(e,6)}}></div>
            <div className="boxes" onClick={(e)=>{toggle(e,7)}}></div>
            <div className="boxes" onClick={(e)=>{toggle(e,8)}}></div>
            </div>  

        </div>
        <button className="reset">Reset</button>
    </div>
  )
}

