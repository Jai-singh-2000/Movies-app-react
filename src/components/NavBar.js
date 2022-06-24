import { Component } from "react";


class NavBar extends Component{
    render(){
        return(
        <div style={{display:"flex",padding:'1rem',color:"#1f6dd4"}}>
            <h1>Movies App</h1>
            <h2 style={{marginLeft:"2rem",marginTop:"1rem"}}>Favourites</h2>
        </div>
        )
    }
}

export default NavBar;