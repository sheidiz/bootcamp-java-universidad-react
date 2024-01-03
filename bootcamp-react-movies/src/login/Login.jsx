import React, { useState } from 'react'
import { loginUseCase } from '../application/login';
import { appConfig } from '../../config';
import { loginRepository } from '../infrastructure/login-repository';
import { toLogin } from '../infrastructure/login-adapter';

export const Login = () => {

    const [userName, setUsername] = useState(undefined);
    const [password, setPassword] = useState(undefined);

    const login = async () => {
        const useCase = loginUseCase(
            loginRepository(appConfig.REQ_RES_PATH),
            toLogin()
        );

        const userLoginData = await useCase(userName, password);
        //dispath al redux del usuario
        console.log(userLoginData);
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className="col-sm-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3">
                    <div>
                        <div className="mb-3">
                            <label htmlhtmlFor="exampleInputEmail1" className="form-label">User Name</label>
                            <input type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                value={userName}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlhtmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="button"
                            className="btn btn-primary"
                            onClick={login}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}