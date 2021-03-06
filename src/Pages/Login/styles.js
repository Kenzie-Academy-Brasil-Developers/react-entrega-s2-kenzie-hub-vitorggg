import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;

export const Content = styled.div`
  height: 85%;
  max-height: 707px;
  width: 100%;
  max-width: 320px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--grey-4);
  border-radius: 8px;

  img {
    margin-bottom: 20px;
  }
`;

export const ContentForm = styled.div`
  max-height: 418.47px;
  width: 100%;
  max-width: 295.83px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  background-color: var(--grey-3);

  padding: 33.6911px 17.6477px;

  box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
  border-radius: 3.19812px;

  h2 {
    width: 101.54px;
    height: 22.39px;

    font-size: 0.899rem;
    color: var(--grey-0);

    margin-bottom: 15px;
  }

  div {
    margin-top: 20px;
  }
`;

export const ContainerFooter = styled.div`
  width: 295.83px;
  height: 70.59px;

  margin-top: 27px;

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    color: var(--grey-1);
    font-weight: normal;
    font-size: 0.602rem;

    margin-bottom: 17.65px;
  }
`;
