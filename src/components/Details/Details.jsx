import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  let paramDetail =  useParams();
  const Image_url = "https://image.tmdb.org/t/p/w500";
  const [Detail, setDetails] = useState({});

  let getTrendingItems = async () => {

    const API_key = "api_key=c9a1298150cd4eec6156dbe3922018f2";
    const Base_URL = "https://api.themoviedb.org/3";
    const API_URL = Base_URL + `/${paramDetail.media}/${paramDetail.id}?` + API_key;

    
let { data } = await axios.get(API_URL);
// callBack(data.results);
setDetails(data);
};

useEffect(() => {

    getTrendingItems();
}, []);

  return (
    <div className="container py-5">
        <div className="row py-5">
<div className="col-md-3">


{paramDetail.media === "person"?
    <img src={Image_url + Detail.profile_path} alt=""  className='w-100'/>:
    <img src={Image_url + Detail.poster_path} alt=""  className='w-100'/>
}
</div>
<div className="col-md-9">

{paramDetail.media === "person"?
   (
    <>
    
    
    <h2>{Detail.name}{Detail.title}</h2>
   <p className='text-muted my-2'>{Detail.biography?.split(" ").slice(0,50).join(" ")}</p>
   <p className=' my-2'>birthday: {Detail.birthday}</p>
   <p className=' my-2'>Place_Of_Birth: {Detail.place_of_birth}</p>
   <p className=' my-2'>popularity: {Detail.popularity?.toFixed(0)}</p>
   <p className=' my-2'>Gender:  {Detail.gender === 1 ? "female":"male"}</p>
  

    
    </>):(

    <>
    
    <h2>{Detail.title}{Detail.name}</h2>
    <p className='text-muted my-2'>{Detail.overview}</p> 
    <ul style={{"listStyle":"none","display":"flex"}}>
        {

Detail.genres?.map((ele)=> <li style=
{{
    "margin":"5px" ,
    "background":"#0075ff" ,
    "padding":"10px" ,
    "borderRadius":"5px"
    }}
>{ele.name}</li>

   
) }
  
      </ul>
      <p>vote : {Detail.vote_average?.toFixed(1)}</p>
      <p>vote_count : {Detail.vote_count?.toFixed(1)}</p>
      <p>popularity : {Detail.popularity?.toFixed(0)}</p>
      <p>release_date : {Detail.release_date}</p>
      <div>
       <span>production_companies:</span>
      {Detail.production_companies?.map((ele)=> <img src={Image_url + ele.logo_path} alt=""  className=' mx-2' style={{"width":"70px"}}/>)}
      </div>
    
    </>)
   
}


</div>
        
        </div>
    </div>
   
  )
}

export default Details