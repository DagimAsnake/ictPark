import React, { useState } from 'react'

function Report() {

    const [compName, setCompName] = useState('')
    const [month, setMonth] = useState('')

    return (
        <div className='container'>
            <div className="row mt-3">
                <main className='col-8 text-center offset-2'>
                    <h1>Monthly Report Form</h1>
                </main>
            </div>
            <form>
                <div class="row mt-4">
                    <div class="col-md">
                        <div class="form-row mb-3">
                            <label htmlfor="nam"> Company Name </label>
                            <input type="text" id="nam" name='nam' className="form-control" placeholder='Company Name' value={compName} onChange={e => setCompName(e.target.value)} />
                        </div>
                    </div>
                    <div class="col-md">
                        <div class=" form-row mb-3">
                            <label htmlfor="month"> Month </label>
                            <input type="month" id="month" name='month' className="form-control" placeholder='' value={month} onChange={e => setMonth(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div class="table-responsive">
                    <table className="table table-bordered mt-4 caption-top">
                        <caption><b>Job Creation</b></caption>
                        <thead>
                            <tr>
                                <th scope="col" colspan="4" class="align-middle">Total Number of workers</th>
                                <th scope="col" colspan="3">Number of workers hired</th>
                                <th scope="col" colspan="3">Number of workers fired/resigned</th>
                                <th rowspan="2">Average number of worker during the month</th>
                                <th scope="col">Turnover Rate</th>
                                <th scope="col">Job creation</th>
                                <th scope="col">Cumulative new jobs created EFY 2015</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Male</td>
                                <td>Female</td>
                                <td>Expected</td>
                                <td>Total</td>
                                <td>Male</td>
                                <td>Female</td>
                                <td>Expected</td>
                                <td >Male</td>
                                <td>Female</td>
                                <td>Expected</td>
                            </tr>
                            <tr>
                                <td><input type="number" className="form-control" /></td>
                                <td><input type="number" className="form-control" /></td>
                                <td><input type="number" className="form-control" /></td>
                                <td><input type="number" className="form-control" /></td>
                                <td><input type="number" className="form-control" /></td>
                                <td><input type="number" className="form-control" /></td>
                                <td><input type="number" className="form-control" /></td>
                                <td><input type="number" className="form-control" /></td>
                                <td><input type="number" className="form-control" /></td>
                                <td><input type="number" className="form-control" /></td>
                                <td><input type="number" className="form-control" /></td>
                                <td><input type="number" className="form-control" /></td>
                                <td><input type="number" className="form-control" /></td>
                                <td><input type="number" className="form-control" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="table-responsive">
                    <table className="table table-bordered mt-4 caption-top">
                        <caption><b>Export and Import Substitute</b></caption>
                        <thead>
                            <tr>
                                <th scope="col">Planned Monthly export</th>
                                <th scope="col">Amount of export (USD)</th>
                                <th scope="col">Monthly import substitute(Local)</th>
                                <th scope="col">Amount import substitute (Birr)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="number" className="form-control" /></td>
                                <td><input type="number" className="form-control" /></td>
                                <td><input type="number" className="form-control" /></td>
                                <td><input type="number" className="form-control" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="table-responsive">
                    <table className="table table-bordered mt-4 caption-top">
                        <caption><b>On Job Training Certification</b></caption>
                        <thead>
                            <tr>
                                <th scope="col">Certificate Type </th>
                                <th scope="col">Number of the trainee </th>
                                <th scope="col">Duration of the training </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="number" className="form-control" /></td>
                                <td><input type="number" className="form-control" /></td>
                                <td><input type="number" className="form-control" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="table-responsive">
                    <table className="table table-bordered my-4 caption-top">
                        <caption><b>Covid 19 Status</b></caption>
                        <thead>
                            <tr>
                                <th scope="col">Negative</th>
                                <th scope="col">Positive</th>
                                <th scope="col">Recover</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="number" className="form-control" /></td>
                                <td><input type="number" className="form-control" /></td>
                                <td><input type="number" className="form-control" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button className='btn btn-primary mb-3'>Submit</button>
            </form>
        </div>
    )
}

export default Report