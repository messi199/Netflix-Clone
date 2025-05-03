import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
const Player = () => {

  const {id} = useParams();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTkyOTk2OGI2NmI4Y2QxMTllNDUxOWRkYzQzODFhZCIsIm5iZiI6MTc0NjIwODIzMi40MjEsInN1YiI6IjY4MTUwNWU4Y2RhMzk4NzNiMjAzMGM4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kFpU93ktAI_gz0UkIj-Pu0eiDe-1-nXuNcrEhKwckvQ'
    }
  };
  
  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/1197306/videos?language=en-US', options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" />
      <iframe width='90%' height='90%'
         src={`https://www.youtube.com/embed/${apiData.key}`}
         title='trailer'
         frameBorder='0' allowFullScreen></iframe>
         <div className="player-info">
          <p>{apiData.published_at.slice(0,10)}</p>
          <p>{apiData.name}</p>
          <p>{apiData.type}</p>
         </div>
    </div>
  )
}

export default Player
