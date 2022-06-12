import { render } from "react-dom"
import React from "react"
class Header extends React.Component{
    constructor(){
        super()
        this.state = {favoritecolor:"red"}
    }


render() {
    return(
        <h1> My favoriteColor is {this.state.favoritecolor} </h1>
    )
}
};
export default Header