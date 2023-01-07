import React from "react";

const Card = () => {
  return (
    <article className="card">
      <img src="https://source.unsplash.com/WLxQvbMyfas" />
      <div className="card--info">
        <div className="card--location">
          <img src="../public/locationiconImage24px.svg" />
          <p className="card--country">Japan</p>
          <a className="card--link" href="">View on Google Maps</a>
        </div>
        <h1 className="card--title">Mount Fuji</h1>
        <p className="card--date">12 Jan, 2021 - 24 Jan, 2021</p>
        <p className="card--description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
      </div>
    </article>
  )
}

export default Card;