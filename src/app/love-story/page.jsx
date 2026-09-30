"use client";

import { Suspense } from "react";
import Script from "next/script";
import Layout from "../components/Layout";
import LoveGallery from "../components/LoveStoryInffo/LoveStoryInffo";
import loveJsonLd from "../seo/love-jsonld";
import products from "../data/products";

export default function LoveStoryPage() {
  const jsonLd = loveJsonLd(products);

  return (
    <div className="transition-colors">
      <Script
        id="love-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Layout>
        <Suspense fallback={<div className="p-8 text-center">Loading love story...</div>}>
          <LoveGallery />
        </Suspense>
      </Layout>
    </div>
  );
}
