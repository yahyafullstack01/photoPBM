"use client";

import { Suspense } from "react";
import Script from "next/script";
import Layout from "../components/Layout";
import GalleryInfo from "../components/GalleryInfo/GalleryInfo";
import products from "../data/products";
import galleryJsonLd from "../seo/gallery-jsonld";

export default function GalleryPage() {
  const gallery = products.filter((p) => p.isTop);
  const jsonLd = galleryJsonLd(gallery);

  return (
    <div className="transition-colors">
      <Script
        id="gallery-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Layout>
        <Suspense fallback={<div className="p-8 text-center">Loading gallery...</div>}>
          <GalleryInfo />
        </Suspense>
      </Layout>
    </div>
  );
}
