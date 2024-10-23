import React from "react";
import Watchlist from "./watchlist";

function MovieCard({
  movieObj,
  poster_path,
  name1,
  handleAddtoWatchList,
  handleRemoveFromWatchlist,
  watchList,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id == movieObj.id) {
        return true;
      }
    }
      return false;
    
  }

  return (
    <div
      className="overflow-hidden h-[40vh] w-[150px] bg-center bg-cover rounded-xl hover:cursor-pointer flex flex-col hover:scale-110 duration-300 items-end "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemoveFromWatchlist(movieObj)}
          className="m-2 bg-gray-600/80 rounded-lg"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddtoWatchList(movieObj)}
          className="m-2 bg-gray-600/80 rounded-lg"
        >
          &#128525;
        </div>
      )}

      <div
        style={{ marginTop: 155 }}
        className="text-white  text-center flex justify-center w-full p-4 bg-gray-900/60 "
      >
        {name1}
      </div>
    </div>
  );
}

export default MovieCard;
