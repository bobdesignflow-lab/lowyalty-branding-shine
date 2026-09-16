import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Product } from "./catalog";

export type CartItem = { product: Product; quantity: number };
type CartContextValue = {
  items: CartItem[];
  count: number;
  total: number;
  addItem: (product: Product, quantity?: number) => void;
  updateItem: (slug: string, quantity: number) => void;
  removeItem: (slug: string) => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  useEffect(() => {
    const stored = window.localStorage.getItem("lowyalty-cart");
    if (!stored) return;
    try { setItems(JSON.parse(stored) as CartItem[]); } catch { window.localStorage.removeItem("lowyalty-cart"); }
  }, []);
  useEffect(() => { window.localStorage.setItem("lowyalty-cart", JSON.stringify(items)); }, [items]);

  const value = useMemo(() => ({
    items,
    count: items.reduce((sum, item) => sum + item.quantity, 0),
    total: items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    addItem: (product: Product, quantity = 1) => setItems((current) => {
      const found = current.find((item) => item.product.slug === product.slug);
      return found ? current.map((item) => item.product.slug === product.slug ? { ...item, quantity: item.quantity + quantity } : item) : [...current, { product, quantity }];
    }),
    updateItem: (slug: string, quantity: number) => setItems((current) => current.map((item) => item.product.slug === slug ? { ...item, quantity } : item).filter((item) => item.quantity > 0)),
    removeItem: (slug: string) => setItems((current) => current.filter((item) => item.product.slug !== slug)),
  }), [items]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}