import './App.css';
import Landing from './Components/Landing/Landing';
import SignUpMerchant from './Components/Auth/AuthMerchant';
import SignUpShopper from './Components/Auth/AuthShopper';
import { Switch, Route } from 'react-router-dom';
import Storefront from './Components/Storefront/Storefront';
// import Navbar from './Components/Navbar/Navbar';
import Items from './Components/Items/Items';


function App() {
  return (
    <div className="App">

      
      <Switch>
        
        <Route path="/Landing/">
          <Landing />
        </Route>
        
        <Route path="/AuthMerchant/">
          <SignUpMerchant />
        </Route>

        <Route path="/AuthShopper/">
          <SignUpShopper />
        </Route>

        <Route path="/Storefront/">
          <Navbar />
          <Storefront />
        </Route>

        <Route path="/Items/">
          <Items />
        </Route>

        <Route exact path="/">
          <Landing />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
