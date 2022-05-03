import HomePage from './Pages/HomePage';
import './App.css';
import ProductPage from './Pages/ProductPage';
import DetailProductPage from './Pages/DetailProductPage';
import LoginPage from './Pages/LoginPage';
import Cart from './Pages/Cart';

import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import React from 'react';

function App() {

  // const [data, setData] = React.useState(null);
  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <BrowserRouter>

      <div className="App">
        {/* <p>{!data ? "Loading..." : data}</p> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product-detail" element={<DetailProductPage />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/cart" exact element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter >

  );
}

export default App;
