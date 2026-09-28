import {BrowserRouter, Route, Routes} from 'react-router'
import {useState} from 'react'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import ProtectedRoute from './components/ProtectedRoute'
import ProductItemDetails from './components/ProductItemDetails'
import NotFound from './components/NotFound'
import CartContext from './context/CartContext'

import './App.css'

const App = () => {
  const [cartList, setCartList] = useState([
    {
      title: 'Product 1',
      brand: 'Brand Name',
      id: 1001,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/sample-product-img.jpg',
      price: 760,
      quantity: 5,
    },
    {
      title: 'Product 2',
      brand: 'Brand Name',
      id: 1002,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/sample-product-img.jpg',
      price: 760,
      quantity: 2,
    },
  ])
  const addCartItem = product => {
    setCartList(prev => [...prev, product])
  }
  const deleteCartItem = () => {}
  return (
    <BrowserRouter>
      <CartContext
        value={{
          cartList,
          addCartItem,
          deleteCartItem,
        }}
      >
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products/:id"
            element={
              <ProtectedRoute>
                <ProductItemDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartContext>
    </BrowserRouter>
  )
}

export default App
