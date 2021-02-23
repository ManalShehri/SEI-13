import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AllMovies from "./components/Allmovies";
import Home from "./components/Home";
import About from "./components/About";
import ShowOneMovie from "./components/ShowOneMovie";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AuthRoute from "./components/AuthRoute";
import UserProfile from "./components/UserProfile";
import axios from "axios";

function App() {
  console.log(process.env.REACT_APP_API_KEY)
  const [selectMovie, setSelectMovie] = useState({});
  const [dataLoading, setDataloading] = useState(false)
  const [auth, setAuth] = useState({ currentUser: null, isLoggedIn: false });

  const userLogin = () => {



    axios.get("http://localhost:5000/test" , {headers : {token : "Mohammed"}}).then(res => console.log(res))









    if (localStorage.jwtToken) {
      

      const jwtToken = localStorage.jwtToken;
      const currentUser = jwt_decode(jwtToken, "SECRET").user;
      // to make sure the have the movies or not 
      if (!localStorage[currentUser._id]) localStorage.setItem(currentUser._id ,JSON.stringify(currentUser.favoriteMovies))
      setAuth({ currentUser, isLoggedIn: true });
      console.log( JSON.parse(localStorage[currentUser._id]))
    } else {
      setAuth({ currentUser: null, isLoggedIn: false });
    }

    setDataloading(true)
    console.log("The current User is: ", auth.currentUser);
  };

  useEffect(userLogin, []);

  return (
    <div className="">
      { dataLoading &&
        <Router>
          <NavBar isLoggedIn={auth.isLoggedIn} loginCallback={userLogin} />

          <Route path="/profile">
            <AuthRoute 
              setAuth = {setAuth}
            auth={auth} />
          </Route>
          {/* userId = {auth.currentUser._id} */}
          <Route path="/movies/:id">
            <ShowOneMovie  
            setAuth = {setAuth}
            user = {auth.currentUser}
             selectMovie={selectMovie} />
          </Route>

          <Route exact path="/movies">
            <AllMovies setSelectMovie={setSelectMovie} />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/login">
            <Login loginCallback={userLogin} />
          </Route>

          <Route path="/signup">
            <Signup loginCallback={userLogin} />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Footer />
        </Router>
      }
    </div>
  );
}

export default App;
