import { Fragment } from 'react';

function CounterHookLocalStorage() {
  const {} = useCounter(0)
  return (
    <Fragment>
      <div className="counter-hook-local-storage">{}</div>
    </Fragment>
  )
}

export default CounterHookLocalStorage;