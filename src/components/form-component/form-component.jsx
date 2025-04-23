'use client'
import {useState} from "react";

function UserForm() {

    const [user, setUser] = useState({})
    const [formError, setFormError] = useState({})
    const [showUserData, setShowUserData] = useState(false)
    const isSubmitDisabled = !user.username || !user.age || formError.username || formError.age;
    const onFormHandler = (e) => {
        e.preventDefault();
        const value = e.target.value;
        const field = e.target.name;



        setUser(userState => ({...userState, [field]: value}))
        setFormError(({}));
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (!user.username || !user.username.trim()) {
            setFormError(errorState => ({...errorState, username: 'Please enter your name!'}));
            return
        }

        const  age = Number(user.age);

        if (!user.age || isNaN(user.age) || user.age < 0 || user.age > 130) {
            setFormError(errorState => ({...errorState, age: 'Please enter your age!'}));
            return
        }

        if (formError.username || formError.age) {
            setFormError({});
        }
        setShowUserData(true);
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <label htmlFor="username">Username</label>
                <input onChange={onFormHandler} value={user.username ?? ''} type="text" id="username" name="username" placeholder="Username"/>
                {formError.username && <span className="error">{formError.username}</span>}
                <label htmlFor="age">Age</label>
                <input onChange={onFormHandler} value={user.age ?? ''} type="number" name="age" id="age" placeholder="Age"/>
                {formError.age && <span className="error">{formError.age}</span>}
                <button type="submit" disabled={isSubmitDisabled}>Submit</button>
            </form>

            {
            showUserData && (
                <>
                    <p>{user.username}</p>
                    <p>{user.age}</p>
                    <button onClick={() => setShowUserData(false)}>Hide</button>
                </>
            )
        }
        </>
    )
}

export default UserForm