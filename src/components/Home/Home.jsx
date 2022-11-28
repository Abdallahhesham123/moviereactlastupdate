import React, { useEffect } from "react";

import Movies from "../Movies/Movies";
import People from "../People/People";
import Tvshow from "../TvShow/Tvshow";


function Home() {
//   useEffect(() => {
// document.title="Home"
//   }, [])
  

  return (
    <>


          <Movies/>
          <hr />

          <Tvshow/>
           <hr />
          <People/>


 
    </>
  );
}

export default Home;
