import Link from "@/components/Link/Link";

import "@/pages/AboutPage/AboutPage.css";

const AboutPage = () => {
  return (
    <main className="about-page">
      <h1 className="title">About Page</h1>

      <nav aria-label="Page navigation">
        <ul className="links">
          <li>
            <Link
              id="link-product"
              ariaLabel="Go to Product Page 12"
              href="/products/12"
              target="_self"
            >
              Go to Product Page: 12
            </Link>
          </li>
          <li>
            <Link id="link-context" ariaLabel="Go to Context Page" href="/context" target="_self">
              Go to Context Page
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default AboutPage;
