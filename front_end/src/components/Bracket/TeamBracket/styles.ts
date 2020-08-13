import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 200px;
  margin-right: 60px;

  > strong {
    color: #999591;
    font-size: 20px;
    font-weight: 400;
  }

  div {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border-radius: 10px;
    height: 40px;

    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background: #5d5a65;
    }

    strong {
      margin-left: 10px;
      color: #fff;
    }

    span {
      margin-left: auto;
      display: flex;
      align-items: center;
      color: #fff;
    }

    strong.winner {
      color: #31a800;
    }
    span.winner {
      color: #31a800;
    }
  }
`;
