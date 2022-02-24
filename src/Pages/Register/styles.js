import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  height: 100%;
  max-height: 707px;
  width: 100%;
  max-width: 320px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--grey-4);
  border-radius: 8px;
`;

export const ContainerHeader = styled.div`
  width: 100%;
  max-width: 295.83px;

  display: flex;
  justify-content: space-around;

  margin-bottom: 30.98px;

  img {
    margin-right: 117.27px;
  }
`;

export const ContentForm = styled.div`
  height: 568.47px;
  width: 100%;
  max-width: 295.83px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 34px 18px 34px 18px;

  background-color: var(--grey-3);

  box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
  border-radius: 3.19812px;

  h2 {
    width: 101.54px;
    height: 22.39px;

    font-size: 0.899rem;
    color: var(--grey-0);

    margin-bottom: 15px;
  }

  span {
    width: 132.72px;
    height: 17.59px;

    font-size: 0.6rem;
    color: var(--grey-1);

    margin-bottom: 22.75px;
  }

  form {
    height: 90%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerFooter = styled.div`
  height: 500px;
  width: 232.97px;
`;
