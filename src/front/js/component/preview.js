import React from 'react'

export default function Preview(props) {
  return (
    <div
            className="card mx-3 text-center col-1"
            style={{ width: "20rem", height: "25rem" }}
          >
            <h5 className="text-light px-5 my-3">{props.title}</h5>
            <img
              className="card-img-top"
              height="250px"
              src={props.img}
              alt="Card image cap"
            />
            <div className="card-body">
              <a href={props.link} className="btn btn-light">
                {props.btn}
              </a>
            </div>
          </div>
  )
}
