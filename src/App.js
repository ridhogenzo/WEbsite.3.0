import React from "react";
import {
  Blog,
  Feature,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./container";
import { CTA, Brand, Navbar } from "./component";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
