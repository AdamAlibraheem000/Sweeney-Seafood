import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/pages/Footer"
import './App.css';
import favicon from './imgs/favicon.ico';
import {Helmet} from 'react-helmet';

const App = () => 
<>
<Helmet>
<link
      href="https://fonts.googleapis.com/css2?family=Lato&family=Montserrat:ital,wght@0,400;0,600;1,400&display=swap"
      rel="stylesheet"/>
    <link rel="icon" type="image/x-icon" href={favicon} />
</Helmet>
<body>
<PortfolioContainer />
<Footer/>
</body>

</>

export default App;
