import React, { useState } from 'react';
import ReactDataSheet from 'react-datasheet';

function DataGrid() {
  const grid = [
    [{ value: 1 }, { value: 3 }],
    [{ value: 2 }, { value: 4 }],
  ];

  return (
    <ReactDataSheet
    data={grid}
    valueRenderer={cell => cell.value}
    onCellsChanged={changes => {
      const grid = grid.map(row => [...row]);
      changes.forEach(({ cell, row, col, value }) => {
        grid[row][col] = { ...grid[row][col], value };
      });
    }}
  />
  );
}

export {DataGrid as default};