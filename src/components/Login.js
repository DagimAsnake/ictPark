import React, { useState } from 'react'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="container d-flex justify-content-center align-items-center my-5">
            <div className="row">
                <div className="col-md-9 offset-md-3 col-xl-10 offset-xl-1 ">
                    <div className="card shadow">
                        <img src="/ictLog2.png"
                            alt="" className="card-img-top" width={250} height={250} />
                        <div className="card-body">
                            <h5 className="card-title">Login</h5>
                            <form action="/login" method="POST" className="validation-form">
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label"> Enter username </label>
                                    <input type="text" className="form-control" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)} autoFocus
                                        required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label"> Enter password </label>
                                    <input type="password" className="form-control" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required />
                                </div>
                                <div className="d-grid gap-2">
                                    <button className="btn btn-success d-grid"> Log in </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login