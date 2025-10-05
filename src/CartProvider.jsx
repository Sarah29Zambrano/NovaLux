import React from "react";

// Creamos el Context
const CartContext = React.createContext(undefined);

// Provider
export const CartProvider = ({ children }) => {
  const [carrito, setCarritoState] = React.useState([]);

  // Para reemplazar todo el objeto
  const setCarrito = (nuevoCarrito) => {
    setCarritoState(nuevoCarrito);
  };

  return (
    <CartContext.Provider value={{ carrito, setCarrito }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook para usar el Context
export const useCarrito = () => {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error("useCarrito debe usarse dentro de un CarritoProvider");
  }
  return context;
};
