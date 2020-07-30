import React from 'react'
import MatchGameTab from './MatchGameTab'

export default function MatchesTab() {
    return (
        <>
        <div className="row justify-content-center" >
       
            <table className="tblgameres" >
            <thead></thead><tbody>
                <tr>
                    <td className="td-vic" align="center">VICTORY</td>
                    <td className="td-vic-bl" rowSpan="2"><span></span></td>
                    <td></td>
                    </tr>
                <tr>
                    <td align="center" >TEAM ALHPA</td>
                    <td className="td-vic-res" >2</td>
                    <td > : </td>
                </tr>
                </tbody>
            </table>
            <table className="tblgameres" width="30%">
            <thead></thead><tbody>
                <tr>
                    <td></td>
                    <td className="td-vic-bl" rowSpan="2"><span></span></td>
                    <td className="td-vic" align="center">DEFEAT</td>
                    </tr>
                <tr>
                    <td > &nbsp;1</td>
                    <td className="td-vic-res" align="center">TEAM BETA</td>
                </tr>
                </tbody>
            </table>
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
