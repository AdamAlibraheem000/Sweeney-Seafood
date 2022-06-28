import React, {useState, useEffect} from "react";
import axios from 'axios';
import spinner from '../../imgs/spinner.gif'

function Update() {

    const [features, setFeatures] = useState([]);

  useEffect(()=> {
    axios.get('/articles')
    .then(res => setFeatures(res.data))
    .catch(error => console.log(error));
  })


  return (
    <div className='update-grid'>
        <section >
       {!features.length ? (
       <img src={spinner} alt="loading"/>
       ) : (
    features.map((article, key) => (
        <div >
        <h2 >{article.title}</h2>
        <h2 >{article.article}</h2>
        <h2 >
            {article.authorname}
        </h2>
        </div>
    )))}  
        </section>
        <div>Column Two</div>
    </div>
  )
}

export default Update