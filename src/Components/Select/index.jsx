import { Container, SelectContainer } from "./styles";

export default function Select({ label, icon, ...rest }) {
  return (
    <Container>
      <div>{label}</div>
      <SelectContainer>
        <select {...rest}>
          <option>Primeiro Módulo</option>
          <option>Segundo Módulo</option>
          <option>Terceiro Módulo</option>
          <option>Quarto Módulo</option>
          <option>Quinto Módulo</option>
          <option>Sexto Módulo</option>
        </select>
      </SelectContainer>
    </Container>
  );
}
