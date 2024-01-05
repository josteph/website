import Head from 'next/head';
// import { Giscus } from '@giscus/react';
import styles from '@/styles/blog.page.module.scss';
import Balancer from 'react-wrap-balancer';
import { allBlogs, Blog } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Layout } from '@/components/Layout';

export async function getStaticPaths() {
  const paths: string[] = allBlogs.map((blog) => blog.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  return {
    props: {
      blog,
    },
  };
}

export default function BlogLayout({ blog }: { blog: Blog }) {
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
              '@id': `https://joshuastephen.com${blog.url}`,
              name: blog.title,
            },
          },
        ],
      },
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url: `https://joshuastephen.com${blog.url}`,
        alternateName: 'Joshua Stephen',
        name: blog.title,
        headline: blog.title,
        description: blog.description,
        author: {
          '@type': 'Person',
          name: 'Joshua Stephen',
        },
        publisher: {
          '@type': 'Organization',
          url: 'https://joshuastephen.com',
          logo: 'icons/apple-icon.png',
          name: 'Joshua Stephen',
        },
        mainEntityOfPage: {
          '@type': 'WebSite',
          '@id': 'https://joshuastephen.com',
        },
      },
    ],
  };

  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta content={blog.description} name="description" />
        <meta property="og:site_name" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:url" content={`https://joshuastephen.com${blog.url}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.description} />
        <meta name="twitter:label1" content="Published on" />
        <meta name="twitter:data1" content={blog.published} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }} />
      </Head>

      <Layout className="main-container">
        <article className={styles.articleContainer}>
          <h1>
            <Balancer>{blog.title}</Balancer>
          </h1>
          <MDXContent />
        </article>
        {/* <Giscus
          emitMetadata="0"
          reactionsEnabled="1"
          mapping="pathname"
          repo="josteph/website"
          repoId="MDEwOlJlcG9zaXRvcnkyMTQ2MjIzOTM"
          category="General"
          categoryId="DIC_kwDODMrguc4B_d1Q"
          theme="preferred_color_scheme"
        /> */}
      </Layout>
    </>
  );
}
