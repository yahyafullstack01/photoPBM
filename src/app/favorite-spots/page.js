"use client";

import { Suspense } from "react";
import Script from "next/script";
import Layout from "../components/Layout";
import GalleryLocations from "../components/GalleryLocations/GalleryLocations";
import generateGalleryLocationsJsonLd from "../seo/gallery-locations-jsonld";
import products from "../data/products";

export default function FavoriteSpotsPage() {
  const jsonLd = generateGalleryLocationsJsonLd(products);

  return (
    <div className="transition-colors">
      <Script
        id="gallery-locations-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Layout>
        <Suspense fallback={<div className="p-8 text-center">Loading locations...</div>}>
          <GalleryLocations />
        </Suspense>
      </Layout>
    </div>
  );
}
