import React, { Component } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
// import 'primeflex/primeflex.css';
// import '../../index.css';
import falconForm, { isRequired, isEmail } from "falcon-form";
import './Login.css';


export class Login extends Component {

    constructor(props) {
        super(props);
    }

    testEvent = () => {
        alert("fuckyou");
    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-inverse">

                    <ul class="nav navbar-nav">
                        <li class="active">
                            <a>Tài khoản</a>
                        </li>
                        <li class="active">
                            <a>Khai thuế</a>
                        </li>
                        <li class="active">
                            <a>Nộp thuế điện tử</a>
                        </li>
                        <li class="active">
                            <a>Tra cứu</a>
                        </li>
                        <li class="active">
                            <a>Liên hệ</a>
                        </li>
                        <li class="active">
                            <a>Quản trị hệ thống</a>
                        </li>

                    </ul>
                </nav>
                <div className="body">

                    <main className="login-form">

                        <div className="cotainer">
                            <div className="row justify-content-center">
                                <div className="col-md-8">
                                    <div className="card">
                                        <div className="card-header"><h1>Đăng nhập</h1></div>
                                        <br />
                                        <br />
                                        <div className="card-body">
                                            <form action method>
                                                <div className="form-group row">
                                                    <label htmlFor="email_address" className="col-md-4 col-form-label text-md-right">Username</label>
                                                    <div className="col-md-6">
                                                        <input type="text" id="email_address" className="form-control" name="email-address" required autofocus />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                                    <div className="col-md-6">
                                                        <input type="password" id="password" className="form-control" name="password" required />
                                                    </div>
                                                </div>
                                                <div className="form-group row">

                                                    <div className="col-md-6 offset-md-4">
                                                        <button type="submit" className="btn btn-primary">
                                                            Đăng nhập</button>
                                                    </div>
                                                    <div className="col-md-6 offset-md-4">
                                                        <div className="checkbox">
                                                            <label>
                                                                <input type="checkbox" name="remember" /> Remember Me
                          </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 offset-md-4">

                                                    <a href="#" className="btn btn-link">
                                                        Đăng ký </a>

                                                    <a href="#" className="btn btn-link">
                                                        Forgot Your Password? </a>

                                                </div>
                                            </form></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                
                
                <div class="panel panel-default">
                      <div class="panel-body">
                            Công ty cyberlotus                                                     
                      </div>
                      <div class="panel-footer">
                            Address
                        </div>
                     
                        <div class="panel-footer">
                            Phone:
                        </div>
                        <div class="panel-footer">
                            Help
                        </div>
                </div>
                
            </div>
        )
    }
}
export default Login;