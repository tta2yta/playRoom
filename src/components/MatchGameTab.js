import React from 'react'
import MatchGameOneTab from './MatchGameOneTab'

export default function MatchGameTab() {
    return (
        <>
            <nav className="nav-playmatchtab">
                    <div className="nav nav-tabs " id="nav-tab" role="tablist">
                      <a className="nav-item nav-link active" id="nav-game1-tab" data-toggle="tab" href="#nav-game1" role="tab" aria-controls="nav-game1" aria-selected="true">Game 1</a>
                      <a className="nav-item nav-link" id="nav-game2-tab" data-toggle="tab" href="#nav-game2" role="tab" aria-controls="nav-game2" aria-selected="false">Game 2</a>
                      <a className="nav-item nav-link " id="nav-game3-tab" data-toggle="tab" href="#nav-game3" role="tab" aria-controls="nav-game3" aria-selected="false">Game 3</a>
                     
                    </div>
                </nav>
                <div className="hr-nav-div"><hr className="hr-nav"/></div>
                <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                    <div className="tab-pane fade  show active" id="nav-game1" role="tabpanel" aria-labelledby="nav-game">
                    <MatchGameOneTab />
                    </div>
                    <div className="tab-pane fade " id="nav-game2" role="tabpanel" aria-labelledby="nav-game2">
                      
                    </div>
                    <div className="tab-pane fade " id="nav-game3" role="tabpanel" aria-labelledby="nav-game3">
                    
                    </div>
                    
                  </div>
  
        </>
    )
}
