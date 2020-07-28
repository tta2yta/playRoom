import React from 'react'
import OverViewTabLeftSide from './OverViewTabLeftSide'
import OverViewTabMidSide from './OverViewTabMidSide'
import OverViewTabRightSide from './OverViewTabRigthSide'
import OverViewTabFooter from './OverViewTabFooter'

export default function OverViewTab() {
    return (
        <>
        <label>Solo noobs-ARG-BOZ classic maps</label>
        <div className="row">
            
            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                <OverViewTabLeftSide />
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                <OverViewTabMidSide />
            </div>
            <div className="col-12 col-lg-4">
                <OverViewTabRightSide />
            </div>
            <hr/>
          
        </div>
        <div className="row">
      
                <OverViewTabFooter />
          
        </div>
        </>
    )
}
