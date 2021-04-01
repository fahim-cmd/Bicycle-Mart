import './App.css';
import Admin from './components/Admin/Admin';
import Orders from './components/Orders/Orders';
import Home from './components/Home/Home';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import OrderPage from './components/OrderPage/OrderPage';

export const ProductContext = createContext();
export const UserContext = createContext();

function App() {
  const [product, setProduct] = useState([])
  const [loggedInUser, setLoggedInUser] = useState({})
  
// console.log(product)
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <ProductContext.Provider value={[product, setProduct]}>
      <Router>       

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <PrivateRoute path="/bicycle/:id">
            <CheckoutPage></CheckoutPage>
          </PrivateRoute>
          <Route path="/orderPage">
            <OrderPage />
          </Route>
        </Switch>

      </Router>
    </ProductContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
