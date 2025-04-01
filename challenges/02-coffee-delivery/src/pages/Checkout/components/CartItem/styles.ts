import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  padding: 0.5rem 0.25rem;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  display: flex;
  flex: 1;
  gap: 1.25rem;

  border-bottom: 1px solid ${(props) => props.theme["base-button"]};

  > img {
    width: 4rem;
    height: 4rem;
  }
`;

export const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  gap: 0.5rem;
`;

export const CartItemDescription = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > p {
    font-weight: bold;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const RemoveButton = styled.button`
  padding: 0 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  background: ${(props) => props.theme["base-button"]};
  border: none;
  border-radius: 0.375rem;

  font-size: 0.75rem;
  line-height: 1.6;
  text-transform: uppercase;

  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }

  > svg {
    color: ${(props) => props.theme["purple"]};
  }
`;
