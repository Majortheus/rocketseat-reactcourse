import styled from "styled-components";

export const CheckoutSuccessContainer = styled.div`
  max-width: 74rem;
  width: 100%;
  margin: 0rem auto;
  padding: 5rem 0;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const BannerTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  > h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    font-weight: bolder;
    color: ${(props) => props.theme["yellow-dark"]};
  }

  > p {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6.375rem;
`;

export const DeliveryInfo = styled.div`
  width: 100%;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  border: 1px solid ${(props) => props.theme["purple"]};
  border-radius: 0.375rem 2rem 0.375rem 2rem;
`;
