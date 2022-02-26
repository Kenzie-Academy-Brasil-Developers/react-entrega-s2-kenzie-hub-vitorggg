import { Container, InputContainer } from "./styles";

export default function Input({ label, icon: Icon, ...rest }) {
  return (
    <Container>
      <div>{label}</div>
      <InputContainer>
        <input {...rest} />
        {Icon && <Icon />}
      </InputContainer>
    </Container>
  );
}
