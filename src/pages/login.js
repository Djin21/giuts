import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import '../css/login.css';

export default function Login () {
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
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                            </div>
                            <div class="d-flex flex-column align-items-start mb-3">
                                <label for="exampleFormControlInput1 fs-5" class="form-label">Mot de passe :</label>
                                <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="" />
                            </div>
                            <button type="submit" className="btn btn-primaire">Se connecter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}