import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import '../css/login.css';
import { Link } from "react-router-dom";

export default function Login () {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="" id="background">
            <div className="d-flex justify-content-center align-items-center" id="background-blur">
                {/* <div className="col-5 d-flex justify-content-center align-items-center">
                    <div className="login-image rounded-pill">

                    </div>
                </div> */}
                <div className="col-12">
                    <div className="formulaire m-auto rounded-3">
                        <div className="formulaire-header rounded-3 p-3">
                            <h4 className="text-center fs-2">Connexion</h4>
                        </div>
                        <div className="formulaire-body p-3 rounded-3">
                            <div class="d-flex flex-column align-items-start mb-3">
                                <label for="exampleFormControlInput1 fs-5" class="form-label">Login :</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" value={login} />
                            </div>
                            <div class="d-flex flex-column align-items-start mb-3">
                                <label for="exampleFormControlInput1 fs-5" class="form-label">Mot de passe :</label>
                                <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="" />
                            </div>
                            <div className="d-flex justify-content-end">
                                <Link to="/main" className="me-3">
                                    <button type="submit" className="btn btn-primaire">Se connecter</button>
                                </Link>
                                <Link to="/main">
                                    <button type="submit" className="btn btn-primaire">Consulter</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}