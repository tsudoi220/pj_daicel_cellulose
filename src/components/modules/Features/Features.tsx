import React from "react";
import type { ComponentProp } from "~/components/@types/Component";
import { Heading } from "~/components/parts/Heading";
import { Text } from "~/components/parts/Text";
import "./Features.scss";
import { FeaturesList } from "~/components/parts/FeaturesList";

type FeaturesProps = ComponentProp;

const Features = ({
  classNames,
}: FeaturesProps): JSX.Element | null => {
  return (
    <section className={"features" + (classNames ? ` ${classNames}` : "")} >
      <div className="features_head">
        <Heading as="h2" classNames="features_heading _features">セルロースの主な性質</Heading>
        <Text classNames="features_text _center">植物由来の成分であるセルロースには、さまざまな性質があります。</Text>
      </div>
      <FeaturesList classNames="features_list" />
    </section>
  );
};


export { Features };
