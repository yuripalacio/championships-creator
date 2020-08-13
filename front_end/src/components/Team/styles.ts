import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 300px;
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
    position: relative;
    height: 60px;

    &::before {
      position: absolute;
      height: 60%;
      width: 1px;
      left: 0;
      top: 20%;
      content: '';
      background: #6a9cdb;
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #5d5a65;
    }

    strong {
      margin-left: 24px;
      color: #fff;
    }

    span {
      margin-left: auto;
      display: flex;
      align-items: center;
      color: #fff;
    }

    span.score {
      margin-right: 5px;
      font-size: 30px;
      color: #fff;
    }

    span.round {
      margin-left: 5px;
      color: #fff;
    }
  }
`;
