import { Container, InputContainer } from "./styles";

export default function Input({ label, icon, ...rest }) {
  return (
    <Container>
      <div>{label}</div>
      <InputContainer>
        <input {...rest} />
      </InputContainer>
    </Container>
  );
}
