import { useState } from "react";

/* COMPONENTS */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar";

/* PAGES */
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Help from "./pages/Help";
import Contact from "./pages/Contact";

/* ─────────────────────────────────────────────
   APP ROOT
───────────────────────────────────────────── */
export default function App() {
  const [activePage, setActivePage] = useState("Home");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  /* NAVIGATION */
  const navigate = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ADD TO CART */
  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
    setCartOpen(true);
  };

  /* PAGE ROUTING (MANUAL) */
  const PAGES = {
    Home: (props) => <Home {...props} />,
    About: About,
    Menu: () => <Menu addToCart={addToCart} setActivePage={navigate} />,
    Services: (props) => <Services {...props} />,
    Portfolio: Portfolio,
    Help: Help,
    Contact: Contact,
  };

  const PageComponent = PAGES[activePage];

  return (
    <div className="min-h-screen bg-[#07111d] text-white">

      {/* NAVBAR */}
      <Navbar
        activePage={activePage}
        setActivePage={navigate}
        cartCount={cart.length}
        setCartOpen={setCartOpen}
      />

      {/* CART */}
      <CartSidebar
        cart={cart}
        setCart={setCart}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
      />

      {/* MAIN CONTENT */}
      <main>
        <PageComponent setActivePage={navigate} />
      </main>

      {/* FOOTER */}
      <Footer setActivePage={navigate} />
    </div>
  );
}