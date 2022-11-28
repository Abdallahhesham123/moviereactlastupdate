import React, { useContext,  useEffect,  useState } from "react";
import styled from "./navbar.module.scss";
import { Link, NavLink } from "react-router-dom";
import img from "../../Assets/images/logo-dark.webp";
import { AuthContext } from "../../Context/Store";
import axios from "axios";
import { SearchContext } from "../../Context/SearchContext";
function Navbar() {


const {Userdata,LogOut} = useContext(AuthContext)
const {search,clearData,setmovieName,movieName} = useContext(SearchContext)
  const navBarStyles = ({ isActive }) => {
    return {
      color: isActive ? "#fff" : "#22254b",
      background: isActive ? "#22254b" : "transparent",
      borderRadius: isActive ? "5px" : "",
      border: isActive ? "1px solid #fff" : "",
      padding: isActive ? "5px" : "",
    };
  };

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 3,
        width: 200,
      }}
    />
  );

  const [NAVBAR, setNAVBAR] = useState(false);

  const ChangeBackGround = () => {
    if (window.scrollY >= 80) {
      setNAVBAR(true);
    } else {
      setNAVBAR(false);
    }
  };
  window.addEventListener("scroll", ChangeBackGround);
//   const [movieName, setmovieName] = useState("")
//   const [search,setsearch] = useState([])
// let SearchField =async(movieName1)=>{

//   const API_key = "api_key=c9a1298150cd4eec6156dbe3922018f2";
//   const Base_URL = "https://api.themoviedb.org/3";
//   const API_URL = Base_URL + `/search/movie?` + API_key +`&query=${movieName1}`;
//   let { data } = await axios.get(API_URL);

//   setsearch(data.results);
// };

// let clearData =()=>{

//   setsearch([]);
//   setmovieName("")

// }

// useEffect(()=>{

//   SearchField(movieName);

  

// },[movieName])





  return (
    <div>
      <nav
        className={
          NAVBAR
            ? `${styled.active} navbar navbar-expand-lg fixed-top`
            : `${styled.navbar_bg} navbar navbar-expand-lg fixed-top`
        }
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={img} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {Userdata && (
              <>
              
              <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to=""
                        style={navBarStyles}
                      >
                        HOME
                  </NavLink>
                </li>
                <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/movies"
                        style={navBarStyles}
                      >
                        MOVIES
                      </NavLink>
              </li>

              <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/about"
                        style={navBarStyles}
                      >
                        ABOUT
                      </NavLink>
              </li>
              <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/people"
                        style={navBarStyles}
                      >
                        PEOPLE
                      </NavLink>
              </li>
              <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/tv"
                        style={navBarStyles}
                      >
                        TV
                      </NavLink>
              </li>
              
              </>

               
              )}
            </ul>

            {Userdata && (
            <>
            
            <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e)=>setmovieName(e.target.value)}
                  value={movieName}
              
                />
                <div className={`${styled.search_list}`}>

                  {search ?
                  
                 search.map((ele ,index)=>{

                  const Image_url = "https://image.tmdb.org/t/p/w500";
                    return(
                      <Link to={`/detail/${ele.id}/movie`} key={index} onClick={clearData}>
                      
                            <div className={`${styled.search_list_item}`} >

                            <div className={`${styled.img_container}`}>
                            <img src= {
                            ele.poster_path 
                            ? Image_url + ele.poster_path 
                            : `${img}`
                            } alt="" />
                            </div>
                            <div className={`${styled.search_item_info}`}>

                            <h3>{ele.title}</h3>
                            <p>{ele.release_date}</p>
                            </div>

                            </div>


                      </Link>

                    )

                 })
                  

                  
                  :<>
                  <div className="container">

                    <div className="row justify-content-center align-items-center vh-100">
                <h1>nodata</h1>
                    </div>
                  </div>
                  
                  </>}


                </div>
            
            
            
            </>


            )}
            {Userdata && (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className={`${styled.none} nav-link active`}
                    aria-current="page"
                    to=" "

                  >
                    {" "}
                    <i className="fab fa-facebook-f"></i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`${styled.none} nav-link active`}
                    aria-current="page"
                    to=" "
                  >
                    {" "}
                    <i className="fab fa-twitter"></i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`${styled.none} nav-link active`}
                    aria-current="page"
                    to=" "
                  >
                    <i className="fab fa-instagram"></i>
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to=" "
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-user"></i>
                    <span className="mx-2 text-warning">Hello: {Userdata.first_name}</span>
                  </NavLink>

                  <ul className="dropdown-menu">
                    <li>
                      <NavLink
                        className="dropdown-item px-2"
                        to="profile"
                        style={navBarStyles}
                      >
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <ColoredLine color="white" />
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        onClick={LogOut}
                        to=" "
                        style={navBarStyles}
                      >
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            )}

            {!Userdata && (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
               
                      <NavLink
                        className="dropdown-item mx-3"
                        to="register"
                        style={navBarStyles}
                      >
                        Register
                      </NavLink>
                   
                   
                      <NavLink
                        className="dropdown-item"
                        to="login"
                        style={navBarStyles}
                      >
                        Login
                      </NavLink>
                    

              
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
