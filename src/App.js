import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Header,Footer} from "./components"
import {Home,Contact, Login, Register, Reset, Admin} from "./pages"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminOnlyRoute from "./components/adminOnlyRoute/AdminOnlyRoute";

const App = () => {
  return(
  <>
    <BrowserRouter>
    <ToastContainer/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/reset" element={<Reset/>}></Route>
        
        <Route path="/admin/*" element={<AdminOnlyRoute><Admin/></AdminOnlyRoute>}></Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  </>
  )
};

export default App;
