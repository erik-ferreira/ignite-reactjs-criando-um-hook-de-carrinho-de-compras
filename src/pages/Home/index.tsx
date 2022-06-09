import { useState, useEffect } from "react";

import { api } from "../../services/api";

import { ProductCard } from "../../components/ProductCard";

import { ProductFormatted } from "../../types";

import { formatPrice } from "../../util/format";
import { ProductList } from "./styles";

const Home = (): JSX.Element => {
  const [products, setProducts] = useState<ProductFormatted[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<ProductFormatted[]>("/products");

      const listProducts = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setProducts(listProducts);
    }

    loadProducts();
  }, []);

  return (
    <ProductList>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </ProductList>
  );
};

export default Home;
