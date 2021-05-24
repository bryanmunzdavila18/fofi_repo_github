import React, { useState } from 'react';
// import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../assets/stylesheets/Login.scss'
import LogoFofi from './../assets/images/logo_fofi.png'
const Login = (props) => {
    const userInitialState = {
        name: '',
        userName: '',
        isAdmin: false,
    };
    const [ user, setUser ] = useState(userInitialState);
    return <React.Fragment>
        <form onSubmit={()=> {
            props.setUserSession(user)
        }
        }>
            <img src={LogoFofi}/>
            <h3>Log in</h3>

            <div className="form-group">
                <label>User Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter User Name"
                    onChange={(email)=>setUser({...user,
                        userName: email.target.value,
                    })}
                />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    onClick={(password)=>setUser({...user,
                        password: password.target.value,
                    })}
                />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
        </form>
    </React.Fragment>
};

export default Login;