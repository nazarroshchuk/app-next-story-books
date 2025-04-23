import { ReactElement, useState } from "react";
import { Cell, MemoCell } from "./Cell";

const MATRIX_SIZE = 20;

export function AppMemo() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const grid: ReactElement[] = new Array(MATRIX_SIZE * MATRIX_SIZE);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = (
      // avoid rerender use MemoCell
      <Cell
        key={i}
        index={i}
        // it is better to calculate here selected: boolean, instead pass just selectedIdx in Cell, we avoid rerender each calculation
        selected={i === selectedIdx}
        // onClick={() => setSelectedIdx(i)} will cause rerender even in MemoCell, as () => setSelectedIdx(i) is a new refer each time after AppMemo is rerendered
        onClick={setSelectedIdx}
      />
    );
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateRows: `repeat(${MATRIX_SIZE}, 1fr)`,
      gridTemplateColumns: `repeat(${MATRIX_SIZE}, 1fr)`,
      height: '100vw',
    }}>
      {grid}
    </div>
  );
}