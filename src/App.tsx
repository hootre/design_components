import AppLayout from "./layouts/AppLayout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/components/:id" element={<Component />} /> */}
      </Route>
    </Routes>
  );
}
