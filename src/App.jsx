import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'

function App() {
  
    const [movies, setMovies] = useState({
      method: 'GET',
      url:'https://api.themoviedb.org/3/movie/top_rated?api_key=883a22cb6f6f17c77ce626a6dc3f554a'

    })

   
   useEffect(()=>{
      axios
        .request(movies)
        .then(res =>{ 
        setMovies(res.data.results)
        })
        .catch(err =>{
        console.error(err)
        })
    },[])

  return (
    <div>
      {
        movies.map(movie => {
        <div key={movie.id}>
        <h1>{movie.title}</h1>
        <p>{movie.release_date}</p>
        </div>})

        }
    
    </div>
  );
}

export default App;