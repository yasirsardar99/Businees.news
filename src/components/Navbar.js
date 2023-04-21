import React, { Component } from 'react'


export default class Navbar extends Component {
  

  render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Trending</a>
      </li>
   
      <li className="nav-item">
        <a className="nav-link" href="/">Subscribed</a>
      </li>
    </ul>

    {/* FORM ON THE TOP RIGHT OF THE NAVBAR */}
    <form className="form-inline my-2 my-lg-0">
     
           {/* GIT LINK HERE SOON  */}
           <img src="\person 1.png"
            className="rounded-circle"
            height="40"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
    </form>
  </div>
</nav>
      </>
    )
  }
}
