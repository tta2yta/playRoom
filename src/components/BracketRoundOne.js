import React from 'react'

export default function BracketRoundOne() {
    return (
        <div className="container grid">
         
        <div className="round">
          <div className="round">
            <div className="match team">
               <ul><li></li><li></li></ul>

               </div>
            <div className="link"></div>
            <div className="match"><ul><li></li><li></li></ul></div>
          </div>
          <div className="round">
            <div className="match team"><ul><li></li><li></li></ul></div>
            <div className="link"></div>
            <div className="match"><ul><li></li><li></li></ul></div>
          </div>
        </div>
        <div className="round justify-space-around">
          <div className="match"><ul><li></li><li></li></ul></div>
          <div className="link"></div>
          <div className="match"><ul><li></li><li></li></ul></div>
        </div>
        </div>

    )
}
