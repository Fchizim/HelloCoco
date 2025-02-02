import React from 'react';

const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">HelloCoco</span>
                <span className="title">Login</span>
                <form>
                    <input type="email" placeholder='email'/>
                    <input type="password" placeholder='password'/>
                    <button>Sign up</button>
                </form>
                <p>You do not have an account? Register</p>
            </div>
        </div>
    );
}

export default Login;