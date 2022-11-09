import React, { useEffect, useState } from "react";
import Reservation from "../models/Reservation";
import ReservationServices from "../services/reservation-services";
import RoomServices from "../services/room-services";
import SpinneretServices from "../services/spinneret-services";

export default function ReservationForm (props) {
    
  const [reservationSalleId, setReservationSalleId] = useState(0);
  const [reservationFiliereId, setReservationFiliereId] = useState(0);
  const [reservationDebut, setReservationDebut] = useState();
  const [reservationFin, setReservationFin] = useState();
  const [reservationHeureDeb, setReservationHeureDeb] = useState();
  const [reservationHeureFin, setReservationHeureFin] = useState();

  const [roomsList, setRoomsList] = useState([]);
  const [Filieres, setFilieres] = useState([]);

  const addReservation = () => {
    // const reservation = new Reservation(0, reservationDebut, reservationFin, 0, reservationFiliereId, reservationSalleId);
    // ReservationServices.addReservation(reservation).then(data => console.log(data));
  }

  useEffect(() => {
    RoomServices.getRooms().then(data => setRoomsList(data));
    SpinneretServices.getSpinnerets().then(data => setFilieres(data))
  }, [])
  
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
                <label htmlFor="exampleFormControlInput1" class="form-label">Nom de la salle :</label>
                <select class="form-select" aria-label="Default select example" onChange={(e) => setReservationSalleId(e.target.value)}>
                  <option selected>Choisissez une salle</option>
                  {
                    roomsList.map(room => (
                      <option key={room.id} value={room.id}>{room.name}</option>
                    ))
                  }
                </select>
              </div>
              <div class="d-flex flex-column align-items-start mb-3">
                <label htmlFor="exampleFormControlInput1" class="form-label">Filiere :</label>
                <select class="form-select" aria-label="Default select example" onChange={(e) => setReservationFiliereId(e.target.value)}>
                  <option selected>Choisissez une filiere</option>
                  {
                    Filieres.map(filiere => (
                      <option key={filiere.id} value={filiere.id}>{filiere.name}</option>
                    ))
                  }
                </select>
              </div>
              <p className='fs-5 fw-bold text-gray'>Plage horaire :</p>
              <div class="d-flex flex-column align-items-start mb-3">
                <label htmlFor="exampleFormControlInput1" class="form-label">Debut :</label>
                <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="" onChange={(e) => setReservationDebut(e.target.value)} />
              </div>
              <div class="d-flex flex-column align-items-start mb-3">
                <label htmlFor="exampleFormControlInput1" class="form-label">Fin :</label>
                <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="" onChange={(e) => setReservationFin(e.target.value)} />
              </div>
              <div class="d-flex flex-column align-items-start mb-3">
                <label htmlFor="exampleFormControlInput1" class="form-label">Heure de debut :</label>
                <input type="time" class="form-control" id="exampleFormControlInput1" placeholder="" />
              </div>
              <div class="d-flex flex-column align-items-start mb-3">
                <label htmlFor="exampleFormControlInput1" class="form-label">Heure de fin :</label>
                <input type="time" class="form-control" id="exampleFormControlInput1" placeholder="" />
              </div>
              <button className='btn btn-primaire mt-3' type='submit' onClick={() => {addReservation()}} >Enregistrer</button>
            </div>
          </div>
        </div>
    );
}