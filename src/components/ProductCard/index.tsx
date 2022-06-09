import { MdAddShoppingCart } from "react-icons/md";

import { useCart } from "../../hooks/useCart";

import { ProductFormatted } from "../../types";
import { Container } from "./styles";

interface CartItemsAmount {
  [key: number]: number;
}

interface ProductCardProps {
  product: ProductFormatted;
}

export function ProductCard({ product }: ProductCardProps) {
  const { cart, addProduct } = useCart();

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    const newSumAmount = { ...sumAmount };
    newSumAmount[product.id] = product.amount;
    return newSumAmount;
  }, {} as CartItemsAmount);

  function handleAddProduct(id: number) {
    addProduct(id);
  }

  return (
    <Container>
      <img src={product.image} alt={product.title} />
      <strong>{product.title}</strong>
      <span>{product.priceFormatted}</span>
      <button
        type="button"
        data-testid="add-product-button"
        onClick={() => handleAddProduct(product.id)}
      >
        <div data-testid="cart-product-quantity">
          <MdAddShoppingCart size={16} color="#FFF" />
          {cartItemsAmount[product.id] || 0}
        </div>

        <span>ADICIONAR AO CARRINHO</span>
      </button>
    </Container>
  );
}
