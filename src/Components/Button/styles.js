import styled from "styled-components";

export const Container = styled.button`
  width: ${(props) => (props.isMedium ? "110px" : "143.67px")};
  height: ${(props) => (props.isMedium ? "32px" : "48px")};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: ${(props) => (props.isMedium ? "0px 16.2426px" : "0px 22.3336px")};

  border: 1.2182px solid
    ${(props) =>
      props.isMedium
        ? "#212529"
        : props.isNegative
        ? "#59323F"
        : props.isDisabled
        ? "#868E96"
        : "#FF577F"};

  border-radius: 4px;

  background-color: ${(props) =>
    props.isMedium
      ? "#212529"
      : props.isNegative
      ? "#59323F"
      : props.isDisabled
      ? "#868E96"
      : "#FF577F"};

  color: var(--white);

  font-size: ${(props) => (props.isMedium ? "0.75rem" : "1rem")};

  :hover {
    background-color: ${(props) =>
      props.isMedium ? "#343B41" : props.isDisabled ? "#343B41" : "#FF427F"};
  }
`;
