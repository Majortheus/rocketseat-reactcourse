import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const PostContainer = styled.div`
  max-width: calc(864px + 2rem);
  margin: calc(90 / 16 * -1rem) auto calc(48 / 16 * 1rem);
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
`;

export const UserCard = styled.div`
  padding: calc(32 / 16 * 1rem);

  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme["base-profile"]};
  border-radius: calc(10 / 16 * 1rem);
  box-shadow: 0 2px calc(28 / 16 * 1rem) rgba(0, 0, 0, 0.2);
`;

export const UserCardNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserCardBack = styled(NavLink)`
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

export const UserCardTitle = styled.h1`
  margin-top: calc(20 / 16 * 1rem);

  color: ${(props) => props.theme["base-title"]};
  font-size: calc(24 / 16 * 1rem);
  line-height: 1.3;
  font-weight: bold;
`;

export const UserCardSocials = styled.div`
  margin-top: calc(8 / 16 * 1rem);

  display: flex;
  align-items: center;
  gap: calc(24 / 16 * 1rem);
`;

export const UserCardSocial = styled.div`
  display: flex;
  align-items: center;
  gap: calc(8 / 16 * 1rem);

  color: ${(props) => props.theme["base-span"]};
  line-height: 1;

  > svg {
    color: ${(props) => props.theme["base-label"]};
  }
`;
export const PostContent = styled.div`
  padding: calc(40 / 16 * 1rem) calc(32 / 16 * 1rem);

  color: ${(props) => props.theme["base-text"]};

  > p {
    margin-bottom: calc(24 / 16 * 1rem);
    white-space: pre-line;

    > a {
      color: ${(props) => props.theme["blue"]};
    }
  }

  > pre {
    padding: calc(16 / 16 * 1rem);

    background-color: ${(props) => props.theme["base-post"]};
    border-radius: calc(2 / 16 * 1rem);
  }
`;
