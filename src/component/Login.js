import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as authActions from "../store/actions/auth";

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [error, setError] = useState(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleClickLogin = (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            setError('Username and password not empty');
            return;
        }
        // validate email
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setError('Invalid email');
            return;
        }
        // validate password
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        // login
        dispatch(authActions.login(email, password, () => {
            history.push('/home');
        }))
    }


    return <div className="form-login">
        <div className="header">Login Account</div>
        <div className="body">
            {error && <div className="error">{error}</div>}
            <div className="form-group">
                <label>Email:</label>
                <input type="text" className="form-control" placeholder="Enter email" value={email} onChange={handleChangeEmail}/>
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={handleChangePassword}/>
            </div>
            <button name="submit" onClick={handleClickLogin}>Login</button>
        </div>
    </div>
}

export default Login;