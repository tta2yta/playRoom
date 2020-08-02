import React, {useEffect, useState} from 'react'
import OverViewTab from './OverViewTab'
import BracketsTab from './BracketsTab'
import MatchesTab from './MatchesTab'
import PlayersTab from './PlayersTab';

export default function PlayTabs() {

//   const [opcVal, setOpcVal]=useState(10);
//   const [flag, setFlag]=useState(true)

//   const setOpcityVal=(opval)=>{
//     setOpcVal(opval);
//     setFlag(false);
//   }


//  useEffect(()=>{

//   if(! flag){
//   document.body.style.opacity= opcVal;
//  // alert("Opacity set to " + opcVal * 100 + "%");
//   }
//  })


    return (
        <div>
          <div className="curr-menu"><span>Lobby &nbsp; &nbsp; {`>`}&nbsp;</span>
          <span>Tournamnets &nbsp; &nbsp;{`>`}&nbsp;</span>
          <span>Solo noobs-ARG B03 classic maps &nbsp; &nbsp;{`>`}&nbsp;</span>
          <span>Team Alpha vs Team Beta &nbsp; &nbsp;</span>
          </div>
            <nav className="nav-playtab navbar-left navbar-light">
                    <div className="nav nav-tabs nav-fill navbar-left" id="nav-tab" role="tablist">
                      <a className="nav-item nav-link " id="nav-OverViewTab-tab" data-toggle="tab" href="#OverViewTab" role="tab"  aria-selected="true" >OverView</a>
                      <a className="nav-item nav-link" id="nav-BracketsTab-tab" data-toggle="tab" href="#BracketsTab" role="tab" aria-controls="BracketsTab" aria-selected="false" >Brackets</a>
                      <a className="nav-item nav-link active" id="nav-MatchesTab-tab" data-toggle="tab" href="#MatchesTab" role="tab" aria-controls="BracketsTab" aria-selected="false" >Matches</a>
                      <a className="nav-item nav-link" id="nav-PlayersTab-tab" data-toggle="tab" href="#PlayersTab" role="tab" aria-controls="BracketsTab" aria-selected="false">Players</a>
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
                    <div className="tab-pane fade  " id="OverViewTab" role="tabpanel" aria-labelledby="nav-OverViewTab-tab">
                     <OverViewTab />
                    </div>
                    <div className="tab-pane fade " id="BracketsTab" role="tabpanel" aria-labelledby="nav-BracketsTab-tab">
                      <BracketsTab />
                    </div>
                    <div className="tab-pane fade show active " id="MatchesTab" role="tabpanel" aria-labelledby="nav-MatchesTab-tab">
                     <MatchesTab />
                    </div>
                    <div className="tab-pane fade" id="PlayersTab" role="tabpanel" aria-labelledby="nav-PlayersTab-tab">
                      <PlayersTab />
                    </div>
                  </div>
        </div>
    )
}
