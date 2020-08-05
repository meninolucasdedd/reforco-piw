import React, {Component,} from 'react'
import './Post.css'
export default class Post extends Component{
    
    state = {
        count: 0
    }

    adicionaLike = () => {
        let contador = this.state.count + 1

        this.setState({
            count: contador
        });

        console.log("Linkado" )
        
        
    }
   

    render(){
        return(
            <>
               
                <div class="demo-card-wide mdl-card mdl-shadow--3dp">
                    <div class="mdl-card__title">
                         <h2 class="mdl-card__title-text">Dia de festa</h2>
                         <h2 class="mdl-card__title-text"></h2>
                         
                    </div>
                    <div class="mdl-card__supporting-text">
                     "E é com os amigos que momentos se tornam mágicos e inesquecíveis."
                    </div>

                    <div class="mdl-card__actions mdl-card--border">
                    <h6><strong> Lucas Silva  </strong></h6>
                    <span>12 minutos atrás</span>
                        <p> "E é com os amigos que momentos se tornam mágicos e inesquecíveis." </p>
                        <p><small><strong>Lucas</strong> Há 12 minutos</small></p>
                        <button onClick={this.adicionaLike} class="mdl-button mdl-js-button mdl-button--colored">
                            <i class="material-icons">favorite</i>

                            <span class="link"> <strong>{this.state.count}</strong>Curtidas</span>

                        </button>
                    </div>

                    <div class="mdl-card__menu">
                        <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                        <i class="material-icons">share</i>

                        </button>
                        <span class="link">Compatilhar</span>
                    </div>
                </div>
                
            </>
           
        )
    }
} 