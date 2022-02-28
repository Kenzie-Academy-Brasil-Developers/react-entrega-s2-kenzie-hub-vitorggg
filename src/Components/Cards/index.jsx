import { Container } from "./styles";

export default function Cards({ title, level, onClick }) {
  return (
    <Container onClick={onClick}>
      <h2>{title}</h2>
      <span>{level}</span>
    </Container>
  );
}
