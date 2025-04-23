import { useReducer} from "react";

function reducer(state, action) {
    console.log({action});
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                counter: state.counter + 1,
            }
        case "DECREMENT":
            return {
                ...state,
                counter: Math.max(0, state.counter - 1),
            }
        case "RESET":
            return {
                ...state,
                counter: 0,
            }
        default:
            return state;
    }
}


function Counter() {
    const [state, dispatch] = useReducer(reducer, {counter: 0})

    const removeCounterHandler = () => {
        dispatch({ type: "DECREMENT"})
    }

    const addCounterHandler = () => {
        dispatch({ type: "INCREMENT"})
    }

    const resetCounterHandler = () => {
        dispatch({ type: "RESET"})
    }


    return (
        <>
            <p>Count: {state.counter}</p>
            <button onClick={removeCounterHandler}>-</button>
            <button onClick={resetCounterHandler}>Reset</button>
            <button onClick={addCounterHandler}>+</button>
        </>
    )
}

export default Counter;