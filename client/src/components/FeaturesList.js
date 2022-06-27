import React from "react";
import spinner from '../../src/imgs/spinner.gif'

const FeatureList = ({ features }) => {

    return (
        <section className='feature-grid'>
       {!features.length ? (
       <img src={spinner} alt="loading"/>
       ) : (
    features.map((article, key) => (
        <div className='container'>
        <h2>{article.title}</h2>
        <p>{article.article}</p>
        <p>
            {article.authorname}
        </p>
        </div>
    )))}  
        </section>
    )
}

export default FeatureList;