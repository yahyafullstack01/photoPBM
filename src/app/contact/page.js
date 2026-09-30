import { Suspense } from "react";
import Layout from "../components/Layout";
import ContactUs from "../components/Contact_US/Contact_us";
import Script from "next/script";
import contactJsonLd from "../seo/contact-jsonld";

export const dynamic = "force-dynamic";

export default function ContactPage() {
  return (
    <div className="transition-colors">
      <Script
        id="contact-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Layout>
        <Suspense fallback={<div>Loading contact form...</div>}>
          <ContactUs />
        </Suspense>
      </Layout>
    </div>
  );
}
