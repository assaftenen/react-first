import React from "react";
import { ShowCard } from "./showCard";
import preload from "../data.json";

export const Search = () => (
  <div className="search">
    <div>
      {preload.shows.map(show => (
        <ShowCard
          key={show.imdbID}
          description={show.description}
          title={show.title}
          poster={show.poster}
          year={show.year}
        />
      ))}
    </div>

  </div>
);

export default Search;
