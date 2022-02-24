import React, {useState} from 'react';
import Layout from '../containers/Layout';
export default function Login () {
    const [inputs, setInputs] = useState({})
    const {username, pw} = inputs;

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({...inputs, [name] : value})
    }

    const handleClick = (e) => {
        /*
        let username = document.getElementById('username').value
        let pw = document.getElementById('pw').value
        setUsername(username)
        setPw(pw)
        setResult("username : " + username + ", " + "pw : " + pw)
        */
       e.preventDefault()
       const loginRequest = {username, pw}
       alert(`${JSON.stringify(loginRequest)}`)
    }
    
    return (<Layout>
        <h1>로그인 폼</h1>
        <div>
            <label><b>Username</b></label> <br/>
            <input name="username" onChange={handleChange}/> <br />
            <label><b>Password</b></label> <br/>
            <input name="pw" onChange={handleChange}/> <br/>
            <button onClick={handleClick}>Login</button> <br/>
            <label>
                <input /> Remember me
            </label>
        </div>
        <div>
            <button>Cancel</button>
            <span>Forgot <a>password?</a></span>
        </div>
    </Layout>)
}
