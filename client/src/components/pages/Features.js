import React, {useState, useEffect} from "react";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in/lib/FadeIn";
import FeatureList from "../FeaturesList";
import axios from 'axios';




export default function Features() {

  const [articles, setArticles] = useState([]);

  useEffect(()=> {
    axios.get('/articles')
    .then(res => setArticles(res.data))
    .catch(error => console.log(error));
  })

  
  return (
    <section className="margin-large margin-mobile background-beige">
      <Helmet>
        <title>Sweeney’s - Features</title>
      </Helmet>
      <FadeIn>
        <FeatureList articles={articles} />
      </FadeIn>
    </section>
  );
}
