import React from 'react'
import AuthService from "../../services/auth/auth.service";

export default function Home() {
    const currentUser = AuthService.getCurrentUser();
    return (
        <div>
            <div className='row mt-5'>
                <div className='col-md-10 offset-md-1'>
                    <div class="card p-3 mb-3 bg-white rounded" style={{ boxShadow: "0 0 15px 0 lightblue" }}>
                        <h4 className='mb-4'>Statistics</h4>
                        <div className="row">
                            <div className='col-md-4'>
                                <div className="card text-white bg-primary mb-3">
                                    <div className="card-body d-flex flex-row">
                                        <div className="col-md-6" style={{ verticalAlign: "center" }}>
                                            <i class="fas fa-users" style={{ fontSize: "30px" }}></i>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <h3>20</h3>
                                            <span style={{ fontWeight: "bold" }}>Total Visitors</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="card text-white bg-warning mb-3">
                                    <div className="card-body d-flex flex-row">
                                        <div className="col-md-6" style={{ verticalAlign: "center" }}>
                                            <i class="fas fa-sign-in-alt" style={{ fontSize: "30px" }}></i>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <h3>20</h3>
                                            <span style={{ fontWeight: "bold" }}>Signed In</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="card text-white bg-danger mb-3">
                                    <div className="card-body d-flex flex-row">
                                        <div className="col-md-6" style={{ verticalAlign: "center" }}>
                                            <i class="fas fa-truck" style={{ fontSize: "30px" }}></i>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <h3>20</h3>
                                            <span style={{ fontWeight: "bold" }}>Deliveries</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-10 offset-md-1'>
                    <div class="card shadow-lg p-3 bg-white rounded" style={{ boxShadow: "0 0 15px 0 lightblue" }}>
                        <h4 className='mb-4'>Visitors List</h4>
                        <div className='row'>
                            <div className='col-md-6 col-sm-12 col-xs-12 mb-3'>
                                <button type="button" class="btn btn-success" style={{ marginRight: "2px" }}><i class="fas fa-sign-in-alt"></i> Sign In</button>
                                <button type="button" class="btn btn-primary" style={{ marginRight: "2px" }}><i class="fas fa-sign-out-alt"></i>Sign Out</button>
                                <button type="button" class="btn btn-danger"><i class="fas fa-trash-alt"></i> Delete</button>
                            </div>
                            <div className='col-md-6 col-sm-12 col-xs-12 text-right mb-3'>
                                <button type="button" class="btn btn-primary"><i class="fas fa-plus"></i> Add Visitor</button>
                            </div>
                            <div className='col-md-6 mb-3'>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1"><i class="fas fa-calendar"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="15 Aug 2022 - 20 Sept 2022" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                            <div className='col-md-6 mb-3'>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1"><i class="fas fa-search"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                            <div className='col-md-12 mt-3'>
                                <div className='table-responsive'>
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Fullname</th>
                                                <th scope="col">Company</th>
                                                <th scope="col">Added By</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Time In</th>
                                                <th scope="col">Time Out</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
