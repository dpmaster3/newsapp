import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,url,author,publishedAt,source}=this.props
    return (
      <div>
        <div className="card my-3">
          <img src={imageUrl?imageUrl:"https://imgs.search.brave.com/ZJGVjCh1pqUcke6P0gDsleg2iM54p_cZZf_TRRTbtyM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9idXNpbmVzcy10/ZWNobm9sb2d5LWlu/dGVybmV0LW5ld3Mt/Y29uY2VwdC1tYW4t/c2hvd2luZy10YWJs/ZXQtcGMtd2l0aC1u/ZXdzLWFwcF8zODAx/NjQtMzg5MjEuanBn/P3NpemU9NjI2JmV4/dD1qcGc"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title?title.slice(0,44):""}...</h5>
            <p className="card-text">
              {description?description.slice(0,90):""}...
            </p>
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex: '1'}}>
              {source}
    <span className="visually-hidden">unread messages</span>
  </span>
            <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
            <a href={url} className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
