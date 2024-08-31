import { Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";

export default function App() {
  return (
    <>
    <Routes>
      <Route index element={<Landing />} />
    </Routes>
    </>
  );
}