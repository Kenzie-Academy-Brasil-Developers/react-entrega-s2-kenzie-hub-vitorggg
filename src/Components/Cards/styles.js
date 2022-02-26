import styled from "styled-components";

export const Container = styled.div`
  width: 98%;
  max-width: 742px;
  height: 48.73px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12.182px;

  background-color: var(--grey-4);
  border-radius: 4.06066px;

  cursor: pointer;

  margin: 11px 4.25px 4px 4.25px;

  h2 {
    font-weight: 700;
    font-size: 0.888rem;
    color: var(--grey-0);
  }

  span {
    font-weight: normal;
    font-size: 0.761rem;
    color: var(--grey-1);
  }

  :hover {
    background-color: var(--grey-2);
  }
`;
