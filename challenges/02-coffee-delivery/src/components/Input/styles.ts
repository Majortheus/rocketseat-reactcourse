import styled from "styled-components";

type InputContainerProps = {
  name: string;
};

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: column;

  &[name="${(props) => props.name}"] {
    grid-area: ${(props) => props.name};
  }
`;

export const InputBase = styled.div`
  background: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 0.875rem;

  &:focus-within {
    outline: none;
    box-shadow: none;
    border: 1px solid ${(props) => props.theme["yellow-dark"]};
  }
`;

type InputTextFieldProps = {
  withError?: boolean;
};
export const InputTextField = styled.input<InputTextFieldProps>`
  width: 100%;
  padding: 0.75rem;

  background: transparent;
  border: none;

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
export const OptionalLabel = styled.div`
  margin-right: 0.75rem;

  color: ${(props) => props.theme["base-label"]};
  font-size: 0.75rem;
  font-style: italic;
`;

export const ErrorLabel = styled.div`
  margin-top: 0.5rem;

  color: ${(props) => props.theme["danger"]};
  font-size: 0.875rem;
`;
