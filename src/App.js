import logo from './logo.svg';
import './App.css';
import Landing from './Components/Landing/Landing';
import SignUpMerchant from './Components/Auth/AuthMerchant';
import SignUpShopper from './Components/Auth/AuthShopper';



function App() {
  return (
    <div className="App">
      <SignUpShopper />
    </div>
  );
}

export default App;
