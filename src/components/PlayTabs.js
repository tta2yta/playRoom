import React from 'react'
import OverViewTab from './OverViewTab'
import BracketsTab from './BracketsTab'

export default function PlayTabs() {
    return (
        <div>
          <div className="curr-menu"><span>Lobby &nbsp; &nbsp; {`>`}&nbsp;</span>
          <span>Tournamnets &nbsp; &nbsp;{`>`}&nbsp;</span>
          <span>Solo noobs-ARG B03 classic maps &nbsp; &nbsp;{`>`}&nbsp;</span>
          <span>Team Alpha vs Team Beta &nbsp; &nbsp;</span>
          </div>
            <nav className="nav-playtab">
                    <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                      <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">OverView</a>
                      <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Brackets</a>
                      <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Matches</a>
                      <a className="nav-item nav-link" id="nav-about-tab" data-toggle="tab" href="#nav-about" role="tab" aria-controls="nav-about" aria-selected="false">Players</a>
                    </div>
                </nav>
                <div>
                    <select id="playroomdrop" name="playroomdrop">
                    <option value="All">All</option>
                    <option value="one">One</option>
                    <option value="two">Two</option>
                    <option value="three">Three</option>
                    </select>
                </div>
                <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                     <OverViewTab />
                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                      <BracketsTab />
                    </div>
                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                      CCCCCC
                    </div>
                    <div className="tab-pane fade" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                      DDDDDDD
                    </div>
                  </div>
        </div>
    )
}
