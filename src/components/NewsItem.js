import React from 'react'

export function NewsItem(props){
    let {title, description, imageUrl, newsUrl, author, date, source} = props; // to get the props sent to this component
    return (
      <div className='my-3'>
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex: 1, left:'25%'}}>
            Source : {source}
          </span>
          <img src={imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">By {author} on {date}</small></p>
              <a className="btn btn-sm btn-primary" href={newsUrl} target='_blank' rel='noreferrer'>Read more</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem;
