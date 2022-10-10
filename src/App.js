/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-lone-blocks */
import { Route , Routes , Navigate } from 'react-router-dom';
import './App.css';

//      COMPONENTS       //
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbar from "./components/shared/Navbar";          // Navbar ra khareg az route minevisim ke dar har safheyee biayad
import ShopCart from './components/ShopCart';

//       CONTEXT       //
 import ProductContextProvider from './context/ProductContextProvider';
 import CartContextProvider  from './context/CartContextProvider';

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/products/:id" element={<ProductDetails /> } />
          <Route path="/products" element={<Store />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;




//            react-router-dom v5         //

// import { Route , Switch , Redirect } from 'react-router-dom'; v5
// {<Switch>
//    <Route path="/products/:id" component={ProductDetails}/>
//   <Route path="/products" component={Store}/>
//   <Route path="/cart" component={ShopCart}/>  
//   <Redirect to="/products"/>
//</Switch> }