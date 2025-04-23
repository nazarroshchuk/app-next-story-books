import {Fragment, useState} from "react";

function TodoList() {
    const [todoList, setTodoList] = useState([]);
    const [input, setInput] = useState('');


    const onSubmit = (e) => {
        e.preventDefault();
        if(!input) {
            return;
        }

        setTodoList(prevState => ([...prevState, {
            id: Math.random() * 100,
            text: input,
            isChecked: false,
        }]))

        setInput('');
    }

    const onCheckboxChange = (e, id) => {
        setTodoList(todoList.map(el => el.id === id ? ({...el, isChecked: e.target.checked}) : el))
    }

    const onDelete = (id) => {
        setTodoList(todoList.filter(el => el.id !== id))
    }

    const inputHandler = (e) => {
        setInput(e.target.value)
    }

    return (
        <Fragment>
            <form onSubmit={onSubmit}>
                <input onChange={inputHandler} value={input} type='text'/>
                <button disabled={!input} type='submit'>add task</button>
            </form>
            <ul style={{ listStyleType: 'none', width: '100%' }}>
                {todoList.map(listItem => (
                    <li style={{textDecoration: listItem.isChecked ? 'line-through' : 'none', backgroundColor: listItem.isChecked ? 'yellow' : 'white'}} key={listItem.id}>
                        <input checked={listItem.isChecked} type='checkbox' onChange={(e) => onCheckboxChange(e, listItem.id)}/>
                        <p>{listItem.text}</p>
                        <button type='button' onClick={() => onDelete(listItem.id)}>delete</button>
                    </li>
                ))}
            </ul>
        </Fragment>
    )
}

export default TodoList