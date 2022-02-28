import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
  width: 100%;
  min-width: 320px;
  height: 100%;
  min-height: 707px;

  padding-bottom: 20px;

  background-color: var(--grey-4);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  hr {
    width: 100%;
    height: 1px;
    color: var(--grey-3);
  }

  /* @media (min-width: 765px) {
    align-items: flex-start;
    justify-content: stretch;
  } */
`;

export const ContentHeader = styled.div`
  width: 100%;
  height: 73px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  img {
    width: 105.53px;
    height: 14.63px;
  }

  button {
    width: 55.49px;
    height: 32px;
  }

  @media (min-width: 765px) {
    height: 72px;
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  width: 100%;
  height: 131px;

  padding: 12px;

  text-align: left;

  @media (min-width: 400px) {
    align-items: center;
  }

  @media (min-width: 765px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 118px;
  }

  h2 {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--grey-0);
    margin: 10px 0;
  }

  span {
    font-size: 0.75rem;
    font-weight: normal;
    color: var(--grey-1);
  }
`;

export const ContentMain = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  margin: 40px 0 20px 0;

  h2 {
    font-weight: 600;
    font-size: 1rem;
    color: var(--grey-0);
    margin-left: 14px;
  }

  button {
    width: 32.49px;
    height: 32px;
    margin-right: 14px;
  }
`;

export const ContentTable = styled.div`
  width: 55%;
  min-width: 296px;
  max-height: 50%;
  border-radius: 4px;
  padding: 9px 12px;
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;

  background-color: var(--grey-3);

  @media (min-width: 400px) {
    margin: 0 auto;
  }
`;
