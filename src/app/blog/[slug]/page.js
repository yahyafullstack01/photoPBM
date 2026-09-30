"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Script from "next/script";
import Layout from "../../components/Layout";
import BlogArticle from "../../components/Blog/BlogArticle";
import { getBlogPost, blogArticleJsonLd } from "../../data/blogPosts";
import { useLanguage } from "../../Functions/useLanguage";

export default function BlogPostPage({ params }) {
  const resolvedParams = use(params);
  const { language } = useLanguage();
  const post = getBlogPost(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const jsonLd = blogArticleJsonLd(post, language);

  return (
    <div className="transition-colors">
      <Script
        id="blog-article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Layout>
        <BlogArticle post={post} />
      </Layout>
    </div>
  );
}
