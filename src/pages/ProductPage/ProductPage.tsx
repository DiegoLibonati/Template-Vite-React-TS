import { useParams } from "react-router-dom";

import Link from "@/components/Link/Link";
import Action from "@/components/Action/Action";

import "@/pages/ProductPage/ProductPage.css";

const ProductPage = () => {
  const { productId } = useParams();

  const alertProductId = (idProduct: string): void => {
    alert(`Product ID: ${idProduct}`);
  };

  return (
    <main className="product-page">
      <h1 className="title">Product Page: {productId ?? "unknown"}</h1>

      <div className="links">
        <Link id="link-not-exists" ariaLabel="link-not-exists" href="/pasdasdasdasd" target="_self">
          Go to Not Exists Page
        </Link>
      </div>

      <div className="actions">
        <Action
          id="action-product-id"
          ariaLabel="action-product-id"
          onClick={() => alertProductId(productId!)}
        >
          Click Product Id
        </Action>
      </div>
    </main>
  );
};

export default ProductPage;
