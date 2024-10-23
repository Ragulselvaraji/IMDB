import React, { useEffect, useState } from "react";
import genresid from "../Utility/Genreid";

const Watchlist = ({ watchlist, setWatchList, handleRemoveFromWatchlist }) => {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSortIncreasing = () => {
    const sortedIncreasing = [...watchlist].sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList(sortedIncreasing);
  };

  const handleSortDecreasing = () => {
    const sortedDecreasing = [...watchlist].sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList(sortedDecreasing);
  };

  const handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  useEffect(() => {
    const temp = [...new Set(watchlist.map((movieObj) => genresid[movieObj.genre_ids[0]]))];
    setGenreList(["All Genres", ...temp]);
  }, [watchlist]);

  const filteredWatchlist = watchlist
    .filter((movieObj) => movieObj.title.toLowerCase().includes(search.toLowerCase()))
    .filter((movieObj) => currGenre === "All Genres" || genresid[movieObj.genre_ids[0]] === currGenre);

  return (
    <>
      <div className="flex justify-center m-4 ">
        {genreList.map((genre) => (
          <div
            key={genre} // Use genre as the key
            onClick={() => handleFilter(genre)} // Pass a reference to the function
            className={`h-[2rem] w-[8rem] rounded-xl items-center text-center mx-4 hover:cursor-pointer ${currGenre === genre ? "bg-blue-500 text-white" : "bg-gray-400 text-white"}`} // Highlight the selected genre
          >
            {genre}
          </div>
        ))}
      </div>

      <div className="text-center">
        <input
          onChange={handleSearch}
          value={search}
          className="bg-gray-300 px-2 m-4"
          type="text"
          placeholder="Search Movies"
        />
      </div>

      <div className="overflow-hidden border rounded-xl border-gray-500 m-6">
        <table className="w-full text-center text-gray-500 ">
          <thead className="border-b-2">
            <tr className="text-black">
              <th>Name</th>
              <th className="flex justify-center">
                <div onClick={handleSortIncreasing} className="p-2 hover:cursor-pointer">
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <div className="p-2">Ratings</div>
                <div onClick={handleSortDecreasing} className="p-2 hover:cursor-pointer">
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {filteredWatchlist.map((movieObj) => (
              <tr key={movieObj.id} className="border-b-2">
                <td className="flex items-center px-6 py-4">
                  <img
                    className="h-[4rem] w-[5rem]"
                    src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                    alt={movieObj.title}
                  />
                  <div className="mx-4">{movieObj.title}</div>
                </td>
                <td>{movieObj.vote_average}</td>
                <td>{movieObj.popularity}</td>
                <td>{genresid[movieObj.genre_ids[0]]}</td>
                <td onClick={()=>{handleRemoveFromWatchlist(movieObj)}} className="text-red-800 hover:cursor-pointer">
                Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Watchlist;
