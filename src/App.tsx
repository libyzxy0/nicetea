import {
  Routes,
  Route
} from "react-router-dom";
import Landing from "@/pages/Landing";
import About from "@/pages/About";
import Products from "@/pages/Products";
import Contact from "@/pages/Contact";

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}