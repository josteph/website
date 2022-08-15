import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { GitHub, Twitter, Linkedin } from 'react-feather';
import { APP_NAME, APP_DESCRIPTION } from '@/constants/index';
import { getAllDocs } from '@/lib/docs';
import styles from '@/styles/home.page.module.scss';

const websiteLd = {
  '@context': 'http://schema.org',
  '@type': 'WebSite',
  url: 'https://josteph.github.io/',
};

export async function getStaticProps() {
  const docs = getAllDocs();

  return {
    props: {
      docs: docs.sort((a, b) => b.meta.published_timestamp - a.meta.published_timestamp),
    },
  };
}

export default function Home({ docs }: { docs: any[] }) {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <meta property="og:site_name" content="jostephhh" />
        <meta property="og:url" content="https://josteph.github.io" />
        <meta property="og:title" content={APP_NAME} />
        <meta property="og:description" content={APP_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
      </Head>
      <main>
        <section className="main-container">
          <div className={styles.styMainInfo}>
            <h3>
              Hi, I am <span className="main-gradient">Joshua</span>
            </h3>
            <br />
            <h4>
              a <span className="main-gradient">Software Engineer</span>
            </h4>
            <p>
              Pleased to meet you! 👋
              <br />
              I mainly deal with Javascript and stuff related with web development.
              <br />
              Although currently I&apos;m more into{' '}
              <a href="https://electronjs.org" target="_blank" rel="noopener noreferrer">
                Electron
              </a>{' '}
              and Web3.0 (Blockchain) stuff.
              <br />
              <br />I was a senior Web Platform Engineer at{' '}
              <a href="https://www.tokopedia.com" target="_blank" rel="noopener noreferrer">
                Tokopedia
              </a>
              <br />
              But now working remotely at{' '}
              <a href="https://tryprospect.com" target="_blank" rel="noopener noreferrer">
                tryprospect.com
              </a>
              .
              <br />
              <br />
              Feel free to reach me anytime to have a nice chat together 🍻
            </p>
          </div>
          <div className={`${styles.styMainInfo} ${styles.styContactInfo}`}>
            <h4 className="main-gradient">Get In Touch !</h4>
            <div>
              <p>
                The universe is really a big place.
                <br />
                You can find me on:
              </p>
              <ul>
                <li>
                  <a
                    data-splitbee-event="Social Media Clicked"
                    data-splitbee-event-type="linkedin"
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://www.linkedin.com/in/josteph22/"
                  >
                    <Linkedin /> @josteph22
                  </a>
                </li>
                <li>
                  <a
                    data-splitbee-event="Social Media Clicked"
                    data-splitbee-event-type="github"
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://github.com/josteph"
                  >
                    <GitHub /> @josteph
                  </a>
                </li>
                <li>
                  <a
                    data-splitbee-event="Social Media Clicked"
                    data-splitbee-event-type="twitter"
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://twitter.com/jostephhh"
                  >
                    <Twitter /> @jostephhh
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <hr />

        <section className={styles.styBlogInfo}>
          <h2>Blog</h2>

          {docs.map((doc) => (
            <div className={styles.styBlogDisplay} key={doc.slug}>
              <h3>
                <Link href={`/blog/${doc.slug}`}>
                  <a className="ani-link color-normal">{doc.meta.title}</a>
                </Link>
              </h3>
              <p className="font-sm">{doc.meta.published}</p>
              <p>{doc.meta.description}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
