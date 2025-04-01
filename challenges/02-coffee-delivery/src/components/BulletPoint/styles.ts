import styled from "styled-components";
import { ThemeType } from "../../@types/styled";

type BulletPointContainerProps = {
  backgroundColor: keyof ThemeType;
};

export const BulletPointContainer = styled.div<BulletPointContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  > div {
    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;

    background: ${(props) => props.theme[props.backgroundColor]};
  }
  svg {
    color: ${(props) => props.theme["white"]};
  }

  span {
    color: ${(props) => props.theme["base-text"]};
  }
`;
