import React from "react";

export const ShowCard = props => (
  <div className="show-card">
    <img
      alt={`${props.show.title} Show Poster`}
      src={`/public/img/posters/${props.show.poster}`}
    />
    <div>
      <h3>{props.show.title}</h3>
      <h4>({props.show.yesr})</h4>
      <h4>{props.show.description}</h4>
    </div>
  </div>
);
