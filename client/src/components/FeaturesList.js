import React from "react";

const FeatureList = ({ features }) => {

    return (
        <section className='feature-grid'>

            {features &&
                features.map(feature => (
                    
                        <div key={feature._id} className='food'  >
                            console.log(feature._id);
                            <h5 className='feature-title ' >{feature.title}</h5>
                            <p className='feature-desc' >{feature.description}</p>
                            <p className='feature-title' >${feature.price}</p>
                        </div>
                    
                ))}
        </section>
    )
}

export default FeatureList;