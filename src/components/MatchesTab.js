import React from 'react'
import MatchGameTab from './MatchGameTab'

export default function MatchesTab() {
    return (
        <>
        <div className="row no-gutters">
        <div className="col-md-6 matchleft ">
        <div className="row ">
        <div className=" col-md-6">
       
        </div>
        
        <div className=" col-md-6 tes">
            <div className="row matchleft ml-auto">
        <ul className=""><li>VICTORY</li>
        <li>ALPHA</li></ul>
        <div><span></span><strong className="sc-l">2 &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;:</strong></div>
        </div>   
        </div>
        </div>
</div>
       
        <div className="col-md-6 ">
      
        <div className=" col-md-6 tes">
            <div className="row matchright">
            <div><strong className="sc-r">1</strong><span></span></div>
        <ul className=""><li>VICTORY</li>
        <li>ALPHA</li></ul></div>
        <div className="row col-md-6 tes">
        
        </div>
        </div>
        </div>
        </div>
        
        {/* <lable>VICTORY Team Alpha</lable></div>
    <div className="col-md-3"><span></span><strong>2</strong></div>
    <div className="col-md-3"><strong>1</strong><span></span></div>
    <div className="col-md-3"><label>DEFEAT Team Beta</label></div>
</div> */}
<div className=""><MatchGameTab /></div>
        </>
    )
}
