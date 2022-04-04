
import './App.css';
import Flipcard from './component/Flipcard';
import Footer from './component/Footer';
import Func from './component/Func';
import {
  BrowserRouter,
  Routes,
  Route, Navigate
} from "react-router-dom";
import Productcard from './component/Productcard';
import Navbar from "./component/Navbar"
import Productlist from './component/Productlist';
function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>

          <Route path='/' exact element={<Productcard />} >

          </Route>
          <Route path='/tr/:id' exact element={<Productlist />} >

          </Route>
          <Route path='/productlist/:id' exact element={<Productlist />}>

          </Route>
        </Routes>

      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;