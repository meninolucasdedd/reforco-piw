import React, {Component} from 'react'

import './Navbar.css'
export default class Navbar extends Component {
    render(){
        return(
            <>
            <div className="nav">
                <input type="checkbox" id="nav-check"/>
                <div className="nav-header">
                    <div className="nav-title">
                        <img src="https://images.vexels.com/media/users/3/147090/isolated/preview/697b9004f271ad47335687eaa6af934c-bot--o-do-cora----o-instagram-by-vexels.png" alt=""></img>
                    </div>
                </div>
                <div className="nav-btn">
                    <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                    </label>
                </div>
                
                <div className="nav-links">
                    <a >Linha do tempo</a>
                    <a >Postar</a>
                    
                </div>
                <div class="material-icons mdl-account_circle icone" data-badge="1">account_circle</div>
                <div className="nav-links"> 
                
                  <a className="usuario"><span> Ranniely Saraiva</span></a> 
                </div>

            </div>
            </>
        )
}
}