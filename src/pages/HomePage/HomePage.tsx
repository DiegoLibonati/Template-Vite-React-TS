import Link from "@/components/Link/Link";

import "@/pages/HomePage/HomePage.css";

const HomePage = () => {
  return (
    <main className="home-page">
      <h1 className="title">Home Page</h1>

      <div className="links">
        <Link id="link-about" ariaLabel="link-about" href="/about" target="_self">
          Go to About Page
        </Link>
        <Link id="link-about-2" ariaLabel="link-about-2" href="/about">
          Go to About Page in Another Window
        </Link>
        <Link id="link-users" ariaLabel="link-users-2" href="/users" target="_self">
          Go to Users Page
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
