import { useFormContext } from "react-hook-form";
import { ErrorLabel, InputBase, InputContainer, InputTextField, OptionalLabel } from "./styles";

type InputProps = {
  name: string;
  optional?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ name, optional, ...rest }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <InputContainer name={name}>
      <InputBase>
        <InputTextField {...rest} withError={!!errors[name]} {...register(name)} />
        {optional && <OptionalLabel>Opcional</OptionalLabel>}
      </InputBase>
      {errors[name] && <ErrorLabel>{errors[name].message?.toString()}</ErrorLabel>}
    </InputContainer>
  );
}
