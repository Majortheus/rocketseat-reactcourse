import { Minus, Plus } from "phosphor-react";
import { QuantityCounterContainer } from "./styles";

type QuantityCounterProps = {
  quantity: number;
  setQuantity: (quantity: number) => void;
};

export function QuantityCounter({ quantity, setQuantity }: QuantityCounterProps) {
  const handleMinus = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  };

  const handlePlus = () => {
    if (quantity >= 9) return;
    setQuantity(quantity + 1);
  };

  return (
    <QuantityCounterContainer>
      <button type="button">
        <Minus size={14} weight="bold" onClick={handleMinus} />
      </button>
      <span>{quantity}</span>
      <button type="button">
        <Plus size={14} weight="bold" onClick={handlePlus} />
      </button>
    </QuantityCounterContainer>
  );
}
