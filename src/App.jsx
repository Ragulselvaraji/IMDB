import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./components/movie";
import Watchlist from "./components/watchlist";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";
function App() {

  let [watchlist, setWatchList] = useState([])

 let handleAddtoWatchList=(movieObj)=> {
    let newWatchList = [...watchlist, movieObj]
    localStorage.setItem('movies',JSON.stringify(newWatchList))
    setWatchList(newWatchList)
    console.log(newWatchList)
  }
  
  let handleRemoveFromWatchlist = (movieObj)=>{
    let filterWatchlist = watchlist.filter((movie)=>{
    return movie.id != movieObj.id
  })
    setWatchList(filterWatchlist)
    localStorage.setItem('movies',JSON.stringify(filterWatchlist))
    console.log(filterWatchlist)
  }
  useEffect((movieObj)=>{
    let moviesFromLocalStorage=localStorage.getItem('movies')
    if(!moviesFromLocalStorage){
      return
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))
  },[])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner /> <Movie handleAddtoWatchList={handleAddtoWatchList} handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchlist={watchlist}/>
              </>
            }
          ></Route>

          <Route path="/watchlist" element={<Watchlist watchlist={watchlist} setWatchList={setWatchList} handleRemoveFromWatchlist={handleRemoveFromWatchlist}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
