import React from 'react'
import DrpDownPlay from './DrpDownPlay'
import BracketRoundOne from './BracketRoundOne'

export default function BracketsTab() {
    return (
        <>
        <nav className="nav-playtab">
        <div className="nav nav-tabs nav-fill" id="nav-tab-bracket" role="tablist">
          <a className="nav-item nav-link show active" id="nav-round1-tab" data-toggle="tab" href="#nav-roun1-bracket" role="tab" aria-controls="nav-roun1-bracket" aria-selected="true">Round 1</a>
          <a className="nav-item nav-link" id="nav-round2-tab" data-toggle="tab" href="#nav-round2-bracket" role="tab" aria-controls="nav-round2-bracket" aria-selected="false">Round 2</a>
          <a className="nav-item nav-link" id="nav-quarter-tab" data-toggle="tab" href="#nav-quarter-bracket" role="tab" aria-controls="nav-quarter-bracket" aria-selected="false">Quarter Finals</a>
          <a className="nav-item nav-link" id="nav-semi-tab" data-toggle="tab" href="#nav-semi-bracket" role="tab" aria-controls="nav-semi-bracket" aria-selected="false">Semi Finals</a>
          <a className="nav-item nav-link" id="nav-finals-tab" data-toggle="tab" href="#nav-final-bracket" role="tab" aria-controls="nav-final-bracket" aria-selected="false">Finals</a>
        </div>
    </nav>
    <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-roun1-bracket" role="tabpanel" aria-labelledby="nav-round1-tab">
                    <BracketRoundOne />
                    </div>
                    <div className="tab-pane fade" id="nav-round2-bracket" role="tabpanel" aria-labelledby="nav-round2-tab">
                     Round 2
                    </div>
                    <div className="tab-pane fade" id="nav-quarter-bracket" role="tabpanel" aria-labelledby="nav-quarter-tab">
                      Quarter Finals
                    </div>
                    <div className="tab-pane fade" id="nav-semi-bracket" role="tabpanel" aria-labelledby="nav-semi-tab">
                      Semi Finals
                    </div>
                    <div className="tab-pane fade" id="nav-final-bracket" role="tabpanel" aria-labelledby="nav-finals-tab">
                      Finals
                    </div>
                  </div>

</>
        
        
        
          
    )
}
