import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"

import Navebar from "./components/Navebar";
import Searchbar from './components/Searchbar';
import Products from './components/Products';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<div>
  <Navebar></Navebar><Searchbar></Searchbar><Products></Products><Aboutus></Aboutus><Contactus></Contactus>
</div>)


