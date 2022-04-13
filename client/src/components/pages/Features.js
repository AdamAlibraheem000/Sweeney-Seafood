import React from "react";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in/lib/FadeIn";
import FeatureList from "../FeaturesList";

import { useQuery } from '@apollo/client';
import { QUERY_FEATURES } from '../../utils/queries';


export default function Features() {


  const { data } = useQuery(QUERY_FEATURES)
  const features = data?.features || [];


  return (
    <section className="margin-large margin-mobile background-beige">
      <Helmet>
        <title>Sweeney’s - Features</title>
      </Helmet>
      <FadeIn>
        <FeatureList features={features} />
      </FadeIn>
    </section>
  );
}
