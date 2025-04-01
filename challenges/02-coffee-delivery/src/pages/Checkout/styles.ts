import styled from "styled-components";
import { ThemeType } from "../../@types/styled";

export const CheckoutContainer = styled.form`
  max-width: 74rem;
  width: 100%;
  margin: 0rem auto;
  padding: 2.5rem 0;

  display: grid;
  grid-template-columns: 1fr 28rem;
  gap: 2rem;
`;

export const CardTitle = styled.h3`
  color: ${(props) => props.theme["base-subtitle"]};

  font-family: "Baloo 2", sans-serif;
  font-size: 1.125rem;
  font-weight: bold;
`;

export const PaymentContainer = styled.div``;

export const AddressCard = styled.div`
  margin-top: 1rem;
  padding: 2.5rem;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 0.375rem;
`;

export const PaymentCard = styled.div`
  margin-top: 0.75rem;
  padding: 2.5rem;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 0.375rem;

  > p {
    margin-top: 0.5rem;
    color: ${(props) => props.theme["danger"]};
    font-size: 0.875rem;
  }
`;

export const CartContainer = styled.div``;

export const CartCard = styled.div`
  margin-top: 1rem;
  padding: 2.5rem;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 0.375rem 2.75rem 0.375rem 2.75rem;
`;

type CardInfoProps = {
  iconColor: keyof ThemeType;
};

export const CardInfo = styled.div<CardInfoProps>`
  display: flex;
  gap: 0.5rem;

  > svg {
    color: ${(props) => props.theme[props.iconColor]};
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    > p:first-child {
      color: ${(props) => props.theme["base-subtitle"]};
    }

    > p:last-child {
      font-size: 0.875rem;
    }
  }
`;

export const AddressForm = styled.div`
  margin-top: 2rem;

  display: grid;
  column-gap: 0.75rem;
  row-gap: 1rem;

  grid-template-columns: 12.5rem 1fr 3.75rem;
  grid-template-areas:
    "cep 0 0"
    "rua rua rua"
    "numero complemento complemento"
    "bairro cidade uf";
`;

export const PaymentForm = styled.div`
  margin-top: 2rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 0.75rem;
`;

type PaymentTypeButtonProps = {
  active?: boolean;
};

export const PaymentTypeButton = styled.button<PaymentTypeButtonProps>`
  height: 3.1875rem;
  padding: 1rem;

  display: flex;
  gap: 0.75rem;
  align-items: center;

  border: 1px solid ${(props) => (props.active ? props.theme["purple"] : props.theme["base-button"])};
  background: ${(props) => props.theme["base-button"]};
  border-radius: 0.375rem;

  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }

  &.active {
    background: ${(props) => props.theme["purple"]};
  }

  > svg {
    color: ${(props) => props.theme["purple"]};
    line-height: 1.6;
  }

  > span {
    font-size: 0.75rem;
    line-height: 1;
    text-transform: uppercase;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const CartList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CheckoutDetails = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  > button {
    padding: 0.75rem;

    border: none;
    background: ${(props) => props.theme["yellow"]};
    border-radius: 0.375rem;

    color: ${(props) => props.theme["white"]};
    font-size: 0.875rem;
    font-weight: bold;
    line-height: 1.6;
    text-transform: uppercase;

    cursor: pointer;
    transition: all 0.1s;

    &:hover {
      background: ${(props) => props.theme["yellow-dark"]};
    }
  }
`;

export const CheckoutDetailsItem = styled.div`
  margin-bottom: 0.75rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 0.875rem;
`;

export const CheckoutDetailsTotal = styled.div`
  margin-bottom: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.25rem;
  font-weight: bold;
`;
