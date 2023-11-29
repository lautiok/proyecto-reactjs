import { ItemDetailContainer, ItemListContainer, NavBar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./components/Cart/Card";
import { Footer } from "./components/Footer/Footer";
import MyProducts from "./components/MyProducts/MyProducts";

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/myproducts" element={<MyProducts />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
};