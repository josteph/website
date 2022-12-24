import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <main className="main-container">
      <div>
        <h1>
          <span className="main-gradient">Oh no!</span>
          <br />
          It seems this page went extinct 🤭
        </h1>

        <Link href="/">
          <a className="ani-link">Let&lsquo;s go back!</a>
        </Link>
      </div>
    </main>
  );
}
