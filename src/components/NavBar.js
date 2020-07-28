import React from 'react'


export default function NavBar() {
    return (
        
    <nav className="navbar navbar-expand-sm">
          
        <ul className="navbar-nav">
            <li className="nav-item">
             <a className="nav-link" href="#">LOBBY</a>
             </li>
             <li className="nav-item">
             <a className="nav-link" href="#">RANKINGS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">STORE</a>
            </li>
            
        </ul>
        <ul className="navbar-nav form-group has-search ml-auto">
        <li className="nav-item ml-auto">
        <span className="nav-item fa fa-search form-control-feedback"></span>
                <input type="text" className="nav-link form-control" placeholder="Search" />
            </li>
        </ul>
        
        {/* <ul className="navbar-nav form-group has-search ml-auto">
         <li className="nav-item">
                <span className="nav-item fa fa-search form-control-feedback"></span>
                <input type="text" className="nav-link form-control" placeholder="Search" />
         </li>
         </ul> */}
         
    </nav>
            

    )
}
