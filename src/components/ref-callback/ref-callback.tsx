import { useCallback, useEffect, useReducer, useRef, useState } from "react";

export default function RefCallback() {
  const [visible, toggle] = useReducer((value) => !value, false);
  const [size, setSize] = useState<[number, number] | null>(null);
  // const divRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //     if (divRef.current) {
  //         const { width, height } = divRef.current.getBoundingClientRect();
  //         setSize([width, height]);
  //     } else {
  //         setSize(null);
  //     }
  // }, [visible]);

  const refCallback = useCallback((element: HTMLDivElement | null) => {
    if (element) {
      const { width, height } = element.getBoundingClientRect();
      setSize([width, height]);
    } else {
      setSize(null);
    }
  }, []);

  return (
    <div className="App">
      <h1>Ref Callback</h1>
      <h2>Size: {formatNumber(size?.[0])} x {formatNumber(size?.[1])}</h2>
      <button onClick={() => toggle()}>Toggle Visibility</button>
      {visible && (
        <div ref={refCallback}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
      )}
    </div>
  );
}

function formatNumber(n: number | undefined) {
  return n?.toFixed(0) ?? '?';
}
