import styled from "styled-components";

export const LayoutContainer = styled.div`
  height: calc(100vh - 10rem);

  display: flex;
  flex-direction: column;

  header {
    max-width: 74rem;
    width: 100%;
    margin: 0rem auto;
    padding: 2rem 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > a {
      display: flex;
    }

    > nav {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      div {
        background: ${(props) => props.theme["purple-light"]};
        padding: 0.5rem;

        display: flex;
        align-items: center;
        gap: 0.25rem;

        border-radius: 6px;

        svg {
          color: ${(props) => props.theme["purple"]};
        }

        span {
          color: ${(props) => props.theme["purple-dark"]};
          font-size: 0.875rem;
        }
      }

      a {
        position: relative;
        padding: 0.5rem;

        display: flex;
        align-items: center;

        background: ${(props) => props.theme["yellow-light"]};
        color: ${(props) => props.theme["yellow-dark"]};

        border-radius: 6px;

        transition: all 0.1s;

        &:hover {
          background: ${(props) => props.theme["yellow-dark"]};
          color: ${(props) => props.theme["yellow-light"]};
        }

        span {
          position: absolute;
          top: -0.5rem;
          right: -0.5rem;

          width: 1.33rem;
          height: 1.33rem;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 2px solid ${(props) => props.theme.white};
          border-radius: 100%;
          transition: all 0.1s;

          background: ${(props) => props.theme["yellow-dark"]};
          color: ${(props) => props.theme["white"]};

          font-size: 0.75rem;
          font-weight: bold;
          line-height: 1;
        }
      }
    }
  }
`;
