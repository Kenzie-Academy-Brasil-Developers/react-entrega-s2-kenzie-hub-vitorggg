import { Container, SelectContainer } from "./styles";

export default function Select({
  label,
  name,
  options,
  register,
  error,
  ...rest
}) {
  return (
    <Container>
      <div>
        {label} {!!error && <span> - {error}</span>}
      </div>
      <SelectContainer>
        <select {...register(name)} {...rest}>
          {options.map((item) => {
            return (
              <option key={item} value={item}>
                {item.split(" ")[0] + " " + item.split(" ")[1]}
              </option>
            );
          })}
        </select>
      </SelectContainer>
    </Container>
  );
}
