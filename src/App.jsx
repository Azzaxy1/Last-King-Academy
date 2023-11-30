import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@/views/Home";
import Error from "@/views/Error";
import { Login, Register } from "@/views/Auth";
import Courses from "./views/Courses";
import Otp from "./views/Auth/pages/otp";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="courses">
          <Route index element={<Courses />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="otp" element={<Otp />} />
        <Route path="*" element={<Error />} />

      </Routes>
        <Toaster position="top-left"/>
    </BrowserRouter>
  );
}
 