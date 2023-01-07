import React from "react";
import locationIcon from "../assets/locationiconImage24px.svg";

const Card = (props) => {
  console.log(props.item);

  return (
    <article className="card">
      <img src={props.item.imageUrl} />
      <div className="card--info">
        <div className="card--location">
          <img src={locationIcon} />
          <p className="card--country">{props.item.location}</p>
          <a className="card--link" href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1 className="card--title">{props.item.title}</h1>
        <p className="card--date">{props.item.startDate} - {props.item.endDate}</p>
        <p className="card--description">{props.item.description}</p>
      </div>
    </article>
  )
}

export default Card;