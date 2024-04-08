import { BrowserRouter, Routes, Route } from "react-router-dom";

import home from "./pages/home";
import about from "./pages/about";
import profile from "./pages/profile";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/about" element={<about />} />
        <Route path="/profile" element={<profile />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signout" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

