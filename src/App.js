import './App.css';
import Landing from './Components/Landing/Landing';
import SignUpMerchant from './Components/Auth/AuthMerchant';
import SignUpShopper from './Components/Auth/AuthShopper';
import { Switch, Route } from 'react-router-dom';
import Storefront from './Components/Storefront/Storefront';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Items from './Components/Items/Items';
import Shop from './Components/Shop/Shop';
import EditShop from './Components/EditShop/Editor/EditShop';
import EditPage from './Components/EditShop/EditPage/EditPage';
import Preview from './Components/EditShop/Preview/Preview';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <div className="App">
      
      <Switch>
      
        <Route path="/Storefront/:id">
          <Navbar />
          <Shop />
        </Route>

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

        <Route path="/About/">
          <Navbar />
          <About />
        </Route>

        <Route path="/Items/:id">
          <Navbar />
          <Items />
        </Route>

        <Route path="/Editor">
          <Navbar />
          <EditShop />
          <EditPage />
          <Preview />
        </Route>

        <Route path="/Profile">
          <Navbar />
          <Profile />
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
