import React from 'react';
import { Link } from "react-router-dom";

export default function Card(props) {
  let img = './projects/project-img/' + props.item.image;
  return (
    <div className="card-row col-md-6 col-lg-3">
      <div className="card-col column mb-3">
        <Link to={"/" + props.item.id}>
          <img className="card-img-container"
               src={require(`${img}`)}
               alt={props.item.name}
               style={{
                 width: 'auto',
                 height: '100%',
               }}
          />
          <div className="card-slide">
            <h3 className="card-title">{ props.item.name } </h3>
          </div>
        </Link>
      </div>
    </div>
  )
}
