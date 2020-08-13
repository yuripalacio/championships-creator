import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  main {
    display: flex;
    flex-direction: row;
  }
  .round {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 200px;
    list-style: none;
    padding: 0;
  }
  .round .spacer {
    flex-grow: 1;
  }
  .round .spacer:first-child,
  .round .spacer:last-child {
    flex-grow: 0.5;
  }

  .round .game-spacer {
    flex-grow: 1;
  }

  /*
 *  General Styles
*/
  body {
    font-family: sans-serif;
    font-size: small;
    padding: 10px;
    line-height: 1.4em;
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
