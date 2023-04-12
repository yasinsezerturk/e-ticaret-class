import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Header,Footer} from "./components"
import {Home,Contact, Login, Register, Reset} from "./pages"

const App = () => {
  return(
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/reset" element={<Reset/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
  )
};

export default App;
