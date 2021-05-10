import React from 'react';
import Head from 'next/head';
import { getAllDocs, getDocBySlug } from '@lib/docs';
import markdownToHtml from '@lib/markdown';
import styles from '@styles/blog.page.module.scss';

export async function getStaticProps({ params }: any) {
  const doc = getDocBySlug(params.slug);
  const content = await markdownToHtml(doc.content || '');

  return {
    props: {
      ...doc,
      content,
    },
  };
}

export async function getStaticPaths() {
  const docs = getAllDocs();

  return {
    paths: docs.map((doc) => {
      return {
        params: {
          slug: doc.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default function BlogLayout({ meta, content }: { meta: any; content: string }) {
  const blogLd = {
    '@context': 'http://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': `https://josteph.github.io/blog/${meta.slug}`,
              name: meta.title,
            },
          },
        ],
      },
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url: `https://josteph.github.io/blog/${meta.slug}`,
        alternateName: 'Joshua Stephen',
        name: meta.title,
        headline: meta.title,
        description: meta.description,
        author: {
          '@type': 'Person',
          name: 'Joshua Stephen',
        },
        publisher: {
          '@type': 'Organization',
          url: 'https://josteph.github.io',
          logo: 'icons/apple-icon.png',
          name: 'Joshua Stephen',
        },
        mainEntityOfPage: {
          '@type': 'WebSite',
          '@id': 'https://josteph.github.io',
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:label1" content="Published on" />
        <meta name="twitter:data1" content={meta.published} />
        <link rel="preload" href="https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css" as="script" />
        <link href="https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }} />
      </Head>

      <main className="main-container">
        <article className={styles.articleContainer} dangerouslySetInnerHTML={{ __html: content }} />
      </main>
    </>
  );
}
