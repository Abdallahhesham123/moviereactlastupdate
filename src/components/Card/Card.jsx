import React from 'react'
import styled from "./Card.module.scss"
import img from"./../../Assets/images/notfoundImage.jpg" 
import { Link } from 'react-router-dom';
function Card({cardInfo}) {

    const Image_url = "https://image.tmdb.org/t/p/w500";


  return (


<div className={`${styled.card}`} >
                        <div className={`${styled.face} ${styled.face1}`}>
                            
                            <div className="content">
                                <h2>{cardInfo.name}</h2>
                                    <div className={`${styled.title} row jusstify-content-around`}>
                                    

                                            <h6 style={{"fontSize":"16px","color":"#0075ff"}}>{cardInfo.original_title ? `${cardInfo.original_title.split(" ").splice(0, 3).join(" ") }` : `${cardInfo.name}`}</h6>

                                       
                                        
                                            {
              cardInfo.vote_average ?  
               <span className={(cardInfo.vote_average.toFixed(1) >= 8)  ? `${styled.green}`: 
               (cardInfo.vote_average.toFixed(1) >= 7) ?`${styled.orange}`: (cardInfo.vote_average.toFixed(1) >= 5) ?`${styled.red}`:`${styled.empty}`}>
                {cardInfo.vote_average?.toFixed(1)}</span>: 
                <span className={(cardInfo.known_for[0].vote_average.toFixed(1) >= 8) ? `${styled.green}`
                : (cardInfo.known_for[0].vote_average.toFixed(1) >= 7) ?`${styled.orange}`:
                 (cardInfo.known_for[0].vote_average.toFixed(1) >= 5) ?`${styled.red}`:
                 `${styled.empty}`}>{cardInfo.known_for[0].vote_average?.toFixed(1)}</span>

                                            }


                                                     
                                     
                                    </div>
         
                                <Link  to={`/detail/${cardInfo.id}/${cardInfo.media_type}`}>READ MORE</Link>    
                            </div>
                        </div>
                        <div className={`${styled.face} ${styled.face2}`}>
                       {cardInfo.poster_path ?  <img src= {
                          cardInfo.poster_path 
                            ? Image_url + cardInfo.poster_path 
                            : `${img}`
                        } alt="" /> : <img src= {
                          cardInfo.profile_path
                             ?  Image_url + cardInfo.profile_path
                             : `${img}`
                         } alt="" />} 
                                                
                        </div>
                    </div>










   

  )
}

export default Card