import styled from "styled-components";

export const Card = styled.div`
  max-width: 16rem;
  padding: 0 1.25rem 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 0.375rem 2rem 0.375rem 2rem;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -2rem;

    user-select: none;
  }

  h3 {
    margin-top: 1rem;

    font-family: "Baloo 2", sans-serif;
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    margin-top: 0.5rem;

    text-align: center;
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  margin-top: 0.75rem;
`;

export const Tag = styled.div`
  padding: 0.25rem 0.5rem;

  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  border-radius: 100px;

  font-size: 0.625rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export const PriceContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  align-items: center;

  > button {
    margin-left: 0.5rem;
    padding: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    background: ${(props) => props.theme["purple-dark"]};
    color: ${(props) => props.theme["white"]};
    border-radius: 0.375rem;

    cursor: pointer;
    transition: all 0.1s;

    &:hover {
      background: ${(props) => props.theme["purple"]};
    }
  }
`;

export const Price = styled.div`
  margin-right: 1.5rem;

  span:first-child {
    font-size: 0.875rem;
  }
`;

export const PriceNumber = styled.span`
  font-family: "Baloo 2", sans-serif;
  font-size: 1.5rem;
  font-weight: bolder;
`;
