import React from 'react';

export default function TicTacToe() {
  let [activePlayer, setActivePlayer] = React.useState('O');
  const [winner, setWinner] = React.useState('');
  const [matrix, setMatrix] = React.useState(Array.from({length: 3},()=>Array.from({length: 3},()=>'_')));
  const handleClick = (idx1, idx2) => {
    matrix[idx1][idx2] == '_' &&
    setMatrix(prev =>
      prev.map((row, i) =>
        idx1 == i ? row?.map((cell, j) => j==idx2?activePlayer:cell) : row
    ));
    matrix[idx1][idx2] == '_' &&
    setActivePlayer(prev=>prev=='O'?'X':'O');
    setWinner(checkWinner());
  }
  const handleRestart = () => {
    setMatrix(Array.from({length:3}, ()=>Array.from({length:3}, ()=>'_')))
  }
  const checkWinner = () => {
    for (let i = 0; i < 3; i++) {
      if (
        matrix[i][0] &&
        matrix[i][0] === matrix[i][1] &&
        matrix[i][1] === matrix[i][2]
      ) {
        return matrix[i][0];
      }
    }

    // Check columns
    for (let j = 0; j < 3; j++) {
      if (
        matrix[0][j] &&
        matrix[0][j] === matrix[1][j] &&
        matrix[1][j] === matrix[2][j]
      ) {
        return matrix[0][j];
      }
    }

    // Check diagonals
    if (
      matrix[0][0] &&
      matrix[0][0] === matrix[1][1] &&
      matrix[1][1] === matrix[2][2]
    ) {
      return matrix[0][0];
    }

    if (
      matrix[0][2] &&
      matrix[0][2] === matrix[1][1] &&
      matrix[1][1] === matrix[2][0]
    ) {
      return matrix[0][2];
    }
    return null;
  }
  return (
    <div>
      {matrix?.map((row, i) => {
        return (
          <>{row?.map((elem, j) => (
            <button onClick={()=>handleClick(i, j)}>{elem}</button>
          ))}<br/></>
        );
      })}{winner}{(winner=='O'||winner=='X') &&<button onClick={handleRestart}>Restart</button>}
    </div>
  );
}
