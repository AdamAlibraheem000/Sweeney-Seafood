import React from "react";

const FeatureList = ({ features }) => {

    return (
        <section className='feature-grid'>

            {features &&
                features.map(feature => (
                    <div>
                        <div className='feature-flex food'>
                            <h5 className='feature-title '>{feature.title}</h5>
                            <p className='feature-desc'>{feature.description}</p>
                            <p className='feature-title'>${feature.price}</p>
                        </div>
                    </div>
                ))}
        </section>
    )
}

export default FeatureList;