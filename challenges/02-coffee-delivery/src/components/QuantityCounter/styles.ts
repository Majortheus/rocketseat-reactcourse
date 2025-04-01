import styled from "styled-components";

export const QuantityCounterContainer = styled.div`
  height: 2.375rem;
  padding: 0.25rem 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  border-radius: 0.375rem;
  background: ${(props) => props.theme["base-button"]};

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    border: none;
    color: ${(props) => props.theme["purple"]};

    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }

  > span {
    padding: 0.25rem;
    color: ${(props) => props.theme["base-title"]};

    user-select: none;
  }
`;
