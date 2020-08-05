import React, {Component} from 'react'
import './Galeria.css'
import Post from './../Posts/Post'
import Post2 from './../Posts/Post2'

export default class Galeria extends Component {

    render(){
        return(
            <>
            <div className="container">

            <Post/>
           
            </div>
            <div className="container">
                 <Post2/>
            </div>
            </>
          
        )
    }
}