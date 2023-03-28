import Link from 'next/link';
import Head from 'next/head';
import { GitHub, Twitter, Linkedin } from 'react-feather';
import { APP_NAME, APP_DESCRIPTION } from '@/constants/index';
import { allBlogs, Blog } from 'contentlayer/generated';
import styles from '@/styles/home.page.module.scss';

const websiteLd = {
  '@context': 'http://schema.org',
  '@type': 'WebSite',
  url: 'https://joshuastephen.com/',
};

export async function getStaticProps() {
  return {
    props: {
      blogs: allBlogs.sort((a, b) => Number(b.published_timestamp) - Number(a.published_timestamp)),
    },
  };
}

export default function Home({ blogs }: { blogs: Blog[] }) {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <meta property="og:site_name" content="jostephhh" />
        <meta property="og:url" content="https://joshuastephen.com" />
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
              and Chrome Extension development.
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

          {blogs.map((blog) => (
            <div className={styles.styBlogDisplay} key={blog.url}>
              <h3>
                <Link href={blog.url} className="ani-link color-normal">
                  {blog.title}
                </Link>
              </h3>
              <p className="font-sm">{blog.published}</p>
              <p>{blog.description}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
