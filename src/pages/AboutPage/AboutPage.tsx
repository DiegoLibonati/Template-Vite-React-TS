import Link from "@/components/Link/Link";

import "@/pages/AboutPage/AboutPage.css";

const AboutPage = () => {
  return (
    <main className="about-page">
      <h1 className="title">About Page</h1>

      <div className="links">
        <Link id="link-product" ariaLabel="link-product" href="/products/12" target="_self">
          Go to Product Page: 12
        </Link>
        <Link id="link-context" ariaLabel="link-context" href="/context" target="_self">
          Go to Context Page
        </Link>
      </div>
    </main>
  );
};

export default AboutPage;
