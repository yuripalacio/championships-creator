import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  list-style: none;
  padding: 0;

  .spacer {
    flex-grow: 1;
  }
  .spacer:first-child,
  .spacer:last-child {
    flex-grow: 0.5;
  }

  .game-spacer {
    flex-grow: 1;
  }

  li.game {
    padding-left: 0px;
  }

  li.game.winner {
    font-weight: bold;
  }
  li.game span {
    float: right;
    margin-right: 5px;
  }

  li.game-top {
    border-bottom: 1px solid #aaa;
  }

  li.game-spacer {
    border-right: 1px solid #aaa;
    min-height: 80px;
  }

  li.game-bottom {
    border-top: 1px solid #aaa;
  }
`;
