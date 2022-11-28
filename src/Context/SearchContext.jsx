import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import { createContext } from 'react'
export let SearchContext=createContext(0)


const SearchContextProvider = (props) => {
    const [movieName, setmovieName] = useState("")
    const [search,setsearch] = useState([])
  let SearchField =async(movieName1)=>{
  
    const API_key = "api_key=c9a1298150cd4eec6156dbe3922018f2";
    const Base_URL = "https://api.themoviedb.org/3";
    const API_URL = Base_URL + `/search/movie?` + API_key +`&query=${movieName1}`;
    let { data } = await axios.get(API_URL);
  
    setsearch(data.results);
  };
  
  let clearData =()=>{
  
    setsearch([]);
    setmovieName("")
  
  }
  
  useEffect(()=>{
  
    SearchField(movieName);
  
    
  
  },[movieName])
  
  
  
  
  return <SearchContext.Provider value={{search,clearData,setmovieName,movieName}}>

{props.children}
  </SearchContext.Provider>
}

export default SearchContextProvider