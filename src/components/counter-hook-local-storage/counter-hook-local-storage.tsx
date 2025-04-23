import { Fragment } from 'react';
import { useCounter } from '@/hooks/useCounter';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const KEY = 'counter-hook-local-storage';
const INIT_VALUE = 0;

function CounterHookLocalStorage() {
  const { counter, increment, decrement, reset, setCounter } = useCounter(INIT_VALUE);
  useLocalStorage(KEY, counter, setCounter, INIT_VALUE);
  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }} justifyContent={'center'} width="100%" textAlign={'center'}>
        {counter}
      </Box>
      <Box display="flex" gap={2}>
        <Button variant="contained" onClick={decrement}>
          -
        </Button>
        <Button variant="contained" onClick={increment}>
          +
        </Button>
        <Button variant="outlined" onClick={reset}>
          Reset
        </Button>
      </Box>
    </Fragment>
  );
}

export default CounterHookLocalStorage;
