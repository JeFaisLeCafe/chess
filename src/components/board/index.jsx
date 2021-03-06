import React from "react";
import styled from "styled-components";
import Square from "../square";

const Row = styled.div`
  flex-direction: row;
  display: flex;
`;

const GRID_ROW_NUMBER = 8;
const GRID_COL_NUMBER = 8;

const Board = () => {
  const createSquare = (col, row) => {
    return <Square position={{ row, col }} />;
  };
  const getInitialGrid = () => {
    let grid = [];
    for (let row = 1; row <= GRID_ROW_NUMBER; row++) {
      let currentRow = [];
      for (let col = 1; col <= GRID_COL_NUMBER; col++) {
        currentRow.push(createSquare(col, row));
      }
      grid.push(currentRow);
    }
    return grid;
  };
  const board = getInitialGrid();

  return (
    <div>
      {board.map((row) => {
        return (
          <Row>
            {row.map((square) => {
              return square;
            })}
          </Row>
        );
      })}
    </div>
  );
};

export default Board;
