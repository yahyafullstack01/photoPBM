"use client";

import Script from "next/script";
import Layout from "../components/Layout";
import Conditions from "../components/Conditions/Conditions";
import generateConditionsJsonLd from "../seo/conditions-jsonld";

export default function ConditionPage() {
  const jsonLd = generateConditionsJsonLd();

  return (
    <div className="transition-colors">
      <Script
        id="condition-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Layout>
        <Conditions />
      </Layout>
    </div>
  );
}
