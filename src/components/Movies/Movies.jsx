import React, { useContext } from 'react'
import { MediaContext } from '../../Context/MediaContextStore'
import {Helmet} from "react-helmet";
import Card from "../Card/Card";



const Movies = () => {
    const {TrendingMovies} = useContext(MediaContext)
  return (
   <>
         <div className="container py-5">
         <Helmet>
                <meta charSet="utf-8" />
                <title>Movies Page</title>
                
            </Helmet>
        <div className="row justify-content-between flex-wrap py-5" >
        <div className="col-md-4">
          <div className="cap">
            <hr className="w-25" />
            <h2>Trending </h2>
            <h5>Movies</h5>
            <h6>to Watch Now</h6>
            <p className="text-muted">Lorem ipsum, dolor sit amet consectetur</p>
            <hr />
          </div>
        </div>

       
          {TrendingMovies.filter((el)=>el.poster_path).slice(0,10).map((ele, index) => (
             <div className="col-md-2" key={index} >
            <Card cardInfo={ele} />
            </div>
          ))}
        

        </div>

      </div>
   
   </>
  )
}

export default Movies