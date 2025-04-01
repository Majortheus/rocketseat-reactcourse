import styled from "styled-components";

export const HomeContainer = styled.div``;

export const HeroBanner = styled.div`
  background: url("src/assets/HeroBannerBackground.svg") no-repeat;
  background-size: cover;
  background-position: center;
  background-color: white;
`;

export const HeroBannerContainer = styled.div`
  max-width: 74rem;
  width: 100%;
  margin: 0rem auto;
  padding: 5.75rem 0;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3.5rem;
`;

export const HeroContent = styled.div`
  max-width: 36.75rem;
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`;

export const HeroContentText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 3rem;
    font-weight: bolder;
    color: ${(props) => props.theme["base-title"]};
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const BulletPointContainer = styled.div`
  display: grid;
  grid-template-columns: 231px 1fr;
  column-gap: 2.5rem;
  row-gap: 1.25rem;
`;

export const CoffeeMenuContainer = styled.div`
  max-width: 74rem;
  width: 100%;
  margin: 0rem auto;
  padding: 2rem 0;

  > h2 {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    font-weight: bolder;

    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const CoffeeMenuList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;

  margin-top: 3.375rem;
`;
