import React from 'react'

export default function OverViewTabLeftSide() {
    return (
        <>
       
              <div className="row img_text_desc" >
                <img className="img_solo" src={`${process.env.PUBLIC_URL}/assets/images/dota2.png`} alt="Card image cap" />
                <p className="img-desc"> <span>Solo noobs-ARG-BOZ classic maps</span></p>
                <p className="img-desc-add"> <span><b>R</b>2,500</span> <span className="player_desc">PLAYERS 5/30</span></p>
             </div>
           
        </>
    )
}
