import React from "react";

export default function ReservationForm (props) {
    return (
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header bg-primaire">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Nouvelle reservation</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div>
              {/* <p className='fs-5 fw-bold text-gray text-center'>Nouvelle reservation</p> */}
            </div>
            <div className="d-flex flex-column mt-2">
              <div class="d-flex flex-column align-items-start mb-3">
                <label for="exampleFormControlInput1" class="form-label">Nom de la salle :</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Choisissez une salle</option>
                  {
                    props.roomsList.map(room => (
                      <option key={room.id} value={room.id}>{room.name}</option>
                    ))
                  }
                </select>
              </div>
              <div class="d-flex flex-column align-items-start mb-3">
                <label for="exampleFormControlInput1" class="form-label">Filiere :</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Choisissez une filiere</option>
                  {
                    props.Filieres.map(filiere => (
                      <option key={filiere.id} value={filiere.id}>{filiere.name}</option>
                    ))
                  }
                </select>
              </div>
              <p className='fs-5 fw-bold text-gray'>Plage horaire :</p>
              <div class="d-flex flex-column align-items-start mb-3">
                <label for="exampleFormControlInput1" class="form-label">Debut :</label>
                <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="" />
              </div>
              <div class="d-flex flex-column align-items-start mb-3">
                <label for="exampleFormControlInput1" class="form-label">Fin :</label>
                <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="" />
              </div>
              <div class="d-flex flex-column align-items-start mb-3">
                <label for="exampleFormControlInput1" class="form-label">Heure de debut :</label>
                <input type="time" class="form-control" id="exampleFormControlInput1" placeholder="" />
              </div>
              <div class="d-flex flex-column align-items-start mb-3">
                <label for="exampleFormControlInput1" class="form-label">Heure de fin :</label>
                <input type="time" class="form-control" id="exampleFormControlInput1" placeholder="" />
              </div>
              <button className='btn btn-primaire mt-3' type='submit'>Enregistrer</button>
            </div>
          </div>
        </div>
    );
}