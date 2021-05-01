import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddMyDay from "./components/AddMyDay/AddMyDay";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home"
import About from "./components/About/About"
import FindMyDay from "./components/FindMyDay/FindMyDay";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";

import { createContext, useState } from "react";
import Footer from "./components/Home/Footer/Footer";
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
   <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
           <Home/>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
           <Route path="/about">
            <About />
          </Route>
          <PrivateRoute path="/find-my-day">
            <FindMyDay/>
          </PrivateRoute>
          <PrivateRoute path="/add-my-day">
            <AddMyDay/>
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
