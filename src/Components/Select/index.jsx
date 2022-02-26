import { Container, SelectContainer } from "./styles";

export default function Select({ label, icon, ...rest }) {
  return (
    <Container>
      <div>{label}</div>
      <SelectContainer>
        <select {...rest}></select>
      </SelectContainer>
    </Container>
  );
}
