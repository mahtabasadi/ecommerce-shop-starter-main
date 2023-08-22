import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// product Provider
import ProductProveder from "./contexts/ProductContext";
// sidebar provide 
import SidebarProvider from "./contexts/SidebarContext";
// cart proveder 
import CartProvider from "./contexts/CartContext"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <SidebarProvider>
  <CartProvider>
   <ProductProveder>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProductProveder>
  </CartProvider>
 </SidebarProvider>
);
