import React from 'react';

export default function NotFoundPage() {
  return (
    <main className="main-container">
      <div>
        <h1>
          <span className="main-gradient">Oh no!</span>
          <br />
          It seems this page went extinct 🤭
        </h1>

        <a href="/" className="ani-link">
          Let&lsquo;s go back!
        </a>
      </div>
    </main>
  );
}
