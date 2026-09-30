"use client";

import { Suspense, use, useEffect, useState } from "react";
import Script from "next/script";
import Layout from "../../components/Layout";
import GalleryLocations from "../../components/GalleryLocations/GalleryLocations";
import generateGalleryLocationsJsonLd from "../../seo/gallery-locations-jsonld";
import locationData from "../../data/location";
import { locationToSlug } from "../../utils/slugs";

const findLocationBySlug = (slug) => {
  return locationData.find((loc) => locationToSlug(loc.location) === slug);
};

function LocationContent({ locationSlug }) {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    setLocation(findLocationBySlug(locationSlug));
  }, [locationSlug]);

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  const jsonLd = generateGalleryLocationsJsonLd([
    {
      id: location.id,
      slug: locationSlug,
      title: location.translations?.EN?.name || location.location,
      description: `Professional photography at ${location.location}, Barcelona`,
      image: location.banner || location.images?.[0] || "/Logo.webp",
      location: location.location,
    },
  ]);

  return (
    <>
      <Script
        id="location-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GalleryLocations locationSlug={locationSlug} />
    </>
  );
}

export default function LocationPage({ params }) {
  const resolvedParams = use(params);
  const { location: locationSlug } = resolvedParams;

  return (
    <div className="transition-colors">
      <Layout>
        <Suspense fallback={<div className="p-8 text-center">Loading location...</div>}>
          <LocationContent locationSlug={locationSlug} />
        </Suspense>
      </Layout>
    </div>
  );
}
