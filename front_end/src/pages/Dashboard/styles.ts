import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px 0;
  background: #273548;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 60px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #999591;
      width: 20px;
      height: 20px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #fff;
    }

    a {
      text-decoration: none;
      color: #6a9cdb;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1120px;
  margin: 20px auto;
`;

export const GroupHeader = styled.main`
  display: flex;
  align-items: center;
  align-self: center;

  button {
    border: 0;
    background: none;
    color: #fff;
  }

  strong {
    margin: 0 5px;
  }
`;

export const Group = styled.div`
  flex: 1;
  display: flex;
  margin: 30px auto;

  h1 {
    font-size: 36px;
  }
`;

export const TeamGroup = styled.div`
  margin-top: 1px;
  display: flex;
  flex-direction: column;
`;

export const Plays = styled.div``;

export const Brackets = styled.div`
  flex: 1;
  margin-top: 30px;
`;
