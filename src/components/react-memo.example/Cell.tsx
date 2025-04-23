import React from 'react';

type CellProps = {
  index: number;
  selected: boolean;
  onClick: (index: number) => void;
};

export function Cell({ index, selected, onClick }: CellProps) {
  return (
    <div
      onClick={() => onClick(index)}
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: getRandomHexColor(),
        boxSizing: 'border-box',
        border: `1px solid ${selected ? 'white' : '#0003'}`,
      }}
    />
  );
}

export const MemoCell = React.memo(Cell);

function getRandomHexColor() {
  let hex = Math.floor(Math.random() * 0xffffff).toString(16);
  while (hex.length < 6) {
    hex = '0' + hex;
  }
  return '#' + hex;
}
