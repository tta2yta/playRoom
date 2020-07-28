import React from 'react'

export default function OverViewTabRigthSide() {
    return (
        <div className="row overviewtabrigthside">
            <div className="time-rec"><span>Starts in </span><strong>01:35:44</strong></div>
            <div className="btnjoin-tour"><button className=" btntourn"><b>+</b> Join Tournament</button></div>
           <div><h4>Prizes</h4></div>
            <ul>
               <li>1st</li>
               <li>2nd</li>
               <li>3st</li>
               <li>4th-10th</li>
            </ul>
            
        </div>
    )
}
