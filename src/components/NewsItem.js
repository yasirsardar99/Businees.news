import React, { Component } from 'react'

export class NewsItem extends Component {
  
    render() {
        let {title, imgUrl, description, newsUrl} = this.props;
    return (
      <div>
      <div className="card my-2 " style={{width: "18rem"}}>
  <img src={imgUrl?imgUrl :"https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} className="btn btn-light border border-dark border-3 rounded d-flex justify-content-center" >click to Read</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
