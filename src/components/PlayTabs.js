import React, {useEffect, useState} from 'react'
import OverViewTab from './OverViewTab'
import BracketsTab from './BracketsTab'
import MatchesTab from './MatchesTab'
import PlayersTab from './PlayersTab';

export default function PlayTabs() {

  const [opcVal, setOpcVal]=useState(10);
  const [flag, setFlag]=useState(true)

  const setOpcityVal=(opval)=>{
    setOpcVal(opval);
    setFlag(false);
  }


 useEffect(()=>{

  if(! flag){
  document.body.style.opacity= opcVal;
 // alert("Opacity set to " + opcVal * 100 + "%");
  }
 })


    return (
        <div>
          <div className="curr-menu"><span>Lobby &nbsp; &nbsp; {`>`}&nbsp;</span>
          <span>Tournamnets &nbsp; &nbsp;{`>`}&nbsp;</span>
          <span>Solo noobs-ARG B03 classic maps &nbsp; &nbsp;{`>`}&nbsp;</span>
          <span>Team Alpha vs Team Beta &nbsp; &nbsp;</span>
          </div>
            <nav className="nav-playtab">
                    <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                      <a className="nav-item nav-link " id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true" onClick={()=>setOpcityVal(0.5)}>OverView</a>
                      <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false" onClick={()=>setOpcityVal(0.7)}>Brackets</a>
                      <a className="nav-item nav-link active" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false" onClick={()=>setOpcityVal(1)}>Matches</a>
                      <a className="nav-item nav-link" id="nav-about-tab" data-toggle="tab" href="#nav-about" role="tab" aria-controls="nav-about" aria-selected="false">Players</a>
                    </div>
                </nav>
                <div className="recomm"><span>Ordenor por</span> <button>Recommendations</button></div>
                <div className="hr-nav-div"><hr className="hr-nav"/></div>
                
                <div>
                    <select id="playroomdrop" name="playroomdrop">
                    <option value="All">All</option>
                    <option value="one">One</option>
                    <option value="two">Two</option>
                    <option value="three">Three</option>
                    </select>
                </div>
                <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                    <div className="tab-pane fade  " id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                     <OverViewTab />
                    </div>
                    <div className="tab-pane fade " id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                      <BracketsTab />
                    </div>
                    <div className="tab-pane fade show active " id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                     <MatchesTab />
                    </div>
                    <div className="tab-pane fade" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                      <PlayersTab />
                    </div>
                  </div>
        </div>
    )
}
