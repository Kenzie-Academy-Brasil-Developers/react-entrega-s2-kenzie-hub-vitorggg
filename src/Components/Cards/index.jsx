import { Container } from "./styles";

export default function Cards({ title, level }) {
  return (
    <Container>
      <h2>{title}</h2>
      <span>{level}</span>
    </Container>
  );
}
