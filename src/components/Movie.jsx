import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios"
import Pagination from "./Pagination";



const Movie = ({handleAddtoWatchList , handleRemoveFromWatchlist, watchlist}) => {
  
  const[movie,setMovie]=useState([]);
  const[pageNo,setpageNo]=useState(1);
 
  const handlePrev = ()=>{
    if(pageNo==1){
      setpageNo(pageNo);
    }
    else{
      setpageNo(pageNo-1);
    }
  }
  const handleNext = ()=>{
    setpageNo(pageNo+1);
  }

   useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=ef70b545eda8256f6bad5d701f484dfc&language=en-US&page=${pageNo}`).then(function(res){
      setMovie(res.data.results)
    },[pageNo])
    
   })


  return (
    <div className="p-5">
      <div className="text-xl font-bold text-center p-4 ">
        Trending Movies
      </div>

      <div className="flex flex-row flex-wrap justify-around gap-8">
      
        {movie.map((movieObj)=>{
          return<MovieCard movieObj={movieObj} key={movieObj.id} poster_path={movieObj.poster_path} name1={movieObj.original_title} handleAddtoWatchList={handleAddtoWatchList} handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchList={watchlist} />
      })}

      </div>

      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
    </div>
  );
};

export default Movie;

//https://api.themoviedb.org/3/movie/popular?api_key=ef70b545eda8256f6bad5d701f484dfc&language=en-US&page=1
