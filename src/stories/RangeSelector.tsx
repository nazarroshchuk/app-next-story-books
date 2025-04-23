import React, { useLayoutEffect, useState } from 'react';
import { addDotZeroValue, splitGradient } from './helpers';


import './RangeSelector.css';

export interface RangeSelectorProps {
  onChange?: (name: string, value: RangeType) => void,
  width?: number,
  name: string,
  fromD: number
  toD: number,
}

export interface RangeType {
  [key: string]: number;
}


const RangeSelector: React.FC<RangeSelectorProps> = ({
                                                       width = 468,
                                                       onChange,
                                                       fromD = 1,
                                                       toD = 10,
                                                       name
                                                     }) => {
  const min = 1;
  const max = 10;
  const itemLength = 30;
  const slideLength = itemLength * max;

  const [from, setFrom] = useState(fromD || min);
  const [to, setTo] = useState(toD || max);
  const [fromInput, setFromInput] = useState(addDotZeroValue(fromD || min));
  const [toInput, setToInput] = useState(addDotZeroValue(toD || max));

  const colors = splitGradient(max, '#FFAB39', '#2CBA8B');

  const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), to - 1);

    if (to - from) {
      setFromInput(addDotZeroValue(value));
    }

    setFrom(value);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onChange && onChange(name, {
      from: value,
      to
    });
  };

  const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), from + 1);

    if (to - from) {
      setToInput(addDotZeroValue(value));
    }

    setTo(value);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onChange && onChange(name, {
      from,
      to: value
    });
  };


  const handleInputFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (isNaN(+value) || !+value) {
      return;
    }
    setFromInput(value);
  };

  const handleInputTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (isNaN(+value) || !+value || +value > max) {
      return;
    }

    setToInput(value);
  };

  const handleKeyDownFrom = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' || e.key === 'Delete') {
      setFromInput('');
    }
  };

  const handleKeyDownTo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' || e.key === 'Delete') {
      setToInput('');
    }
  };

  const handleBlurFromInput = () => {
    if (+fromInput >= +toInput || !fromInput) {
      setFromInput(addDotZeroValue(from));
    } else {
      setFromInput(addDotZeroValue(fromInput));
      setFrom(+fromInput);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      onChange && onChange(name, {
        from: +fromInput,
        to
      });
    }
  };

  const handleBlurToInput = () => {
    if (+toInput <= +fromInput || !toInput) {
      setToInput(addDotZeroValue(to));
    } else {
      setToInput(addDotZeroValue(toInput));
      setTo(+toInput);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      onChange && onChange(name, {
        from,
        to: +toInput
      });
    }
  };


  const inRange = (from: number, to: number, value: number) => value > from && value < to;

  const isSelected = (from: number, to: number, value: number) => value === from || value === to;

  useLayoutEffect(() => {
    const style = document.createElement('style');

    style.textContent = `
          .thumb-left::-webkit-slider-thumb {
            outline: 4px solid ${colors[from - 1]};
          }
          
          .thumb-left::::-moz-range-thumb {
            outline: 4px solid ${colors[from - 1]};
          }
          
          .thumb-right::-webkit-slider-thumb {
            outline: 4px solid ${colors[to - 1]};
          }
          
          .thumb-right::::-moz-range-thumb {
            outline: 4px solid ${colors[to - 1]};
          }
        `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };

  }, [to, from, colors]);

  return (
    <div className="RangeSelector__container" style={{ width }}>
      <div className="RangeSelector__labels">
        <label htmlFor="from">From</label>
        <input
          type="text"
          id="from"
          value={fromInput}
          onBlur={handleBlurFromInput}
          onKeyDown={handleKeyDownFrom}
          onChange={handleInputFrom}
          min={min}
          max={max}
          onFocus={() => setFromInput('')}
        />
      </div>
      <div className="RangeSelector__slider-box">
        <div className="RangeSelector__slider-wrapper" style={{ width: slideLength }}>
          <div className="RangeSelector__scale">
            {Array.from({ length: max }, (_, i) => (
              <span
                key={i + 1}
                style={{
                  borderWidth: '1px 1px 1px 0px',
                  backgroundColor: inRange(from, to, i + 1)
                    ? colors[i]
                    : isSelected(from, to, i + 1) ? '#ffffff' : '#F5F6FA',
                  borderColor: inRange(from, to, i + 1)
                    ? colors[i]
                    : isSelected(from, to, i + 1)
                      ? 'transparent'
                      : '#E9EBF0',
                  borderStyle: 'solid'
                }}
              >
                                {i + 1}
                            </span>
            ))}
          </div>
          <input
            type="range"
            min={min}
            max={max}
            value={from}
            onChange={handleFromChange}
            className="thumb thumb-left"
          />
          <input
            type="range"
            min={min}
            max={max}
            value={to}
            onChange={handleToChange}
            className="thumb thumb-right"
          />

          <div className="RangeSelector__slider">
            <div
              className="RangeSelector__slider-track"
            ></div>
          </div>
        </div>
      </div>
      <div className="RangeSelector__labels">
        <label htmlFor="to">To</label>
        <input
          type="text"
          id="to"
          value={toInput}
          onBlur={handleBlurToInput}
          onKeyDown={handleKeyDownTo}
          onChange={handleInputTo}
          min={min}
          max={max}
          onFocus={() => setToInput('')}
        />
      </div>
    </div>
  );
};

export default RangeSelector;