import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Booking from './Pages/Booking/Booking';
import DestinationDetails from './Pages/DestinationDetails/DestinationDetails';
import Error from './Pages/Error/Error';
import About from './Pages/Home/About/About';
import Destination from './Pages/Home/Destination/Destination';
import Destinations from './Pages/Home/Destinations/Destinations';
import Home from './Pages/Home/Home/Home';
import Review from './Pages/Home/Reviews/Review';
import Login from './Pages/Login/Login';
import AddDestination from './Pages/Private/AddDestination/AddDestination';
import ManageTrips from './Pages/Private/ManageTrips/ManageTrips';
import MyTrips from './Pages/Private/MyTrips/MyTrips';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Signin from './Pages/Signin/Signin';

function App() {
  return (
    <div className="App">
      <AuthProvider>

      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/destinations">
            <Destinations></Destinations>
          </Route>
          <Route path="/destination">
            <Destination></Destination>
            </Route>
          <Route path="/review">
            <Review></Review>
            </Route>
          <Route path="/about">
            <About></About>
            </Route>
          
          <Route path="/booking/:id">
            <Booking></Booking>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signin">
            <Signin></Signin>
          </Route>
          <Route path="/destinationDetails/:id">
              <DestinationDetails></DestinationDetails>
          </Route>
          <PrivateRoute path="/adddestination">
            <AddDestination></AddDestination>
          </PrivateRoute>
            <PrivateRoute path="/managetrips">
            <ManageTrips></ManageTrips>
            </PrivateRoute>
            <PrivateRoute path="/mytrips">
            <MyTrips></MyTrips>
            </PrivateRoute>
          <Route path="*">
            <Error></Error>
          </Route>
          </Switch>
          <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
