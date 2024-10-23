import { Container, Row, Col, Form } from 'react-bootstrap';
import React from "react";
import "./loginPageStyle.css";
import logoIg from "../../assets/skill-icons_instagram.png";
import logoGoogle from "../../assets/Apple-icon.png";
import logo from "../../Assets/logu-green.png"

import logoApple from "../../assets/flat-color-icons_google.png";


function LoginPage() {
    return (
        <>
            <Container fluid className="min-vh-100 d-flex justify-content-center p-0">
                <Row className="w-100 d-flex flex-column">
                    <Col md={8} className="p-0 d-flex align-items-center justify-content-center content-column">
                        <Row className="d-flex align-items-center justify-content-center">
                            <Form>
                                <div className=" text-center mb-4">
                                    <h2>Sign in</h2>
                                </div>

                                <div className="login-external d-flex justify-content-center">
                                    <button class="btn btn-lg  button-external-login">
                                        <img src={logoGoogle} style={{ width: "20px" }} class="me-2" />
                                        <small> Google</small></button>
                                    <button class="btn btn-lg button-external-login">
                                        <img src={logoApple}  style={{ width: "20px" }} class="me-2" />
                                        <small> Apple</small></button>
                                    <button class="btn btn-lg button-external-login">
                                        <img src={logoIg}  style={{ width: "20px" }} class="me-2" />
                                        <small> instagram</small>
                                    </button>
                                </div>
                       
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1 border-bottom border-3 mt-1"></div>
                                    <span className="mx-2 fw-bold">Atau</span>
                                    <div className="flex-grow-1 border-bottom border-3 mt-1"></div>
                                </div>

                                <div class="input-group mb-3">
                                    <input type="text" class="form-control form-control-lg bg-light fs-6" placeholder="Email address" />
                                </div>
                                <div class="input-group mb-1">
                                    <input type="password" class="form-control form-control-lg bg-light fs-6" placeholder="Password" />

                                </div>
                                <div className="d-flex justify-content-end">
                                    <small>Lupa kata sandi</small>
                                </div>

                                <div class="input-group my-3 d-flex justify-content-center">
                                    <button class="btn btn-lg btn-primary w-50 fs-6">Login</button>
                                </div>
                                <div class="input-group my-3 d-flex justify-content-center">
                                    <small>Belum punya akun? <a href="" className="link">Daftar</a></small>
                                </div>
                            </Form>


                        </Row>
                    </Col>
                    <Col xs={12} md={4} className="p-0 bg-light d-flex flex-column align-items-center justify-content-center logo-column">

                        <img src={logo} alt="" />
                    </Col>
                </Row >
            </Container >
        </>
    );
}
export default LoginPage

