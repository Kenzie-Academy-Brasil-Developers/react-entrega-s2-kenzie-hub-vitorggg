import { Container } from "./styles";

export default function Button({
  children,
  isMedium = false,
  isNegative = false,
  isDisabled = false,
  ...rest
}) {
  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  );
}
