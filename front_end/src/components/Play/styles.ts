import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 500px;
  margin-right: 60px;

  > strong {
    color: #999591;
    font-size: 20px;
    font-weight: 400;
  }

  div {
    background: #273548;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-top: 10px;
    height: 40px;

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: #5d5a65;
    }

    strong {
      margin-left: 24px;
      margin-right: 24px;
      color: #fff;
    }

    span {
      margin-left: auto;
      margin-right: auto;
      display: flex;
      align-items: center;
      color: #5879a5;
    }

    span.winner {
      color: #4aff00;
    }
  }
`;
