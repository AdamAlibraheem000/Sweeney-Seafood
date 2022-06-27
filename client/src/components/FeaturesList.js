import React from "react";
import spinner from '../../src/imgs/spinner.gif'

const FeatureList = ({ features }) => {

    return (
        <section className='feature-grid'>
       {!features.length ? (
       <img src={spinner} alt="loading"/>
       ) : (
    features.map((article, key) => (
        <div >
        <h2 className="feature-title">{article.title}</h2>
        <p className="feature-desc">{article.article}</p>
        <p className="feature-desc">
            {article.authorname}
        </p>
        </div>
    )))}  
        </section>
    )
}

export default FeatureList;