import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import ReservationModal from './reservation-modal';
import { useEffect, useState } from 'react';
import SpinneretServices from '../services/spinneret-services';

export default function SalleModal (props) {

    const [spinnerets, setSpinnerets] = useState([])

    useEffect (() => {
        SpinneretServices.getSpinneretsByRoom(props.salle.id).then(data => setSpinnerets(data))
    }, [])

    return (
        <>
        <div className="modal fade" id={`salleModal${props.salle.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{props.salle.name}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='w-100 d-flex flex-column justify-content-start align-items-start'>
                            <div className='w-100 d-flex justify-content-between align-items-center mb-3'>
                                <p className='p-0 m-0'>Contenance :</p>
                                <p className='py-1 px-2 m-0 badge-value'>{props.salle.contenance} places</p>
                            </div>
                            <div className='w-100 d-flex justify-content-between align-items-center mb-3'>
                                <p className='p-0 m-0'>Etat :</p>
                                <p className='py-1 px-2 m-0 badge-value'>{ props.salle.etat === 1 ? 'Reservee' : 'Libre' }</p>
                            </div>
                            <hr className='col-8 modal-line mx-auto' />
                            {
                                spinnerets.map(filiere => (
                                    <div className='w-100 px-2 py-3 d-flex justify-content-between align-items-center mb-2 badge-filiere' data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target={`${'#filiereModal' + filiere.id }`}>
                                        <p className='p-0 m-0 fw-bold text-gray-f'>{ filiere.name }</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primaire">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        {
            spinnerets.map(filiere => (
                <ReservationModal filiere = {filiere} salle={props.salle} />
            ))
        }
        </>
    );
}