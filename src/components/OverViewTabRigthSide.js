import React from 'react'

export default function OverViewTabRigthSide() {
    return (
        <div className="row overviewtabrigthside">
            <div className="time-rec"><span>Starts in </span><strong>01:35:44</strong></div>
            <div className="btnjoin-tour"><button className=" btntourn"><b>+</b> Join Tournament</button></div>
           <div><h4>Prizes</h4></div>
            <ul>
               <li><tt>&nbsp;&nbsp;1st</tt></li>
               <li><tt>&nbsp;&nbsp;2nd</tt></li>
               <li><tt>&nbsp;&nbsp;3rd</tt></li>
               <li><tt>&nbsp;&nbsp;4th-10th</tt></li>
            </ul>
            
        </div>
    )
}
