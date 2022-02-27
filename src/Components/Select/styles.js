import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  text-align: left;

  margin-bottom: 12px;

  div {
    font-weight: normal;
    font-size: 0.609rem;
    color: var(--grey-0);
    margin-bottom: 12.86px;

    span {
      color: var(--negative);
    }
  }
`;

export const SelectContainer = styled.div`
  max-width: 263.79px;
  max-height: 38.38px;

  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: var(--grey-2);
  border: 0.973988px solid var(--grey-2);
  border-radius: 3.19812px;

  select {
    width: 100%;
    border: 0;
    background: transparent;
    flex: 1;
    font-size: 0.812rem;
    font-weight: normal;
    color: var(--grey-1);
    padding: 8px 12.9865px;

    option {
      background-color: var(--grey-2);
      border: 0.973988px solid var(--grey-2);
      border-radius: 3.19812px;
    }
  }

  :hover {
    border: 0.973988px solid var(--grey-0);
    color: var(--grey-0);
  }
`;
