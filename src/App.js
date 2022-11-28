
import './App.scss';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Login from "./components/Login/Login";
// import Register from './components/Register/Register';
import RegisterUpdate from './components/registerupdate/RegisterUpdate';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';
import Profile from "./components/Profile/Profile"
import People from "./components/People/People"
import Tvshow from "./components/TvShow/Tvshow"
import ProtectedRoute from './components/ProtectedRout/ProtectedRoute';
import { Offline, Online } from "react-detect-offline";
import Movies from './components/Movies/Movies';
import About from './components/About/About';
import Details from './components/Details/Details';
import Network from './components/Networks/Network';

function App() {


  let routes = createBrowserRouter([
    {
      path: "/", element: <Layout />,errorElement: <NotFound/>,children: [
        // { index: true, element: <Register /> },
        { index: true, element: <ProtectedRoute ><Home/></ProtectedRoute>},
        { path: "movies", element:  <ProtectedRoute><Movies/> </ProtectedRoute> },
        { path: "about", element:  <ProtectedRoute><About/> </ProtectedRoute> },
        { path: "people", element:  <ProtectedRoute><People/> </ProtectedRoute> },
        { path: "tv", element:  <ProtectedRoute><Tvshow/> </ProtectedRoute> },
        { path: "profile", element:  <ProtectedRoute><Profile  /> </ProtectedRoute> },
        { path: "detail/:id/:media", element:  <ProtectedRoute><Details/> </ProtectedRoute> },
        { path: "login", element:  <Login /> },
        {path: "register", element: <RegisterUpdate /> },


  ]}
  
])

  return (
    <>




    <Online>

 

    <RouterProvider router={routes}/>


  
   

    </Online>
    <Offline>
      <div className="container">

       
         

          <Network/>
      

        
      
      </div>
      
     
    </Offline>

 

  
    </>
  );
}

export default App;
