import './App.css';
import Landing from './Components/Landing/Landing';
import SignUpMerchant from './Components/Auth/AuthMerchant';
import SignUpShopper from './Components/Auth/AuthShopper';
import { Switch, Route } from 'react-router-dom';
import Storefront from './Components/Storefront/Storefront';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Cart from './Components/Cart/Cart';
import Items from './Components/Items/Items';
import Shop from './Components/Shop/Shop';
import EditShop from './Components/EditShop/Editor/EditShop';
import EditPage from './Components/EditShop/EditPage/EditPage';
import Preview from './Components/EditShop/Preview/Preview';
import Venmo from './Components/Venmo/Venmo';
import AuthLogIn from './Components/Auth/AuthLogIn';

function App() {
  return (
    <div className="App">
      
      <Switch>
      
        <Route path="/Storefront/:id">
          <Navbar />
          <Shop />
        </Route>

        <Route path="/Venmo">
          <Navbar />
          <Venmo />
        </Route>

        <Route path="/Landing/">
          <Landing />
        </Route>
        
        <Route path="/AuthMerchant/">
          <SignUpMerchant />
        </Route>

        <Route path="/Landing/">
          <Landing />
        </Route>
        
        <Route path="/AuthShopper/">
          <SignUpShopper />
        </Route>

        <Route path="/Storefront/">
          <Navbar />
          <Storefront />
        </Route>

        <Route path="/Cart/">
          <Navbar />
          <Cart />
        </Route>

        <Route path="/About/">
          <Navbar />
          <About />
        </Route>

        <Route path="/Items/:id">
          <Navbar />
          <Items />
        </Route>

        <Route path="/Editor/:id">
          <Navbar />
          <EditPage />
        </Route>

        <Route path="/AuthLogIn">
          <AuthLogIn />
        </Route>

        <Route path="*">
          <Landing />
        </Route>

        <Route exact path="/">
          <Landing />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
