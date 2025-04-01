import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { Coffee } from "../../@types/coffee";
import { useCheckout } from "../../hooks/UseCheckout";
import { QuantityCounter } from "../QuantityCounter";
import { Card, Price, PriceContainer, PriceNumber, Tag, TagsContainer } from "./styles";

type CoffeeCardProps = {
  coffee: Coffee;
};

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { addToCart } = useCheckout();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ coffee, quantity });
  };

  return (
    <Card>
      <img src={coffee.image} />
      <TagsContainer>
        {coffee.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsContainer>
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>
      <PriceContainer>
        <Price>
          <span>R$ </span>
          <PriceNumber>
            {new Intl.NumberFormat("pt-BR", { style: "decimal", minimumFractionDigits: 2 }).format(coffee.price)}
          </PriceNumber>
        </Price>
        <QuantityCounter quantity={quantity} setQuantity={setQuantity} />
        <button onClick={handleAddToCart}>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </PriceContainer>
    </Card>
  );
}
