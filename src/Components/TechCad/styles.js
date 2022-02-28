import styled from "styled-components";

export const Container = styled.div`
  display: ${(props) => (props.hide ? "none" : "flex")};
  flex-direction: column;
  align-items: flex-start;

  position: absolute;

  width: 295px;
  height: 273.41px;

  background: var(--grey-3);
  box-shadow: 0px 3.19783px 31.9783px -7.99458px rgba(0, 0, 0, 0.25);
  border-radius: 3.19783px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 9.5935px 15.9892px;
  width: 100%;
  height: 39.97px;
  background: var(--grey-2);
  border-radius: 3.19783px 3.19783px 0px 0px;

  span {
    font-weight: bold;
    font-size: 0.7rem;
    color: var(--grey-0);
  }

  button {
    width: 8.82px;
    height: 20.86px;
    background-color: var(--grey-2);
  }

  a {
    color: var(--grey-0);
  }
`;

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

export const ContainerFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 295px;
  margin-top: 16px;

  button {
    font-weight: 500;
    font-size: 0.799rem;
    color: var(--white);
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 78.35px;
    max-height: 38.37px;
    margin-left: 17.59px;
  }
`;
