import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";

export default function App() {
  const theme = useSelector((state) => state.theme.mode);

  // Local state: UI-only things that no other part of the app needs to share.
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  // Apply the theme to the <html> element so CSS variables switch.
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <>
      <Header
        onOpenCart={() => setCartOpen(true)}
        onlyFavorites={onlyFavorites}
        onToggleFavorites={() => setOnlyFavorites((v) => !v)}
      />
      <main className="page">
        <section className="intro">
          <h1>Good books, close at hand.</h1>
          <p>Browse the shelves, save the ones you love, and fill your cart.</p>
        </section>
        <Toolbar />
        <BookList onlyFavorites={onlyFavorites} onSelect={setSelectedBook} />
      </main>
      <Footer />
      {selectedBook && <BookDetails book={selectedBook} onClose={() => setSelectedBook(null)} />}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
