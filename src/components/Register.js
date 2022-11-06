import React, { useState } from 'react'

function Register() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div class="container d-flex justify-content-center align-items-center my-5">
            <div class="row">
                <div class="col-md-9 offset-md-3 col-xl-10 offset-xl-1 ">
                    <div class="card shadow">
                        <img src="/ictLog2.png"
                            alt="" class="card-img-top" width={250} height={250} />
                        <div class="card-body">
                            <h5 class="card-title">Register</h5>
                            <form>
                                <div class="mb-3">
                                    <label for="username" class="form-label"> Enter username </label>
                                    <input type="text" class="form-control" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)} autofocus
                                        required />
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label"> Enter email </label>
                                    <input type="email" class="form-control" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required />
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label"> Enter password </label>
                                    <input type="password" class="form-control" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required />
                                </div>
                                <div class="d-grid gap-2">
                                    <button class="btn btn-success"> Register </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register