import { ThemeType } from "../../@types/styled";
import { BulletPointContainer } from "./styles";

type BulletPointProps = {
  text: React.ReactNode;
  icon: React.ReactNode;
  backgroundColor: keyof ThemeType;
};

export function BulletPoint({ text, icon, backgroundColor }: BulletPointProps) {
  return (
    <BulletPointContainer backgroundColor={backgroundColor}>
      <div>{icon}</div>
      <span>{text}</span>
    </BulletPointContainer>
  );
}
