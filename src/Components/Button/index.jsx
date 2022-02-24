import { Container } from "./styles";

export default function Button({
  children,
  isMedium = false,
  isNegative = false,
  isDisabled = false,
  ...rest
}) {
  return (
    <Container
      type="button"
      isMedium={isMedium}
      isNegative={isNegative}
      isDisabled={isDisabled}
      {...rest}
    >
      {children}
    </Container>
  );
}
