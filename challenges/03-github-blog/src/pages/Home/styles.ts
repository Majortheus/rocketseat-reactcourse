import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: calc(864px + 2rem);
  margin: calc(90 / 16 * -1rem) auto calc(48 / 16 * 1rem);
  padding: 0 1rem;
`;

export const UserCard = styled.section`
  padding: 2rem 2.5rem;

  display: flex;
  gap: calc(32 / 16 * 1rem);
  background-color: ${(props) => props.theme["base-profile"]};
  border-radius: calc(10 / 16 * 1rem);
  box-shadow: 0 2px calc(28 / 16 * 1rem) rgba(0, 0, 0, 0.2);

  img {
    width: calc(148 / 16 * 1rem);
    height: calc(148 / 16 * 1rem);

    border-radius: calc(8 / 16 * 1rem);
  }
`;

export const UserCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: calc(8 / 16 * 1rem) 0;
`;

export const UserCardTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const UserCardName = styled.h1`
  color: ${(props) => props.theme["base-title"]};
  font-size: calc(24 / 16 * 1rem);
  line-height: 1.3;
  font-weight: bold;
`;

export const UserCardGithub = styled.a`
  display: flex;
  align-items: center;
  gap: calc(8 / 16 * 1rem);

  border-bottom: 1px solid transparent;

  color: ${(props) => props.theme["blue"]};
  font-size: calc(12 / 16 * 1rem);
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme["blue"]};
  }
`;

export const UserCardDescription = styled.div`
  margin-top: calc(8 / 16 * 1rem);
`;

export const UserCardSocials = styled.div`
  margin-top: calc(24 / 16 * 1rem);

  display: flex;
  align-items: center;
  gap: calc(24 / 16 * 1rem);
`;

export const UserCardSocial = styled.div`
  display: flex;
  align-items: center;
  gap: calc(8 / 16 * 1rem);

  color: ${(props) => props.theme["base-subtitle"]};
  line-height: 1;

  > svg {
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const SearchContainer = styled.form`
  margin-top: calc(70 / 16 * 1rem);

  display: flex;
  flex-direction: column;
  gap: calc(12 / 16 * 1rem);

  > input {
    padding: calc(12 / 16 * 1rem) calc(16 / 16 * 1rem);

    background: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-border"]};
    border-radius: calc(6 / 16 * 1rem);
  }
`;

export const SearchTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchTitle = styled.h3`
  color: ${(props) => props.theme["base-subtitle"]};
  font-size: calc(18 / 16 * 1rem);
  font-weight: bold;
`;

export const SearchCount = styled.span`
  color: ${(props) => props.theme["base-span"]};
  font-size: calc(14 / 16 * 1rem);
`;

export const PostsContainer = styled.div`
  margin-top: calc(48 / 16 * 1rem);

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: calc(32 / 16 * 1rem);
`;

export const PostCard = styled(NavLink)`
  padding: calc(30 / 16 * 1rem) calc(32 / 16 * 1rem);

  background-color: ${(props) => props.theme["base-post"]};
  border: 2px solid ${(props) => props.theme["base-post"]};
  border-radius: calc(10 / 16 * 1rem);

  text-decoration: none;
  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme["base-label"]};
  }
`;
export const PostHeader = styled.h2`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PostTitle = styled.div`
  color: ${(props) => props.theme["base-title"]};
  font-size: calc(20 / 16 * 1rem);
  font-weight: bold;
  flex: 1;
`;

export const PostDate = styled.time`
  color: ${(props) => props.theme["base-span"]};
  font-size: calc(14 / 16 * 1rem);
  line-height: calc(20px * 1.6);
`;

export const PostDescription = styled.div`
  margin-top: calc(20 / 16 * 1rem);

  color: ${(props) => props.theme["base-text"]};
`;
