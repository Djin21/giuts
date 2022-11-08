import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import SideBar from "../components/sidebar";
import '../css/salles.css';
import RoomServices from "../services/room-services";
import Room from "../models/Room";
import { Link } from "react-router-dom";

export default function Salles () {

    const [rooms, setRooms] = useState([]);
    const [stateForm, setStateForm] = useState(0);
    const [currentRoom, setCurrentRoom] = useState(null)

    const setRoom = (room) => {
        setStateForm(1)
        setCurrentRoom(room)
    }

    const changeForm = (id) => {
        setCurrentRoom(null)
        setStateForm(id)
    }

    const [roomName, setRoomName] = useState('');
    const [roomCode, setRoomCode] = useState('');
    const [roomContenance, setRoomContenance] = useState(0);

    const addRoom = () => {
        const room = new Room(roomCode, roomName, roomContenance)
        RoomServices.addRooms(room);
        RoomServices.getRooms().then(data => setRooms(data));
        window.location.reload();
    }
    // window.location.reload();

    const updateRoom = () => {
        const room = new Room(currentRoom.id, roomCode, roomName, roomContenance)
        RoomServices.updateRooms(room);
        RoomServices.getRooms().then(data => setRooms(data));
        window.location.reload();
    }

    const deleteRoom = () => {
        RoomServices.deleteRoom(currentRoom);
        setCurrentRoom(null);
        RoomServices.getRooms().then(data => setRooms(data));
        window.location.reload();
        
    }

    useEffect(() => {
        RoomServices.getRooms().then(data => setRooms(data));
    }, [])

    return (
        <div className="container-fluid">
            <SideBar />
            <div className="right-section p-4">
                <div className="rect-salle mb-4 p-3 rounded-3 d-flex justify-content-center align-items-center">
                    <h5 className="p-0 m-0 text-center">{ stateForm === 0 ? 'Nouvelle salle' : currentRoom !== null ? currentRoom.name : '' }</h5>
                </div>
                <div className="contenu">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Nom</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder={currentRoom !== null ? currentRoom.name : "Nom de la salle"} onChange={(e) => {setRoomName(e.target.value)}} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Code</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder={currentRoom !== null ? currentRoom.code : "#0000"} onChange={(e) => {setRoomCode(e.target.value)}} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Contenance</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder={currentRoom !== null ? currentRoom.contenance : "100"} onChange={(e) => {setRoomContenance(e.target.value)}} />
                    </div>
                    <button className="btn btn-primaire w-100 mt-3" data-bs-toggle="modal" data-bs-target={`${stateForm === 0 ? '#saveModal' : '#updateModal'}`}>Enregistrer</button>
                    { stateForm === 0 ? '' : (
                        <button className="btn btn-gray w-100 mt-3" data-bs-toggle="modal" data-bs-target="#deleteModal">Supprimer</button>
                    ) }
                </div>
            </div>
            <div class="modal fade" id="saveModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Enregistrement</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p className="text-center fs-5">Voulez vous ajouter cette salle ?</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primaire" onClick={() => { stateForm === 0 ? addRoom() : updateRoom() }}>Ajouter</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Enregistrement</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p className="text-center fs-5">Voulez vous modifier cette salle ?</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primaire" onClick={() => { stateForm === 0 ? addRoom() : updateRoom() }}>Modifier</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Enregistrement</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p className="text-center fs-5">Voulez vous supprimer cette salle ?</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primaire" onClick={ () => {deleteRoom()} }>Supprimer</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid main-container">
                <h3 className='text-start page-title ms-0 mt-5'>Gestion des salles</h3>
                <div className="left-section pe-5 mt-3">
                    <div className='row pt-3 mb-3 d-flex flex-row justify-content-start align-items-center'>
                        <ul className='d-flex flex-row justify-content-start align-items-center w-auto m-0'>
                            <li className='type-item me-4'>
                                <button className='btn btn-primaire' onClick={() => {changeForm(0)}}>Nouveau</button>
                            </li>
                            <li className='type-item me-4'>
                                <button className='btn btn-primaire'>Libres</button>
                            </li>
                        </ul>
                        <div class="form-floating w-50 ms-auto" id='searchBar'>
                            <input type="text" class="form-control border-0" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput" className='ps-4'>Search</label>
                        </div>
                    </div>
                    <div className="mb-3 d-flex justify-content-start align-items-center">
                        <p className="fs-5 fw-bold text-gray m-0 p-0">Salles :</p>
                        <p className="fs-5 fw-bold text-gray-f m-0 p-0 ms-4">{rooms.length}</p>
                    </div>
                    <ul className="p-0 m-0">
                        {
                            rooms.map(room => (
                                <li>
                                    <div className="card-salle w-100 px-3 py-3 rounded-3 mb-3 d-flex flex-row justify-content-between align-items-center" onClick={() => {setRoom(room)}}>
                                        <p className="p-0 m-0">{ room.name }</p>
                                        <p className="p-0 m-0">{ room.etat === 1 ? 'Occupe' : 'Libre' }</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}