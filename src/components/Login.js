import React, { useState } from 'react'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div class="container d-flex justify-content-center align-items-center my-5">
            <div class="row">
                <div class="col-md-9 offset-md-3 col-xl-10 offset-xl-1 ">
                    <div class="card shadow">
                        <img src="/ictLog2.png"
                            alt="" class="card-img-top" width={250} height={250} />
                        <div class="card-body">
                            <h5 class="card-title">Login</h5>
                            <form action="/login" method="POST" novalidate class="validation-form">
                                <div class="mb-3">
                                    <label for="username" class="form-label"> Enter username </label>
                                    <input type="text" class="form-control" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)} autofocus
                                        required />
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label"> Enter password </label>
                                    <input type="password" class="form-control" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required />
                                </div>
                                <div class="d-grid gap-2">
                                    <button class="btn btn-success d-grid"> Log in </button>
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