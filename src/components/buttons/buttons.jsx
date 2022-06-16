import { ThemeButton } from "./style";

export default function Button({ children, btnSize, btnColor, ...rest }) {
  return (
    <ThemeButton btnSize={btnSize} btnColor={btnColor} {...rest}>
      {children}
    </ThemeButton>
  );
}
