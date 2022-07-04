import React from "react";
import spinner from '../../src/imgs/spinner.gif'

const FeatureList = ({ articles }) => {

    return (
        <section className='feature-grid'>
            <div className="feature-title">
                <h1 >Dinner Features</h1>
            </div>
            <div>
       {!articles.length ? (
       <img src={spinner} alt="loading"/>
       ) : (
        articles.map((article, key) => (
        <div className="feature-food-div" key={key}>
        <h1 className="feature-food-title" >{article.title}</h1>
        <p className="feature-food-desc" >{article.article}</p>
        <p className="feature-food-desc">
            ${article.authorname}
        </p>
        </div>
    )))}  
    </div>
        </section>
    )
}

export default FeatureList;